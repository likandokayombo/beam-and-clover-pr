import { Mulish, Open_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-heading",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Beam and Clover",
  description: "Trusted Round Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${openSans.variable} ${geistMono.variable}  antialiased selection:bg-[#F48244]/40 selection:text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
