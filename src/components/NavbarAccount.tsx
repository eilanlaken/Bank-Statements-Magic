"use client";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function NavbarAccount() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex-row">
        {/* Tokens */}
        <p>{session.user.tokensBalance ?? 0} tokens 🪙</p>

        {/* Links */}
        <Link href="/buy-tokens">Buy Tokens</Link>
        <Link href="/documents">My Documents</Link>
        <Link href="/account">Account</Link>

        {/* Greeting */}
        <p>Hello {session.user.name}</p>

        {/* Profile image */}
        {session.user.image && (
          <Image
            className="rounded-full"
            src={session.user.image}
            alt={session.user.name ?? "Profile"}
            width={32}
            height={32}
          />
        )}
      </div>
    );
  }

  return (
    <button className="google-btn" onClick={() => signIn("google")}>
      <Image
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google logo"
        width={18}
        height={18}
      />
      <span>Sign in with Google</span>
    </button>
  );
}
