import { g as getFightersInformations } from "../../../chunks/helpers.js";
const fightersList = [];
const load = ({ url }) => {
  const fighter1 = url.searchParams.get("uuid1");
  const fighter2 = url.searchParams.get("uuid2");
  if (!fighter1 || !fighter2)
    return { fighters: [] };
  const findFighters = fightersList.map((f) => {
    if (f.uuid === fighter1 || f.uuid === fighter2)
      return f;
  }).filter((f) => f);
  if (findFighters.length !== 2 || !findFighters)
    return { fighters: [] };
  const fighters = getFightersInformations(findFighters);
  return {
    fighters
  };
};
export {
  load
};
