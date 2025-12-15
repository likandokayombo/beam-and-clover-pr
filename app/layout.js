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
  title: "Beam & Clover | Digital Vehicle Administration & IT Solutions",
  description:
    "Premier provider of digital vehicle registration systems, government fleet administration, and enterprise IT integration services in Nigeria. Trusted by government agencies for secure, scalable technology solutions.",
  icons: {
    icon: "/images/B-C.png",
    shortcut: "/images/B-C.png",
    apple: "/images/B-C.png",
  },
  openGraph: {
    images: ["/images/og-image.webp"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.webp"],
  },
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
