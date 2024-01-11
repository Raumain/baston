import pokemon from "$lib/data/pokemon.json";
import { createFighter } from "$lib/server/fighter";

export const load = () => {
	return {
		pokemon
	};
};

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get("fighter-id")?.toString();
		const surname = formData.get("fighter-surname")?.toString();
		if (!id) return { success: false };
		createFighter(id, surname || "");
		return { success: true };
	}
};
