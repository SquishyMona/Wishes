import type { Metadata } from "next";
import { Inter, Tenor_Sans, Asap } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });
export const tenor_sans = Tenor_Sans({ subsets: ["latin"], weight: '400', variable: '--font-tenor-sans'});
export const asap = Asap({ subsets: ["latin"], weight: '400', variable: '--font-asap'});

export const metadata: Metadata = {
  title: "Wishes",
  description: "Wish for anything.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={`${inter.className} ${tenor_sans.variable} ${asap.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
