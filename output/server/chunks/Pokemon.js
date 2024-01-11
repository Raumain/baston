import { c as create_ssr_component, d as add_attribute, e as escape } from "./ssr.js";
import { c as colorByType } from "./helpers.js";
/* empty css                                       */const css = {
  code: '.svelte-3kfa87.svelte-3kfa87.svelte-3kfa87{font-family:"Pokemon Pixel Font", monospace}.pokemon-card.svelte-3kfa87>div.svelte-3kfa87>img.svelte-3kfa87{width:100px;height:100px;transform:scale(1.8) translateY(20px);transition:all 0.1s ease}.pokemon-card.svelte-3kfa87.svelte-3kfa87.svelte-3kfa87{display:flex;flex-direction:column;align-items:start;width:300px;height:300px;text-decoration:none;background:rgba(255, 255, 255, 0.25);box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.37);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);border-radius:10px;border:1px solid rgba(255, 255, 255, 0.18);transition:all 0.2s ease;&:hover {\r\n			transition: all 0.3s ease;\r\n			background: rgba(167, 167, 167, 0.25);\r\n			box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.37);\r\n		};&:hover > div > img {\r\n			transition: all 0.3s ease;\r\n			transform: scale(2.1) translateY(17px);\r\n		}}.pokemon-card.svelte-3kfa87>p.svelte-3kfa87.svelte-3kfa87{font-size:1.5rem;font-weight:bold;text-transform:capitalize;margin:0;padding:0.5rem}.pokemon-card.svelte-3kfa87>div.svelte-3kfa87.svelte-3kfa87{display:flex;flex-direction:column;align-items:center;justify-content:space-between;height:100%;width:100%}.pokemon-card.svelte-3kfa87>div.svelte-3kfa87>p.svelte-3kfa87{font-size:1.5rem;font-weight:bold;text-transform:capitalize;transform:translateY(20px)}.fighter-info.svelte-3kfa87.svelte-3kfa87.svelte-3kfa87{display:flex;justify-content:space-between;width:100%}.fighter-info.svelte-3kfa87 span.svelte-3kfa87.svelte-3kfa87{display:flex;align-items:center;justify-content:center;gap:0.5rem;height:20px;padding:0.5rem}.fighter-info.svelte-3kfa87 span p.svelte-3kfa87.svelte-3kfa87{font-size:1.5rem;font-weight:bold}.fighter-info.svelte-3kfa87 span img.svelte-3kfa87.svelte-3kfa87{width:20px;height:20px}',
  map: null
};
const Pokemon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pokemon } = $$props;
  if ($$props.pokemon === void 0 && $$bindings.pokemon && pokemon !== void 0)
    $$bindings.pokemon(pokemon);
  $$result.css.add(css);
  return `<div class="pokemon-card svelte-3kfa87"${add_attribute(
    "style",
    `background-color: ${colorByType[pokemon.types[0].type.name].main}; 
		color: ${colorByType[pokemon.types[0].type.name].secondary} !important;`,
    0
  )}><p class="svelte-3kfa87">#${escape(pokemon.id)}</p> <div class="svelte-3kfa87"><img${add_attribute("src", pokemon.sprites.front_default, 0)} alt="" id="img-front" class="svelte-3kfa87"> <p class="svelte-3kfa87">${escape(pokemon.name)}</p> <div class="fighter-info svelte-3kfa87"><span class="svelte-3kfa87"><img src="/src/lib/assets/heart.png" alt="" class="svelte-3kfa87"> <p class="svelte-3kfa87">${escape(pokemon.hp)}</p></span> <span class="svelte-3kfa87"><img src="/src/lib/assets/sword.png" alt="" class="svelte-3kfa87"> <p class="svelte-3kfa87">${escape(pokemon.attack)}</p></span></div></div> </div>`;
});
export {
  Pokemon as P
};
