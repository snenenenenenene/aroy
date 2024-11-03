// components/Navigation.tsx
import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-lg bg-black/20 rounded-full p-1.5 border border-white/10">
			<div className="hidden md:flex items-center gap-6 px-4">
				<div className="flex items-center gap-3">
					<img src="/assets/logo.png" alt="Aroy Logo" className="h-10 w-10" />
					<span className="font-migra-extrabold text-2xl bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
						AROY
					</span>
				</div>
				<div className="h-8 w-px bg-white/10" />
				<div className="flex gap-4">
					{['menu', 'over ons', 'contact'].map((item) => (
						<a
							key={item}
							href={`#${item}`}
							className="px-6 py-2 rounded-full hover:bg-white/10 transition-all text-white/80 hover:text-white"
						>
							{item}
						</a>
					))}
				</div>
			</div>

			<button
				className="md:hidden p-2 text-white"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				{isMenuOpen ? <X /> : <MenuIcon />}
			</button>

			{isMenuOpen && (
				<div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-lg rounded-lg border border-white/10 p-4">
					{['menu', 'over ons', 'contact'].map((item) => (
						<a
							key={item}
							href={`#${item}`}
							className="block px-4 py-2 text-white/80 hover:text-white"
							onClick={() => setIsMenuOpen(false)}
						>
							{item}
						</a>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navigation;