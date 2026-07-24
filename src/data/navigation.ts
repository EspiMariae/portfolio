export interface NavItem {
	label: string;
	href: string;
}

export const navItems: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Plushies', href: '/plushies' },
	{ label: 'Blog', href: '/blog' },
];
