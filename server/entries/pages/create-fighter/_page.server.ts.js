import { p as pokemon } from "../../../chunks/pokemon.js";
import { c as createFighter } from "../../../chunks/fighter.js";
const load = () => {
  return {
    pokemon
  };
};
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("fighter-id")?.toString();
    const surname = formData.get("fighter-surname")?.toString();
    if (!id)
      return { success: false };
    createFighter(id, surname || "");
    return { success: true };
  }
};
export {
  actions,
  load
};
