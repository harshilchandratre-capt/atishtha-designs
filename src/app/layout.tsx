import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Atishtha Designs",
  description: "Interior Design Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${lato.className} bg-light text-gray-900 text-[.8rem] md:text-[.9rem]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
