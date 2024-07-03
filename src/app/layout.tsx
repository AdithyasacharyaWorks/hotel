import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotels in Kundapur",
  description: "Best hotels in Kundapur udupi, kundapur ,best in kundapur , samyudutha , cheap hotel , best value for money Get Amazing deals on Budget Hotels in Kundapur.✔ Use coupon code &amp; Get Upto 70% OFF instantly on Kundapur Hotels.Cheap hotels in Kundapur with tariff, amenities &amp; all details. Find budget room rates, location, address, contact phone no and  more kundapur kundapur kundapur kundapur kundapur kundapur kundapur kundapur kundapur kundapurkundapurkundapur kundapur kundapur kundapur kundapur kundapur kundapur kundapur kundapur kundapur kundapur kundapurkundapur kundapur kundapur kundapur kundapur kundapur kundapur kundapur ",
  keywords:"Budget, Cheap, Budget Kundapur hotels, Kundapur, Budget hotel deals in Kundapur, Budget Kundapur hotel offers, Kundapur Budget hotels, Kundapur hotels, budget accommodation in Kundapur, budget accommodation Kundapur, budget travel Kundapur, Cheap Hotels in Kundapur  , Kundapur, Kundapur , Kundapur , Kundapur, Kundapur"

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
