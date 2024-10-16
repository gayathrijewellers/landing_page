import type { Metadata } from "next";
import "./globals.css";
import { quattrocento } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Gayathri Jewellers",
  description: "Gayathri Jewellers, Thirthalli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quattrocento.className}>{children}</body>
    </html>
  );
}
