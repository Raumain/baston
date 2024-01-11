import { getJsonFile, saveFightersList } from "$lib/server/fighter";
import type { Fighter } from "$lib/types";
import { json } from "@sveltejs/kit";

export async function DELETE({ url }) {
	const fightersList: Fighter[] = getJsonFile("fightersList");
	const uuidToDelete = url.searchParams.get("uuid");
	if (!uuidToDelete) return json("error");
	const newFightersList = fightersList.filter((fighter) => fighter.uuid !== uuidToDelete);
	saveFightersList(newFightersList);
	return json("success");
}
