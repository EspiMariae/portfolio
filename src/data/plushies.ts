export interface PlushieGallery {
	title: string;
	videos: string[];
}

/** Add or remove galleries by editing this array. Video files live in /public/videos/plushies/. */
export const plushieGalleries: PlushieGallery[] = [
	{
		title: 'Cozy Bear',
		videos: [
			'/videos/plushies/cozy-bear/01.mp4',
			'/videos/plushies/cozy-bear/02.mp4',
			'/videos/plushies/cozy-bear/03.mp4',
		],
	},
	{
		title: 'Pastel Bunny',
		videos: [
			'/videos/plushies/pastel-bunny/01.mp4',
			'/videos/plushies/pastel-bunny/02.mp4',
			'/videos/plushies/pastel-bunny/03.mp4',
			'/videos/plushies/pastel-bunny/04.mp4',
		],
	},
	{
		title: 'Lavender Cat',
		videos: [
			'/videos/plushies/lavender-cat/01.mp4',
			'/videos/plushies/lavender-cat/02.mp4',
			'/videos/plushies/lavender-cat/03.mp4',
		],
	},
	{
		title: 'Little Fox',
		videos: [
			'/videos/plushies/little-fox/01.mp4',
			'/videos/plushies/little-fox/02.mp4',
		],
	},
];
