import type { Metadata } from "next";
import { Cousine } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const cousine = Cousine({
  variable: "--font-cousine",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const arialNarrow = localFont({
  src: "../public/fonts/ArialNarrow.woff2",
  variable: "--font-arial-narrow",
  display: "swap",
});

const wagramSlab = localFont({
  src: "../public/fonts/WagramSlab.woff2",
  variable: "--font-wagram-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Courtney & Ajax",
    template: "%s | Courtney & Ajax",
  },
  description:
    "Join Courtney and Ajax for their wedding celebration at Gramvousa Restaurant in Crete, Greece on May 29th.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cousine.variable} ${arialNarrow.variable} ${wagramSlab.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
