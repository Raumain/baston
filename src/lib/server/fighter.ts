import fs from "fs";
import { randomUUID } from "crypto";
import type { Fighter } from "$lib/types";
import pokemon from "$lib/data/pokemon.json";


let results = getJsonFile("results");
const scoreboard = getJsonFile("scoreboard");

export function getJsonFile(filename: string) {
	try {
		const fighters = fs.readFileSync(`src/lib/data/${filename}.json`, "utf8");
		return JSON.parse(fighters || "[]");
	} catch (e) {
		return [];
	}
}

export function createFighter(id: string, name: string) {
	let fighters: Fighter[] = getJsonFile("fightersList");
	if (name === "") {
		name = pokemon.find((p) => p.id === Number(id))?.name || "";
	}
	const uuid = String(randomUUID());
	const hp = Math.floor(Math.random() * (200 - 50 + 1) + 50);
	const attack = Math.floor(Math.random() * (50 - 20 + 1) + 20);
	fighters = [...fighters, { uuid, id, name, hp, attack }];
	saveFightersList(fighters);
}

export function updateScoreboard(winnerUUID: string, looserUUID: string, isDraw: boolean = false) {
	const scores: { uuid: string; points: number }[] = scoreboard;
	if (isDraw) {
		const winner = scores.find((s) => s.uuid === winnerUUID);
		const looser = scores.find((s) => s.uuid === looserUUID);
		if (winner) winner.points += 1;
		else scores.push({ uuid: winnerUUID, points: 1 });
		if (looser) looser.points += 1;
		else scores.push({ uuid: looserUUID, points: 1 });
	} else {
		const winner = scores.find((s) => s.uuid === winnerUUID);
		if (winner) winner.points += 3;
		else scores.push({ uuid: winnerUUID, points: 3 });

		const looser = scores.find((s) => s.uuid === looserUUID);
		if (looser) looser.points += 1;
		else scores.push({ uuid: looserUUID, points: 1 });
	}
	fs.writeFileSync("src/lib/data/scoreboard.json", JSON.stringify(scoreboard));
}

export function saveFightersList(fighters: Fighter[]) {
	fs.writeFileSync("src/lib/data/fightersList.json", JSON.stringify(fighters));
}

export function saveResult(uuid1: string, uuid2: string, winner: string) {
	results = [...results, { uuid1, uuid2, winner }];
	fs.writeFileSync("src/lib/data/results.json", JSON.stringify(results));
}
