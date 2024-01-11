import { saveResult, updateScoreboard } from "$lib/server/fighter.js";
import { json } from "@sveltejs/kit";

export async function POST({ url }) {
	const winner = url.searchParams.get("winner");
	const loser = url.searchParams.get("loser");
	const draw = url.searchParams.get("isDraw");
	if (!winner || !loser) return json("error");
	if (draw) {
		saveResult(winner, loser, "draw");
		return json("draw");
	}
	saveResult(winner, loser, winner);
	updateScoreboard(winner, loser, draw === "true");
	return json("winner is" + winner);
}
