import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AS FASHIONS",
  description: "Discover fashion, trends and premium styles at AS FASHIONS."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
