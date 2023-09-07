"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

import { Poppins } from "next/font/google";
import "aos/dist/aos.css";
import React from "react";
import AOS from "aos";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  React.useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-[102vh] relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
