'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import Navigation from './components/Navigation';
import MenuSection from './components/MenuSection';
import InfoSection from './components/InfoSection';
import { DevelopmentBanner } from './components/DevelopmentBanner';

// Animation variants for better reuse and performance
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Home section"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/aroy13.jpg"
            alt="Thai Cuisine Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        {/* Content */}
        <motion.div
          {...fadeInUp}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-40 h-40 mx-auto mb-8"
          >
            <Image
              src="/assets/logo.png"
              alt="Aroy Logo"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
            Een Thaise kok aan huis
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Geniet van authentieke Thaise smaken, vers bereid in uw eigen keuken door Chef Noi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="px-8 py-4 bg-amber-500 rounded-full text-black hover:bg-amber-400 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 focus:outline-none"
              aria-label="Bekijk onze menu's"
            >
              Bekijk Menu&apos;s
            </a>
            <a
              href="tel:+32484767586"
              className="px-8 py-4 bg-white/10 rounded-full hover:bg-white/20 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-white/50 focus:outline-none"
              aria-label="Bel ons om te reserveren"
            >
              Reserveer Nu
            </a>
          </div>
        </motion.div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
      </section>

      <MenuSection />

      {/* About Section */}
      <section
        id="over-ons"
        className="min-h-screen relative flex items-center py-24 scroll-mt-16 overflow-hidden"
        aria-label="Over ons section"
      >
        {/* Decorative Images */}
        <div className="absolute -right-20 top-20 w-64 h-64 opacity-20 rotate-12 pointer-events-none">
          <Image
            src="/assets/images/aroy4.jpg"
            alt=""
            fill
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="absolute -left-20 bottom-20 w-64 h-64 opacity-20 -rotate-12 pointer-events-none">
          <Image
            src="/assets/images/aroy7.jpg"
            alt=""
            fill
            className="object-cover rounded-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeInLeft}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl transform rotate-3" />
              <div className="relative z-10 w-full h-[600px]">
                <Image
                  src="/assets/Noi.jpg"
                  alt="Chef Noi in haar keuken"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              {...fadeInRight}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                Chef Noi
              </h2>
              <div className="space-y-6 text-white/80">
                <p>
                  Ik ben in 1998 gearriveerd te België en bracht zo als eerste chef de Thaise smaken in België. 
                  Heb onmiddellijk Nederlands geleerd met avondschool. Ik ben Thais chef-kok en heb later ook hier 
                  in België drie jaar traiteur opleiding voltooid.
                </p>
                <p>
                  In 2000 heb ik mijn eerste succesvolle zaak geopend te Deurne (Bosuil) restaurant waar ik 20 jaar 
                  mijn Thaise culinaire kunsten heb gedeeld. Vele mensen kennen mij ook als chefkok uitbater van het 
                  uithaalrestaurant Aroy te Brasschaat.
                </p>
                <p>
                  Voor de klassieker Pad Thai kwam men van ver deze uit te halen. U moet natuurlijk weten dat de echte 
                  verse al dente krachtiger en beter smaakt dan uithaal dewelke gemiddeld half uur in verpakking zit.
                </p>
                <p>
                  Nu deel ik graag mijn kunsten en passie bij u thuis, vers en gemakkelijk. You&apos;re the king!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <InfoSection />
      <DevelopmentBanner />
    </div>
  );
}