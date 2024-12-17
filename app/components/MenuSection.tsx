// components/MenuSection.tsx (Ultra-compact version)
'use client';

import { memo, useMemo } from 'react';
import { menuData, MenuCategory } from '../data/fullMenu';
import { NewMenuItem } from './NewMenuItem';
import { OrderSummary } from './OrderSummary';
import { useOrder } from '../context/OrderContext';
import Image from 'next/image';
import { Info, Clock, ChefHat, Users, Utensils } from 'lucide-react';
import { SectionDecorator, FloatingElement } from './ThaiDecorative';

const ITEMS_PER_SECTION = 6; // Smaller sections for better distribution

export const MenuSection = memo(() => {
	const { selectedItems } = useOrder();

	// Organize categories into balanced columns
	const organizedCategories = useMemo(() => {
		const result: MenuCategory[][] = [[], [], [], [], []]; // 5 columns
		let totalItems = 0;
		let currentColumn = 0;
		let currentColumnItems = 0;

		// First, split large categories
		const splitCategories = menuData.categories.flatMap(category => {
			if (category.items.length <= ITEMS_PER_SECTION) {
				return [category];
			}
			
			const parts = Math.ceil(category.items.length / ITEMS_PER_SECTION);
			return Array.from({ length: parts }, (_, index) => ({
				name: `${category.name}${parts > 1 ? ` (${index + 1}/${parts})` : ''}`,
				items: category.items.slice(
					index * ITEMS_PER_SECTION,
					(index + 1) * ITEMS_PER_SECTION
				)
			}));
		});

		// Then distribute categories into columns
		splitCategories.forEach(category => {
			if (currentColumnItems >= ITEMS_PER_SECTION * 2) {
				currentColumn++;
				currentColumnItems = 0;
			}
			if (currentColumn < 5) {
				result[currentColumn].push(category);
				currentColumnItems += category.items.length;
				totalItems += category.items.length;
			}
		});

		return result;
	}, []);

	const infoItems = [
		{ icon: Users, text: "6-20 personen" },
		{ icon: ChefHat, text: "Vers bereid bij u thuis" },
		{ icon: Clock, text: "Showcooking mogelijk (meerprijs)" },
		{ icon: Info, text: "Prijzen excl. BTW" },
		{ icon: Utensils, text: "Witte rijst €2 p.p." },
	];

	return (
		<section id="menu" className="py-6 scroll-mt-16 relative overflow-hidden">
			{/* Decorative Images */}
			<FloatingElement className="absolute -right-40 top-20 w-80 h-80 opacity-10 rotate-12 pointer-events-none">
				<Image
						src="/assets/images/aroy12.jpg"
						alt=""
						fill
						className="object-cover rounded-3xl"
				/>
			</FloatingElement>
			<FloatingElement className="absolute -left-40 bottom-40 w-80 h-80 opacity-10 -rotate-12 pointer-events-none">
				<Image
						src="/assets/images/aroy19.jpg"
						alt=""
						fill
						className="object-cover rounded-3xl"
				/>
			</FloatingElement>

			<div className="max-w-[98%] 2xl:max-w-[1800px] mx-auto px-2">
				{/* Header */}
				<SectionDecorator
						title="Onze Menu"
						subtitle="Ontdek onze authentieke Thaise gerechten. Selecteer uw favoriete gerechten en bel ons voor uw bestelling."
						className="mb-4"
				/>

				{/* Key Information Pills */}
				<div className="flex flex-wrap justify-center gap-1.5 mb-4">
					{infoItems.map(({ icon: Icon, text }, index) => (
						<div
								key={text}
								className="flex items-center gap-1 px-2 py-1 rounded-full border border-amber-500/20 text-white/80 hover:border-amber-500/40 transition-colors opacity-0 translate-y-4 animate-fadeInUp"
								style={{ animationDelay: `${index * 100}ms` }}
						>
								<Icon className="w-3 h-3 text-amber-500" />
								<span className="text-[10px]">{text}</span>
						</div>
					))}
				</div>

				{/* Menu Categories */}
				<div className="flex gap-4">
					<div className="flex-1">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2">
							{organizedCategories.map((columnCategories, columnIndex) => (
								<div key={columnIndex} className="space-y-2">
									{columnCategories.map((category, categoryIndex) => (
										<div 
												key={`${category.name}-${categoryIndex}`}
												className="border-l border-amber-500/20 pl-2 opacity-0 translate-y-4 animate-fadeInUp"
												style={{ 
														animationDelay: `${(columnIndex * 3 + categoryIndex) * 100}ms`
												}}
											>
												<div className="sticky top-[4.5rem] z-10">
														<div className="flex items-center gap-1.5 py-0.5">
																<h3 className="font-charm text-sm font-bold text-amber-400 shrink-0 pr-2">{category.name}</h3>
																<div className="h-px bg-gradient-to-r from-amber-500/20 to-transparent flex-1" />
														</div>
												</div>
												<div>
														{category.items.map((item) => (
																<NewMenuItem
																		key={item.number}
																		item={item}
																		isSelected={selectedItems.some(selected => selected.number === item.number)}
																/>
														))}
												</div>
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Order Summary */}
				<OrderSummary />

				{/* Service Information - Only unique content */}
				<div className="mt-16 max-w-5xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Praktisch */}
						<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
							<div className="flex items-center gap-3 mb-4">
								<div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
									<Info className="w-5 h-5 text-amber-500" />
								</div>
								<h3 className="font-charm text-2xl text-amber-400">Praktisch</h3>
							</div>
							<ul className="space-y-3 text-sm text-white/80">
								{[
									"We bespreken op voorhand welke gerechten of menu's",
									"U kan deze zelf online samenstellen",
									"Wij doen de inkopen en nemen zelf onze materialen mee",
									"Eén kookvuur is wenselijk",
									"Indien afgehuurd lokaal voorzie electriciteit",
									"U kan desgewenst meekijken en deelnemen met de voorbereiding",
									"Niets wordt op voorhand bereid"
								].map((item, index) => (
									<li key={index} className="flex items-start gap-2">
										<span className="w-1.5 h-1.5 rounded-full bg-amber-500/40 mt-1.5 shrink-0" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Extra Services */}
						<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
							<div className="flex items-center gap-3 mb-4">
								<div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
									<Utensils className="w-5 h-5 text-amber-500" />
								</div>
								<h3 className="font-charm text-2xl text-amber-400">Extra Services</h3>
							</div>
							<ul className="space-y-3 text-sm text-white/80">
								{[
									"Bediening aan tafel met Thaise serveerster (chef verlaat het vuur niet)",
									"Afwas en opruim service (meerprijs uurloon bediening)",
									"Verhuur van borden en bestek (meerprijs)",
									"Thaise achtergrondmuziek op USB"
								].map((item, index) => (
									<li key={index} className="flex items-start gap-2">
										<span className="w-1.5 h-1.5 rounded-full bg-amber-500/40 mt-1.5 shrink-0" />
										<span>{item}</span>
									</li>
								))}
								<li className="pt-2">
									<p className="flex items-start gap-2 mb-2">
										<span className="w-1.5 h-1.5 rounded-full bg-amber-500/40 mt-1.5 shrink-0" />
										<span>Aperitief en dranken beschikbaar:</span>
									</p>
									<ul className="space-y-2 pl-4">
										{[
											"Thai cocktails (Mai Tai, Thai Mojito)",
											"Gember-, komkommer- en basilicumdranken",
											"Singha bier"
										].map((drink, index) => (
											<li key={index} className="flex items-start gap-2">
												<span className="w-1 h-px bg-amber-500/40 mt-2.5 shrink-0 flex-1 max-w-1" />
												<span>{drink}</span>
											</li>
										))}
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
});

MenuSection.displayName = 'MenuSection';

export default MenuSection;