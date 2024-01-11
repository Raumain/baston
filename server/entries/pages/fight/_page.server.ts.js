import { g as getFightersInformations } from "../../../chunks/helpers.js";
const fightersList = [
  {
    uuid: "425f9054-bff1-45e2-b507-5922c2c5b409",
    id: "1",
    name: "couille",
    hp: 175,
    attack: 44
  },
  {
    uuid: "187f52d8-ce5c-44e6-b356-5c6ac37dbf57",
    id: "8",
    name: "wartortle",
    hp: 186,
    attack: 34
  }
];
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
