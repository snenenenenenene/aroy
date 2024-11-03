"use client";

import { useRef, useEffect } from "react";

export default function MorphingGradientBackground() {
	const interBubbleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let curX = 0;
		let curY = 0;
		let tgX = 0;
		let tgY = 0;

		function move() {
			if (interBubbleRef.current) {
				curX += (tgX - curX) / 20;
				curY += (tgY - curY) / 20;
				interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
			}
			requestAnimationFrame(move);
		}

		const handleMouseMove = (event: MouseEvent) => {
			tgX = event.clientX;
			tgY = event.clientY;
		};

		window.addEventListener('mousemove', handleMouseMove);
		const animationFrame = requestAnimationFrame(move);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			cancelAnimationFrame(animationFrame);
		};
	}, []);

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden">
			<div className="absolute inset-0 bg-black/90" /> {/* Dark overlay */}

			<svg className="hidden">
				<filter id="goo">
					<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
						result="goo"
					/>
					<feBlend in="SourceGraphic" in2="goo" />
				</filter>
			</svg>

			<div
				className="gradients-container absolute inset-0"
				style={{ filter: 'url(#goo) blur(40px)' }}
			>
				{/* Amber gradient */}
				<div
					className="g1 absolute rounded-full"
					style={{
						width: '100rem',
						height: '100rem',
						top: '10%',
						left: '10%',
						background: 'radial-gradient(circle at center, rgba(245, 158, 11, 0.3) 0, rgba(245, 158, 11, 0) 30%)',
						mixBlendMode: 'hard-light',
						animation: 'moveVertical 30s ease infinite'
					}}
				/>

				{/* Red gradient */}
				<div
					className="g2 absolute rounded-full"
					style={{
						width: '100rem',
						height: '100rem',
						top: '10%',
						left: '10%',
						background: 'radial-gradient(circle at center, rgba(220, 38, 38, 0.3) 0, rgba(220, 38, 38, 0) 30%)',
						mixBlendMode: 'hard-light',
						animation: 'moveInCircle 20s reverse infinite'
					}}
				/>

				{/* Orange gradient */}
				<div
					className="g3 absolute rounded-full"
					style={{
						width: '100rem',
						height: '100rem',
						top: '30%',
						left: '-10%',
						background: 'radial-gradient(circle at center, rgba(234, 88, 12, 0.3) 0, rgba(234, 88, 12, 0) 30%)',
						mixBlendMode: 'hard-light',
						animation: 'moveInCircle 40s linear infinite'
					}}
				/>

				{/* Interactive gradient */}
				<div
					ref={interBubbleRef}
					className="interactive absolute rounded-full"
					style={{
						width: '100%',
						height: '100%',
						top: '-50%',
						left: '-50%',
						background: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.3) 0, rgba(251, 191, 36, 0) 30%)',
						mixBlendMode: 'hard-light',
						opacity: 0.7
					}}
				/>
			</div>

			{/* Noise overlay */}
			<div className="absolute inset-0 bg-noise opacity-20 mix-blend-soft-light pointer-events-none" />
		</div>
	);
}