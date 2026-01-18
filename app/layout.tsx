import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google"; // <--- Updated Import
import "./globals.css";
import Header from "@/components/Header";
import CustomScrollbar from "@/components/CustomScrollbar"; // <--- Import the new engine

// Initialize Inter Tight
const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stronghold Labs",
  description: "Advanced algorithmic solutions",
  icons: {
    icon: "/SL_logo.png", // <--- This sets the tab icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={interTight.className}>
        <CustomScrollbar /> 
        <Header />
        {children}
      </body>
    </html>
  );
}