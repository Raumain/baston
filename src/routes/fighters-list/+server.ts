import { getJsonFile, saveFightersList, saveResults, saveScoreboard } from "$lib/server/fighter";
import type { Fighter } from "$lib/types";
import { json } from "@sveltejs/kit";

export async function DELETE({ url }) {
	const fightersList = getJsonFile<Fighter>("fightersList");
	const scoreboard = getJsonFile<{ uuid: string; points: number }>("scoreboard");
	const results = getJsonFile<{ uuid1: string; uuid2: string; winner: string }>("results");
	const uuidToDelete = url.searchParams.get("uuid");
	if (!uuidToDelete) return json("error");
	const newFightersList = fightersList.filter((fighter) => fighter.uuid !== uuidToDelete);
	const newScoreboard = scoreboard.filter((s) => s.uuid !== uuidToDelete);
	const newResults = results.filter((r) => r.uuid1 !== uuidToDelete && r.uuid2 !== uuidToDelete);
	saveFightersList(newFightersList);
	saveScoreboard(newScoreboard);
	saveResults(newResults);
	return json("success");
}
