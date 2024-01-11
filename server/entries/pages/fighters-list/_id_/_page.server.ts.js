import { g as getFightersInformations } from "../../../../chunks/helpers.js";
import { g as getJsonFile } from "../../../../chunks/fighter.js";
const load = ({ params, url }) => {
  const fightersList = getJsonFile("fightersList");
  const history = getJsonFile("results");
  const points = url.searchParams.get("points");
  const fighter = fightersList.find((f) => f.uuid === params.id);
  if (!fighter)
    return { fighter: null };
  const [fighterInfo] = getFightersInformations([fighter]);
  const h = history.filter((h2) => h2.uuid1 === fighterInfo.uuid || h2.uuid2 === fighterInfo.uuid).map((h2) => {
    const opponent = fightersList.find(
      (f) => f.uuid === (h2.uuid1 === fighterInfo.uuid ? h2.uuid2 : h2.uuid1)
    );
    if (!opponent)
      return null;
    const [opponentInfo] = getFightersInformations([opponent]);
    return {
      opponent: opponentInfo,
      winner: h2.winner
    };
  }).filter((h2) => h2 !== null);
  return {
    fighter: fighterInfo,
    points: points ? parseInt(points) : 0,
    history: h
  };
};
export {
  load
};
