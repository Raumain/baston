import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.main.svelte-12mbc11.svelte-12mbc11{display:flex;align-items:center;justify-content:center;height:calc(100vh - 200px);width:100%}form.svelte-12mbc11.svelte-12mbc11{display:flex;flex-direction:column;justify-content:center;align-items:center;flex-grow:1;height:100%}.form-field.svelte-12mbc11.svelte-12mbc11{display:flex;flex-direction:column;width:70%}.form-field.svelte-12mbc11 label.svelte-12mbc11{margin-bottom:0.5rem;font-size:2rem}.form-field.svelte-12mbc11 select.svelte-12mbc11{font-size:1.7rem;font-family:"Pokemon Pixel Font", monospace}.form-field.svelte-12mbc11 select option.svelte-12mbc11{color:#3343ba}.form-field.svelte-12mbc11 input.svelte-12mbc11{font-size:1.7rem;font-family:"Pokemon Pixel Font", monospace}input[type="submit"].svelte-12mbc11.svelte-12mbc11{margin-top:1rem;padding:0.5rem 1rem;border:none;border-radius:10px;background:#ffde00;color:#3343ba;box-shadow:6px 6px 10px rgb(59, 68, 134),\r\n			-6px -6px 10px #2231a0;transition:all 0.1s ease-in-out;font-family:"Pokemon Pixel Font", monospace;font-size:1.7rem;cursor:pointer;&:hover {\r\n			transform: scale(1.03);\r\n			transition: all 0.1s ease-in-out;\r\n			background: #ffde00;\r\n			color: #3343ba;\r\n			box-shadow:\r\n				-6px -6px 10px rgb(59, 68, 134),\r\n				6px 6px 10px #2231a0;\r\n		};&:active {\r\n			background: #ffde00;\r\n			color: #3343ba;\r\n			box-shadow:\r\n				-6px -6px 10px rgb(59, 68, 134),\r\n				6px 6px 10px #2231a0;\r\n			transform: scale(0.99) !important;\r\n			transition: all 0.1s ease-in-out;\r\n		}}.pokemon-display.svelte-12mbc11.svelte-12mbc11{display:flex;align-items:center;justify-content:center;flex-grow:1;height:100%;& > img {\r\n			width: 200px;\r\n		}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pokemonDisplay;
  let { data } = $$props;
  const { pokemon } = data;
  let pokemonId = 1;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  pokemonDisplay = pokemon.find((pok) => pok.id === pokemonId);
  return `<div class="main svelte-12mbc11"><form method="post" class="svelte-12mbc11"><div class="form-field svelte-12mbc11"><label for="fighter-id" class="svelte-12mbc11" data-svelte-h="svelte-1ue59tc">Choose a pokemon</label> <select name="fighter-id" id="fighter-id"${add_attribute("value", pokemonId, 0)} class="svelte-12mbc11">${each(pokemon, (pok) => {
    return `<option${add_attribute("value", pok.id, 0)} class="svelte-12mbc11">#${escape(pok.id)} ${escape(pok.name)} </option>`;
  })}</select></div> <div class="form-field svelte-12mbc11" data-svelte-h="svelte-177o47q"><label for="fighter-surname" class="svelte-12mbc11">Surname</label> <input type="text" name="fighter-surname" id="fighter-surname" value="" class="svelte-12mbc11"></div> <input type="submit" value="Create" class="svelte-12mbc11"></form> <div class="pokemon-display svelte-12mbc11">${pokemonDisplay ? `<img${add_attribute("src", pokemonDisplay.sprites.front_default, 0)} alt="">` : ``}</div> </div>`;
});
export {
  Page as default
};
