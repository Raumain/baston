import { getFightersInformations } from "$lib/helpers";
import { getChampion, getJsonFile } from "$lib/server/fighter";
import type { Fighter } from "$lib/types";

export const load = () => {
	const fightersList = getJsonFile<Fighter>("fightersList");
	const fighters = getFightersInformations(fightersList);
	const champion = getChampion();

	return {
		fighters,
		champion
	};
};
