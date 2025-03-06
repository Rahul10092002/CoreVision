import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoreVision",
  description:
    "CoreVision is a strategic video marketing and digital growth agency dedicated to helping brands maximize their impact through high-quality content and innovative marketing strategies.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
