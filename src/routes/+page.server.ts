import { getFightersInformations } from "$lib/helpers";
import { getJsonFile } from "$lib/server/fighter";
import type { Fighter } from "$lib/types";

export const load = () => {
	const fightersList: Fighter[] = getJsonFile("fightersList");
	const fighters = getFightersInformations(fightersList);
	const scoreboard: { uuid: string; points: number }[] = getJsonFile("scoreboard");
	const champion = scoreboard.sort((a, b) => b.points - a.points)[0];

	return {
		fighters,
		champion
	};
};
