import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils/cn";
import Navbar from "../../components/ui/navbar/navbar";
import { ThemeContextProvider } from "./themeContext";
import { Menu } from "@/components/menu/Menu";

const poppinsFont = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
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
      <body
        className={cn(
          poppinsFont.className,
          "bg-white text-black antialiased dark:bg-black dark:text-grey-1",
        )}
      >
        <Menu />
        {/* <Navbar /> */}
        {children}

        <SpeedInsights />
      </body>
    </html>
  );
}
