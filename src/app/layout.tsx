import type { Metadata } from "next";
import { Inter, Tenor_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });
export const tenor_sans = Tenor_Sans({ subsets: ["latin"], weight: '400', variable: '--font-tenor-sans'});

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
    <html lang="en">
      <body className={`${inter.className} ${tenor_sans.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
