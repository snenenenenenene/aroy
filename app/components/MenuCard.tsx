// components/MenuCard.tsx (Optimized version)
import { memo } from 'react';
import Image from 'next/image';
import { Flame, Phone } from 'lucide-react';
import type { Menu, MenuItem } from '../data/menuData';

const SpiceLevel = memo(({ level }: { level: number }) => (
	<div className="flex gap-1">
		{[...Array(level)].map((_, i) => (
			<Flame
				key={i}
				className="h-4 w-4 text-red-500"
				fill={i < level ? "currentColor" : "none"}
			/>
		))}
	</div>
));
SpiceLevel.displayName = 'SpiceLevel';

const DishItem = memo(({ item }: { item: MenuItem }) => (
	<div className="flex gap-6 group">
		<div className="w-20 h-20 shrink-0">
			{item.image ? (
				<div className="relative w-20 h-20">
					<Image
						src={item.image}
						alt={item.name}
						fill
						sizes="80px"
						className="rounded-xl object-cover"
					/>
				</div>
			) : (
				<div className="w-20 h-20 rounded-xl bg-white/5 flex items-center justify-center">
					<span className="text-2xl text-white/20 font-migra-extrabold">A</span>
				</div>
			)}
		</div>

		<div className="flex-1 min-w-0">
			<div className="flex items-start justify-between gap-4">
				<div>
					<h5 className="font-medium text-white/90 group-hover:text-amber-500 transition-colors">
						{item.name}
					</h5>
					<p className="text-sm text-white/40 font-migra mt-0.5">
						{item.thaiName}
					</p>
				</div>
				{item.spiceLevel && <SpiceLevel level={item.spiceLevel} />}
			</div>
			<p className="text-sm text-white/60 mt-2 line-clamp-2">
				{item.description}
			</p>
			{item.choiceText && (
				<div className="mt-4 flex items-center gap-4">
					<div className="h-px bg-amber-500/20 flex-1" />
					<span className="text-amber-500 font-bold">{item.choiceText}</span>
					<div className="h-px bg-amber-500/20 flex-1" />
				</div>
			)}
		</div>
	</div>
));
DishItem.displayName = 'DishItem';

const MenuSection = memo(({ title, items }: { title: string; items: MenuItem[] }) => (
	<div>
		<div className="flex items-center gap-4 mb-6">
			<h4 className="text-lg font-semibold text-amber-400">{title}</h4>
			<div className="h-px bg-white/10 flex-1" />
		</div>
		<div className="space-y-6">
			{items.map((item, idx) => (
				<DishItem key={`${item.name}-${idx}`} item={item} />
			))}
		</div>
	</div>
));
MenuSection.displayName = 'MenuSection';

export const MenuCard = memo(({ menu }: { menu: Menu }) => {
	if (menu.isCustom) {
		return (
			<div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 
        hover:border-amber-500/50 transition-colors p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
				<h3 className="text-2xl font-bold text-amber-500 mb-4">{menu.title}</h3>
				<p className="text-white/60 mb-6">{menu.description}</p>
				<div className="text-3xl font-bold text-white/90 mb-2">
					Vanaf €{menu.price}
				</div>
				<p className="text-white/40 mb-8">{menu.contactText}</p>
				<a
					href="tel:+32484767586"
					className="px-8 py-4 bg-amber-500 text-black rounded-full hover:bg-amber-400 
            transition-colors flex items-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 focus:outline-none"
				>
					<Phone className="w-5 h-5" />
					Bel voor custom menu
				</a>
			</div>
		);
	}

	return (
		<div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 
      hover:border-amber-500/50 transition-colors p-8 space-y-8">
			<div className="flex justify-between items-start">
				<div>
					<h3 className="text-2xl font-bold text-amber-500 group-hover:text-amber-400 transition-colors">
						{menu.title}
					</h3>
					{menu.choiceNote && (
						<p className="text-amber-500/80 mt-1 text-sm font-medium">
							{menu.choiceNote}
						</p>
					)}
					<p className="text-white/60 mt-1 max-w-md">
						{menu.description}
					</p>
				</div>
				<div className="flex flex-col items-end">
					<span className="text-3xl font-bold text-white/90">
						€{menu.price.toFixed(2)}
					</span>
					<span className="text-sm text-white/40">per persoon</span>
				</div>
			</div>

			<div className="space-y-8">
				{menu.items.voorgerecht.length > 0 && (
					<MenuSection title="Voorgerechten" items={menu.items.voorgerecht} />
				)}
				{menu.items.hoofdgerecht.length > 0 && (
					<MenuSection title="Hoofdgerechten" items={menu.items.hoofdgerecht} />
				)}
			</div>
		</div>
	);
});
MenuCard.displayName = 'MenuCard';

export default MenuCard;