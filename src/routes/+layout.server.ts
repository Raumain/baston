import { getChampion } from "$lib/server/fighter";
export const load = ({ depends }) => {
	depends("champion:all");
	const champion = getChampion();
	return {
		champion
	};
};
