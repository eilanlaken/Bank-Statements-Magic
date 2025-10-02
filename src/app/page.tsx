"use client";

import PDFConverter from "@/components/PDFConverter";
import Welcome from "@/components/Welcome";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div>
        <PDFConverter />
      </div>
    );
  }

  return (
    <div>
      <Welcome />
    </div>
  );
}
