import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat-mont",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const clash = localFont({
  variable: "--font-clash-mono",
  src: [
    {
      path: "../assets/fonts/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/ClashDisplay-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../assets/fonts/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "semiBold",
    }
  ],
});

export const metadata: Metadata = {
  title: "The Setter Circle",
  description: "Make More Revenue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${clash.className} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
