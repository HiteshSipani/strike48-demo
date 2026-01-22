import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // <--- THIS IS THE MAGIC LINE

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strike48 Prospector Studio",
  description: "Agentic Log Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}