import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
        <div className="page-container">
          <Navbar />
          <main className="main">{children}</main>
          <Footer />
        </div>
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
        <span className="credit">Credits: 10</span>
        <Link href="/Pricing">Pricing</Link>
        <Link href="/documents">My Documents</Link>
        <button className="login-btn">Login</button>
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
