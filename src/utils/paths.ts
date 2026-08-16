/** Prefix an internal path with the Astro base URL (e.g. /portfolio/). */
export function withBase(path: string): string {
	if (path.startsWith('http://') || path.startsWith('https://')) {
		return path;
	}

	const base = import.meta.env.BASE_URL.replace(/\/$/, '');

	if (!base) {
		return path.startsWith('/') ? path : `/${path}`;
	}

	if (path === '/') {
		return `${base}/`;
	}

	const normalized = path.startsWith('/') ? path.slice(1) : path;
	return `${base}/${normalized}`;
}

/** Strip the base URL from a pathname for route matching. */
export function stripBase(pathname: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');

	if (!base) {
		return pathname;
	}

	if (pathname === base || pathname === `${base}/`) {
		return '/';
	}

	if (pathname.startsWith(`${base}/`)) {
		return pathname.slice(base.length);
	}

	return pathname;
}
