import { p as pokemon } from "./pokemon2.js";
const colorByType = {
  fire: { main: "#F08030", secondary: "#784018" },
  grass: { main: "#78C850", secondary: "#3c6428" },
  water: { main: "#6890F0", secondary: "#344878" },
  electric: { main: "#F8D030", secondary: "#7c6818" },
  ice: { main: "#98D8D8", secondary: "#4c6c6c" },
  ground: { main: "#E0C068", secondary: "#706034" },
  flying: { main: "#A890F0", secondary: "#544878" },
  ghost: { main: "#705898", secondary: "#382c4c" },
  rock: { main: "#B8A038", secondary: "#5c501c" },
  fighting: { main: "#C03028", secondary: "#601814" },
  psychic: { main: "#F85888", secondary: "#7c2c44" },
  dark: { main: "#705848", secondary: "#382c24" },
  steel: { main: "#B8B8D0", secondary: "#5c5c68" },
  fairy: { main: "#EE99AC", secondary: "#774d56" },
  normal: { main: "#A8A878", secondary: "#54543c" },
  dragon: { main: "#7038F8", secondary: "#381c7c" },
  bug: { main: "#A8B820", secondary: "#545c10" },
  poison: { main: "#A040A0", secondary: "#502050" }
};
const getFightersInformations = (figthersList) => {
  const fighters = figthersList.map((fighter) => ({ uuid: fighter.uuid, id: fighter.id })).map(({ uuid, id }) => {
    const fighter = pokemon.find((p) => String(p.id) === id);
    if (!fighter)
      return;
    return {
      ...fighter,
      uuid,
      hp: Number(figthersList.find((f) => f.uuid === uuid)?.hp),
      attack: Number(figthersList.find((f) => f.uuid === uuid)?.attack),
      name: figthersList.find((f) => f.uuid === uuid)?.name || ""
    };
  });
  return fighters;
};
export {
  colorByType as c,
  getFightersInformations as g
};
