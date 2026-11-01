export interface Step {
	title: string;
	text: string;
	image: string;
	alt: string;
	href: string;
	cta: string;
}

export const steps: Step[] = [
	{
		title: 'Discovery call',
		text: 'A 30 minute call about your goals, your customers and the pages that sell today. Notes land in your inbox within the hour.',
		image: 'assets/stock-2.jpg',
		alt: 'Notes from a discovery call',
		href: 'https://calendly.com/',
		cta: 'Book a call',
	},
	{
		title: 'Design sprint',
		text: 'Two weeks of wireframes and a clickable prototype in Figma, reviewed with your team every Friday.',
		image: 'assets/stock-1.jpg',
		alt: 'Wireframes on a desk',
		href: 'https://www.figma.com/',
		cta: 'See a prototype',
	},
	{
		title: 'Launch and handover',
		text: 'The site goes live on GitHub Pages or your own host, with analytics set up and a short guide your team can follow.',
		image: 'assets/stock-4.jpg',
		alt: 'A laptop showing the launched site',
		href: 'https://pages.github.com/',
		cta: 'How hosting works',
	},
];
