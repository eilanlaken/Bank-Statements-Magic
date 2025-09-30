import { getConverter } from "@/lib/convert";
import { Converter } from "@/lib/convert/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const bankName = formData.get("bankName") as string | null;

  // perform validation
  if (!file) {
    return NextResponse.json({ error: "No File Uploaded" }, { status: 400 });
  }
  if (!bankName) {
    return NextResponse.json(
      { error: "No bankName provided" },
      { status: 400 }
    );
  }

  const converter: Converter = getConverter(bankName);
  if (!converter) {
    return NextResponse.json(
      { error: `Unsupported bank ${bankName}` },
      { status: 400 }
    );
  }

  // perform conversion operation
  const csv = await converter.convert();
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="${bankName}.csv"`,
    },
  });
}
