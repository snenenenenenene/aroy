import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import HashHandler from "./components/hash-handler";
import { AnimatePresence } from "framer-motion";
import { HashProvider } from "./context/hash-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aroy Homecooking",
  description: "Thai Homecooking in Antwerp",
  keywords: "thai, homecooking, antwerp",
  icons: [
    {
      rel: "icon",
      url: "public/assets/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          scrollBehavior: "smooth",
        }}
        className={`font-nourd scroll-smooth bg-white text-light-white h-screen w-screen flex flex-col text-light`}
      >
        <HashProvider>
          <HashHandler containerId="scrollContainer" />

          <Sidebar />
        </HashProvider>
        <div className="w-full flex h-full overflow-hidden">
          <main
            // transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
            id="scrollContainer"
            style={{ scrollSnapType: "y mandatory", scrollPaddingTop: "0px" }}
            className="overflow-y-scroll overflow-x-hidden flex flex-col w-full"
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
