import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Header from "../components/header";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "Inkspire",
  description: "Journal App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        <div
          className="bg-[url('/bgg.avif')] fixed inset-0 -z-10 opacity-50"
        />
        <Header/>
                  <main className="min-h-screen">{children}</main>
      </body>
    </html>
    </ClerkProvider>
  );
}
