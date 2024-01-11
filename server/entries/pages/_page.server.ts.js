import { g as getFightersInformations } from "../../chunks/helpers.js";
import { g as getJsonFile } from "../../chunks/fighter.js";
const load = () => {
  const fightersList = getJsonFile("fightersList");
  const fighters = getFightersInformations(fightersList);
  const scoreboard = getJsonFile("scoreboard");
  const champion = scoreboard.sort((a, b) => b.points - a.points)[0];
  return {
    fighters,
    champion
  };
};
export {
  load
};
