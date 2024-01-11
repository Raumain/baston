import { a as saveResult, u as updateScoreboard } from "../../../chunks/fighter.js";
import { j as json } from "../../../chunks/index.js";
async function POST({ url }) {
  const winner = url.searchParams.get("winner");
  const loser = url.searchParams.get("loser");
  const draw = url.searchParams.get("isDraw");
  if (!winner || !loser)
    return json("error");
  if (draw) {
    saveResult(winner, loser, "draw");
    return json("draw");
  }
  saveResult(winner, loser, winner);
  updateScoreboard(winner, loser, draw === "true");
  return json("winner is" + winner);
}
export {
  POST
};
