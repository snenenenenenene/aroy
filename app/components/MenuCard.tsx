import { memo } from 'react';
import { motion } from 'framer-motion';
import { Flame, Phone } from 'lucide-react';
import Image from 'next/image';
import type { Menu, MenuItem } from '../data/menuData';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			when: "beforeChildren"
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3 }
	}
};

const SpiceLevel = memo(({ level }: { level: number }) => (
	<div className="flex gap-1" aria-label={`Spice level ${level}`}>
		{[...Array(level)].map((_, i) => (
			<Flame
				key={i}
				className="h-4 w-4 text-red-500"
				fill={i < level ? "currentColor" : "none"}
				aria-hidden="true"
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
						priority
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
			{(item as any).choiceText && (
				<div className="mt-4 flex items-center gap-4">
					<div className="h-px bg-amber-500/20 flex-1" />
					<span className="text-amber-500 font-bold">{(item as any).choiceText}</span>
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

const CustomMenuCard = memo(({ menu }: { menu: Menu }) => (
	<motion.div
		variants={itemVariants}
		className="group relative"
	>
		<div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 
      group-hover:border-amber-500/50 transition-all duration-300" />

		<div className="relative p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
			<h3 className="text-2xl font-bold text-amber-500 mb-4">{menu.title}</h3>
			<p className="text-white/60 mb-6">{menu.description}</p>
			<div className="text-3xl font-bold text-white/90 mb-2">
				Vanaf €{menu.price}
			</div>
			<p className="text-white/40 mb-8">{menu.contactText}</p>
			<a
				href="tel:+32484767586"
				className="px-8 py-4 bg-amber-500 text-black rounded-full hover:bg-amber-400 
          transition-all flex items-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 focus:outline-none"
			>
				<Phone className="w-5 h-5" aria-hidden="true" />
				Bel voor custom menu
			</a>
		</div>
	</motion.div>
));
CustomMenuCard.displayName = 'CustomMenuCard';

const RegularMenuCard = memo(({ menu }: { menu: Menu }) => (
	<motion.div
		variants={itemVariants}
		className="group relative"
	>
		<div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 
      group-hover:border-amber-500/50 transition-all duration-300" />

		<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-500/5 
      rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

		<div className="relative p-8 space-y-8">
			<div className="flex justify-between items-start">
				<div>
					<h3 className="text-2xl font-bold text-amber-500 group-hover:text-amber-400 transition-colors">
						{menu.title}
					</h3>
					{(menu as any).choiceNote && (
						<p className="text-amber-500/80 mt-1 text-sm font-medium">
							{(menu as any).choiceNote}
							{(menu as any).choiceNote}
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
	</motion.div>
));
RegularMenuCard.displayName = 'RegularMenuCard';

const MenuCard = memo(({ menu }: { menu: Menu }) => (
	menu.isCustom ? <CustomMenuCard menu={menu} /> : <RegularMenuCard menu={menu} />
));
MenuCard.displayName = 'MenuCard';

export const MenuCardContainer = memo(({ menus }: { menus: Menu[] }) => {
	return (
		<motion.div
			className="grid lg:grid-cols-2 gap-6"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{menus.map((menu, index) => (
				<MenuCard key={menu.title} menu={menu} />
			))}
		</motion.div>
	);
});
MenuCardContainer.displayName = 'MenuCardContainer';

export default MenuCard;