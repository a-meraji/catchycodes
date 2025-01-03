import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "CatchyCodes",
  description: "Your Catchy Product!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("  light  antialiased")}>
        <Navbar />
        <div className=" dark:bg-black bg-[#ffe8d3] -z-10 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] fixed top-0 bottom-0 left-0 right-0 h-screen flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
