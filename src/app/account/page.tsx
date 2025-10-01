import prisma from "@/lib/database/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Account() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return <p>go away</p>;
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      Purchase: true,
      Conversion: true,
    },
  });

  if (!user) {
    return <p>404 user not found</p>;
  }

  return (
    <div>
      <h1>Account Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Tokens: {user.tokensBalance}</p>
      {/* <p>Number of Purchases: {user.purchases.length}</p>
      <p>Number of Conversions: {user.conversions.length}</p> */}
    </div>
  );
}

// TODO: right now, this show info for all accounts.
