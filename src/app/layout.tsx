import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Layout/Header/Header";
import { Poppins } from "next/font/google";
import { Providers } from "../redux/Provider";
import NextTopLoader from "nextjs-toploader";
import { colors } from "@/constant/Colors";
import Head from "next/head";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Order Broadway Pizza Pakistan Online - Best Pizza Deals",
  description:
    "Broadway Pizza is offering online ordering services in Pakistan. Order now and get amazing discounts and coupons on pizza deals and other fast food.",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["/favicon.ico"],
  },
  // manifest: "/manifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <html lang="en">
          <body className={`${poppins.variable}`}>
            <NextTopLoader color={colors.primary} height={6} />
            <Header />
            {children}
          </body>
        </html>
      </Providers>
    </>
  );
}
