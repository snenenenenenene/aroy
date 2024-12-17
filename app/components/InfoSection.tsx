'use client';

import { memo } from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import Image from 'next/image';

export const InfoSection = memo(() => {
  return (
    <section id="contact" className="min-h-screen flex items-center relative">
    
      <div className="relative z-10 w-full py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Contact
                </h2>
                <p className="text-lg text-white/80">
                  Neem contact met ons op voor reserveringen en meer informatie
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Telefoon</p>
                    <a 
                      href="tel:+32484767586" 
                      className="text-lg text-white hover:text-amber-500 transition-colors"
                    >
                      +32 484 76 75 86
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">E-mail</p>
                    <a 
                      href="mailto:aroy.homecooking@gmail.com" 
                      className="text-lg text-white hover:text-amber-500 transition-colors"
                    >
                      aroy.homecooking@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Service gebied</p>
                    <p className="text-lg text-white">Brasschaat · Schilde · Kapellen</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/assets/logo.png"
                      alt="Aroy Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AROY HOMECOOKING</h3>
                    <p className="text-white/60">Thaise kok aan huis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours & Additional Info */}
            <div className="space-y-8 lg:pl-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Beschikbaarheid</h3>
                <p className="text-white/80">
                  Wij zijn beschikbaar voor lunch en diner op afspraak. 
                  Neem contact met ons op voor de mogelijkheden.
                </p>
                <p className="text-white/60">
                  * Wij sluiten af om 23:00u
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Extra Informatie</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Minimum 6, maximum 20 personen</li>
                  <li>• Eerste werkuur chef kok inbegrepen</li>
                  <li>• Extra uur en bediening: €50 incl. BTW</li>
                  <li>• Verplaatsingskosten worden berekend per km</li>
                </ul>
              </div>

              <div className="pt-8 border-t border-white/10">
                <a
                  href="tel:+32484767586"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black rounded-full 
                    hover:bg-amber-400 transition-colors font-medium"
                >
                  <Phone className="w-5 h-5" />
                  Bel voor reservering
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

InfoSection.displayName = 'InfoSection';

export default InfoSection; 