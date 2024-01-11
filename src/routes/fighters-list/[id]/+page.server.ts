import { getFightersInformations } from "$lib/helpers";
import { getJsonFile } from "$lib/server/fighter";
import type { Fighter } from "$lib/types";

export const load = ({ params, url }) => {
	const fightersList: Fighter[] = getJsonFile("fightersList");
	const history: { uuid1: string; uuid2: string; winner: string }[] = getJsonFile("results");
	const points = url.searchParams.get("points");
	const fighter = fightersList.find((f) => f.uuid === params.id);
	if (!fighter) return { fighter: null };
	const [fighterInfo] = getFightersInformations([fighter]);
	const h = history
		.filter((h) => h.uuid1 === fighterInfo.uuid || h.uuid2 === fighterInfo.uuid)
		.map((h) => {
			const opponent = fightersList.find(
				(f) => f.uuid === (h.uuid1 === fighterInfo.uuid ? h.uuid2 : h.uuid1)
			);
			if (!opponent) return null;
			const [opponentInfo] = getFightersInformations([opponent]);
			return {
				opponent: opponentInfo,
				winner: h.winner
			};
		})
        .filter((h) => h !== null);
	return {
		fighter: fighterInfo,
		points: points ? parseInt(points) : 0,
		history: h
	};
};
