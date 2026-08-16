export interface PlushieCategory {
	id: string;
	title: string;
	videos: string[];
}

function categoryVideos(folder: string): string[] {
	return Array.from({ length: 8 }, (_, index) => {
		const number = String(index + 1).padStart(2, '0');
		return `/videos/plushies/${folder}/${number}.mp4`;
	});
}

/** Add or edit categories here. Each category needs 8 videos in /public/videos/plushies/{id}/ */
export const plushieCategories: PlushieCategory[] = [
	{ id: 'sea', title: 'Sea', videos: categoryVideos('sea') },
	{ id: 'space', title: 'Space', videos: categoryVideos('space') },
	{ id: 'africa', title: 'Africa', videos: categoryVideos('africa') },
	{ id: 'australia', title: 'Australia', videos: categoryVideos('australia') },
	{ id: 'halloween', title: 'Halloween', videos: categoryVideos('halloween') },
	{ id: 'farm', title: 'Farm', videos: categoryVideos('farm') },
	{ id: 'christmass', title: 'Christmass', videos: categoryVideos('christmass') },
];
