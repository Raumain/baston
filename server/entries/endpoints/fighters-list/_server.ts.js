import { g as getJsonFile, s as saveFightersList } from "../../../chunks/fighter.js";
import { j as json } from "../../../chunks/index.js";
async function DELETE({ url }) {
  const fightersList = getJsonFile("fightersList");
  const uuidToDelete = url.searchParams.get("uuid");
  if (!uuidToDelete)
    return json("error");
  const newFightersList = fightersList.filter((fighter) => fighter.uuid !== uuidToDelete);
  saveFightersList(newFightersList);
  return json("success");
}
export {
  DELETE
};
