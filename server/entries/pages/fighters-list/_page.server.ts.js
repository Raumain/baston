import { g as getFightersInformations } from "../../../chunks/helpers.js";
import { g as getJsonFile } from "../../../chunks/fighter.js";
const load = () => {
  const fightersList = getJsonFile("fightersList");
  const scoreboard = getJsonFile("scoreboard");
  const fighters = getFightersInformations(fightersList);
  if (!fighters)
    return { list: [] };
  const list = fightersList.map((s) => {
    const fighter = fighters.find((f) => f.uuid === s.uuid);
    const fighterInScoreboard = scoreboard.find((f) => f.uuid === s.uuid);
    if (!fighterInScoreboard)
      return { fighter, points: 0 };
    if (fighter)
      return { fighter, points: fighterInScoreboard.points };
    return { fighter, points: 0 };
  }).sort((a, b) => b.points - a.points);
  return { list };
};
export {
  load
};
