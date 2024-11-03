'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Users, Info } from 'lucide-react';
import Image from 'next/image';
import Navigation from './components/Navigation';
import MenuCard, { MenuCardContainer } from './components/MenuCard';
import { menuData, generalNotes } from './data/menuData';

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
        className="relative min-h-screen flex items-center justify-center"
        aria-label="Home section"
      >
        <motion.div
          {...fadeInUp}
          className="text-center px-4"
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
              aria-label="Bekijk onze menu&apos;s"
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
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 scroll-mt-16" aria-label="Menu section">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
              Onze Menu&apos;s
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Kies uit onze zorgvuldig samengestelde menu&apos;s voor een onvergetelijke Thaise ervaring
            </p>
          </motion.div>

          <MenuCardContainer menus={menuData} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex items-center gap-3">
                  <Users className="text-amber-500" aria-hidden="true" />
                  <span className="text-white/80">5-20 personen</span>
                </div>
                <div className="flex items-center gap-3">
                  <Info className="text-amber-500" aria-hidden="true" />
                  <span className="text-white/80">Inclusief witte en gebakken rijst</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-amber-500" aria-hidden="true" />
                  <span className="text-white/80">Brasschaat · Schilde · Kapellen</span>
                </div>
              </div>

              <a
                href="tel:+32484767586"
                className="flex items-center gap-2 px-8 py-4 bg-amber-500 text-black rounded-full 
            hover:bg-amber-400 transition-all whitespace-nowrap focus:ring-2 focus:ring-offset-2 
            focus:ring-amber-500 focus:outline-none"
                aria-label="Bel +32 484 76 75 86 om te reserveren"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                +32 484 76 75 86
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {generalNotes.map((note, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-white/60 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <p>{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="over-ons"
        className="py-32 scroll-mt-16"
        aria-label="Over ons section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeInLeft}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl transform rotate-3" />
              <div className="relative z-10 w-full h-[600px]">
                <Image
                  src="/assets/noi.jpg"
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
                  Welkom op mijn culinaire reis! Als Thaise chef-kok breng ik de authentieke
                  smaken van mijn thuisland naar uw keuken.
                </p>
                <p>
                  Na jaren ervaring in mijn eigen restaurant, deel ik nu mijn passie
                  voor Thaise gerechten door persoonlijke kookservices aan huis aan te bieden.
                </p>
                <p>
                  Mijn doel is om een onvergetelijke eetervaring te creëren die de warmte
                  en gastvrijheid van Thailand combineert met het comfort van uw eigen huis.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 backdrop-blur-sm border-t border-white/10"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12">
                <Image
                  src="/assets/logo.png"
                  alt="Aroy logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                AROY
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center gap-3">
                <Phone className="text-amber-500" aria-hidden="true" />
                <a
                  href="tel:+32484767586"
                  className="text-white/80 hover:text-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md"
                >
                  +32 484 76 75 86
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-amber-500" aria-hidden="true" />
                <span className="text-white/80">Brasschaat · Schilde · Kapellen</span>
              </div>
            </div>

            <div className="text-white/40 text-sm">
              © {new Date().getFullYear()} Aroy Thai Homecooking
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            <p>
              Website developed by{' '}
              <a
                href="https://sennebels.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md"
                aria-label="Visit Senne Bels website"
              >
                Senne Bels
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}