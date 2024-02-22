import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import LocalFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const backTo1982 = LocalFont({
  src: [
    { 
      path: '../../public/fonts/BACKTO1982.TTF',
      weight: '400'
    }
  ],
  variable: '--font-back_to_1982'
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(`${inter.className} w-full h-full`, backTo1982.variable)}>  
        {children}
      </body>
    </html>
  );
}
