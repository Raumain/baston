import { getFightersInformations } from "$lib/helpers";
import { getJsonFile } from "$lib/server/fighter";
import type { Fighter } from "$lib/types";

export const load = () => {
	const fightersList: Fighter[] = getJsonFile("fightersList");
	const scoreboard: { uuid: string; points: number }[] = getJsonFile("scoreboard");
	const fighters = getFightersInformations(fightersList);
	if (!fighters) return { list: [] };
	const list = fightersList
		.map((s) => {
			const fighter = fighters.find((f) => f.uuid === s.uuid);
			const fighterInScoreboard = scoreboard.find((f) => f.uuid === s.uuid);
			if (!fighterInScoreboard) return { fighter, points: 0 };
			if (fighter) return { fighter, points: fighterInScoreboard.points };
			return { fighter, points: 0 };
		})
		.sort((a, b) => b.points - a.points);
	return { list };
};
