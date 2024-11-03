// RootLayout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import MorphingGradientBackground from "./components/MorphingGradientBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aroy Homecooking",
  description: "Thai Homecooking om authentieke smaken van de Thaise keuken bij u thuis te brengen",
  keywords: "thai, homecooking, antwerp, brasschaat, authentic, thai cuisine, Aroy",
  icons: [{ rel: "icon", url: "public/assets/favicon-aroy.ico" }],
  category: "Restaurant",
  robots: {
    googleBot: { index: true },
    index: true,
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.aroybrasschaat.be/",
    title: "Aroy Homecooking",
    description: "Delicious Thai meals made in your home.",
    creator: "@snenenenene",
    images: [{ url: "public/assets/logo.png" }],
  },
  applicationName: "Aroy Homecooking",
  authors: [{ name: "Senne Bels", url: "https://sennebels.xyz" }],
  creator: "Senne Bels",
  publisher: "Senne Bels",
  openGraph: {
    title: "Aroy Homecooking",
    creators: ["@snenenenene"],
    siteName: "Aroy Homecooking",
    description: "Aroy Homecooking brings the authentic flavors of Thailand to your home.",
    url: "https://www.aroybrasschaat.be/",
    images: [{ url: "public/assets/logo.png" }],
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className="bg-[#080808] min-h-screen font-nourd">
        <MorphingGradientBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;