import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const font = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Clodron Design & Development Studio",
  description: "Grow your business with Clodron.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
