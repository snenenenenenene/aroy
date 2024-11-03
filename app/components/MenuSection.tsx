// components/MenuSection.tsx (Optimized version)
'use client';

import { memo } from 'react';
import { Phone, MapPin, Users, Info } from 'lucide-react';
import Image from 'next/image';
import { menuData } from '../data/menuData';
import { MenuCard } from './MenuCard';

export const MenuSection = memo(() => {
	return (
		<section id="menu" className="py-32 scroll-mt-16">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
						Onze Menu&apos;s
					</h2>
					<p className="text-white/60 max-w-2xl mx-auto">
						Kies uit onze zorgvuldig samengestelde menu&apos;s voor een onvergetelijke Thaise ervaring
					</p>
				</div>

				{/* Menu Grid */}
				<div className="grid lg:grid-cols-2 gap-6">
					{menuData.map((menu) => (
						<MenuCard key={menu.title} menu={menu} />
					))}
				</div>

				{/* Info Section */}
				<div className="mt-12 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
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
                hover:bg-amber-400 transition-colors whitespace-nowrap focus:ring-2 focus:ring-offset-2 
                focus:ring-amber-500 focus:outline-none"
						>
							<Phone className="w-5 h-5" aria-hidden="true" />
							+32 484 76 75 86
						</a>
					</div>

				</div>
			</div>
		</section>
	);
});
MenuSection.displayName = 'MenuSection';

export default MenuSection;