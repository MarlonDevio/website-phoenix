import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils/cn";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarlonDev.io",
  description:
    "MarlonDev.io - Your Business Vision, My FullStack Mission - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased")}>{children}</body>
    </html>
  );
}
