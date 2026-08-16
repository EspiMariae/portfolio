export interface NavItem {
	label: string;
	href: string;
}

export const navItems: NavItem[] = [
	{ label: 'Plushies', href: '/plushies' },
	{ label: 'Workshops', href: '/workshops' },
	{ label: 'Accessories', href: '/accessories' },
	{ label: 'Book', href: '/book' },
	{ label: 'Patterns', href: '/patterns' },
	{ label: 'About', href: '/about' },
];
