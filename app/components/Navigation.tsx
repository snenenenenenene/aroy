'use client';

import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import Image from 'next/image';

const navigationItems = [
	{ name: 'Home', href: 'home' },
	{ name: "Menu's", href: 'menu' },
	{ name: 'Over Ons', href: 'over-ons' },
	{ name: 'Contact', href: 'contact' }
];

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	// Handle scroll and highlight active section
	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll('section[id]');
			let current = '';

			sections.forEach(section => {
				const sectionTop = (section as any).offsetTop;
				const sectionHeight = section.clientHeight;
				if (window.scrollY >= sectionTop - 100) {
					current = section.getAttribute('id') || '';
				}
			});

			setActiveSection(current);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		setIsMenuOpen(false);
		const element = document.getElementById(sectionId);
		if (element) {
			const offset = 80; // Adjust this value based on your header height
			const elementPosition = element.offsetTop - offset;
			window.scrollTo({
				top: elementPosition,
				behavior: 'smooth'
			});
		}
	};

	return (
		<>
			<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-lg bg-black/20 rounded-full p-1.5 border border-white/10">
				<div className="hidden md:flex items-center gap-6 px-4">
					<div className="flex items-center gap-3">
						<Image
							src="/assets/logo.png"
							alt="Aroy Logo"
							width={40}
							height={40}
							priority
						/>
						<span className="font-migra-extrabold text-2xl bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
							AROY
						</span>
					</div>
					<div className="h-8 w-px bg-white/10" />
					<div className="flex gap-4">
						{navigationItems.map((item) => (
							<button
								key={item.href}
								onClick={() => scrollToSection(item.href)}
								className={`px-6 py-2 rounded-full transition-all ${activeSection === item.href
									? 'bg-amber-500 text-black'
									: 'text-white/80 hover:bg-white/10 hover:text-white'
									}`}
							>
								{item.name}
							</button>
						))}
					</div>
				</div>

				{/* Mobile menu button */}
				<div className="md:hidden flex items-center justify-between px-4 w-screen max-w-[calc(100vw-3rem)]">
					<div className="flex items-center gap-3">
						<Image
							src="/assets/logo.png"
							alt="Aroy Logo"
							width={32}
							height={32}
							priority
						/>
						<span className="font-migra-extrabold text-xl bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
							AROY
						</span>
					</div>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="p-2 text-white/80 hover:text-white"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X /> : <MenuIcon />}
					</button>
				</div>
			</nav>

			{/* Mobile menu overlay */}
			{isMenuOpen && (
				<div className="fixed inset-0 z-40 md:hidden">
					<div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
					<div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#121212] p-6 shadow-xl">
						<div className="flex flex-col space-y-4 mt-16">
							{navigationItems.map((item) => (
								<button
									key={item.href}
									onClick={() => scrollToSection(item.href)}
									className={`w-full px-6 py-3 rounded-lg text-left transition-all ${activeSection === item.href
										? 'bg-amber-500 text-black'
										: 'text-white/80 hover:bg-white/10 hover:text-white'
										}`}
								>
									{item.name}
								</button>
							))}
							<div className="pt-4 mt-4 border-t border-white/10">
								<a
									href="tel:+32484767586"
									className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition-colors"
								>
									Reserveer Nu
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}