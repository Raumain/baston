import fs from "fs";
import { randomUUID } from "crypto";
import type { Fighter } from "$lib/types";
import pokemon from "$lib/data/pokemon.json";
import { getFightersInformations } from "$lib/helpers";

export function getJsonFile<T>(filename: string) {
	try {
		const fighters = fs.readFileSync(`src/lib/data/${filename}.json`, "utf8");
		return JSON.parse(fighters || "[]") as T[];
	} catch (e) {
		return [] as T[];
	}
}

export function createFighter(id: string, name: string) {
	let fighters = getJsonFile<Fighter>("fightersList");
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
	const scoreboard = getJsonFile<{ uuid: string; points: number }>("scoreboard");
	if (isDraw) {
		const winner = scoreboard.find((s) => s.uuid === winnerUUID);
		const looser = scoreboard.find((s) => s.uuid === looserUUID);
		if (winner) winner.points += 1;
		else scoreboard.push({ uuid: winnerUUID, points: 1 });
		if (looser) looser.points += 1;
		else scoreboard.push({ uuid: looserUUID, points: 1 });
	} else {
		const winner = scoreboard.find((s) => s.uuid === winnerUUID);
		if (winner) winner.points += 3;
		else scoreboard.push({ uuid: winnerUUID, points: 3 });

		const looser = scoreboard.find((s) => s.uuid === looserUUID);
		if (looser) looser.points += 1;
		else scoreboard.push({ uuid: looserUUID, points: 1 });
	}
	fs.writeFileSync("src/lib/data/scoreboard.json", JSON.stringify(scoreboard));
}

export function saveFightersList(fighters: Fighter[]) {
	fs.writeFileSync("src/lib/data/fightersList.json", JSON.stringify(fighters));
}

export function saveScoreboard(scoreboard: { uuid: string; points: number }[]) {
	fs.writeFileSync("src/lib/data/scoreboard.json", JSON.stringify(scoreboard));
}

export function saveResults(results: { uuid1: string; uuid2: string; winner: string }[]) {
	fs.writeFileSync("src/lib/data/results.json", JSON.stringify(results));
}

export function saveResult(uuid1: string, uuid2: string, winner: string) {
	let results = getJsonFile<{ uuid1: string; uuid2: string; winner: string }>("results");
	results = [...results, { uuid1, uuid2, winner }];
	fs.writeFileSync("src/lib/data/results.json", JSON.stringify(results));
}

export const getChampion = () => {
	const fighters = getJsonFile<Fighter>("fightersList");
	const scoreboard = getJsonFile<{ uuid: string; points: number }>("scoreboard");
	const champion = scoreboard.sort((a, b) => b.points - a.points);
	let points = champion[0].points;
	let championInfo = getFightersInformations(
		fighters.filter((pokemon) => pokemon.uuid === champion[0].uuid)
	)[0];
	champion.forEach((champ) => {
		if (!championInfo) {
			championInfo = getFightersInformations(
				fighters.filter((pokemon) => pokemon.uuid === champ.uuid)
			)[0];
			points = champ.points;
		}
	});
	return { ...championInfo, points };
};
