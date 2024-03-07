import type { Metadata } from "next";
import { Inter, Tenor_Sans, Asap } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { AllLists } from "@/components/Lists";
import { AuthContextProvider } from "@/context/AuthContext";

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
    <html lang="en" id="htmlroot" data-theme="mydarktheme">
      <body className={`${inter.className} ${tenor_sans.variable} ${asap.variable}`}>
        <AuthContextProvider>
          <Navigation />
          <div className="h-[80vh]">
            <div className="drawer md:auto-cols-[25%_auto] md:drawer-open h-full max-w-[1280px] mx-auto">
              <input id="wishes-drawer-toggle" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content md:h-[85vh]">
                {children}
              </div> 
              <div className="drawer-side">
                <label htmlFor="wishes-drawer-toggle" aria-label="close sidebar" className="drawer-overlay"></label> 
                <div className="w-3/4 md:w-full md:mx-3">
                  <AllLists />  
                </div>
              </div>
            </div>
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
