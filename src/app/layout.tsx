import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/Providers";
import NavbarAccount from "@/components/NavbarAccount";

export const metadata: Metadata = {
  title: "Bank Statements Magic",
  description: "Convert bank statements to spreadsheets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="page-container">
            <Navbar />
            <main className="main">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        Bank Statements Magic
      </Link>
      <div className="navbar-right">
        {/* <span className="credit">Tokens: 10</span>
        <Link href="/Pricing">Pricing</Link>
        <Link href="/documents">My Documents</Link>
        <button className="login-btn">Login</button> */}
        <NavbarAccount />
      </div>
    </nav>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>© {year} Bank Statements Magic</span>
      <div className="footer-right">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/about">About</Link>
      </div>
    </footer>
  );
}
