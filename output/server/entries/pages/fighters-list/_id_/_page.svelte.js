import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, f as each } from "../../../../chunks/ssr.js";
import { P as Pokemon } from "../../../../chunks/Pokemon.js";
import { c as colorByType } from "../../../../chunks/helpers.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fighter-wrapper.svelte-olfq0i.svelte-olfq0i{position:relative;margin:1rem}.is-champion.svelte-olfq0i.svelte-olfq0i{position:absolute;top:0;right:0;display:flex;align-items:center;gap:2px;font-size:1.5rem;font-weight:bold;text-transform:capitalize;margin:0;padding:0.5rem;& > img {\r\n			width: 30px;\r\n		}}.history.svelte-olfq0i.svelte-olfq0i{display:flex;flex-direction:column;align-items:center;gap:1rem}.history-item.svelte-olfq0i.svelte-olfq0i{display:flex;align-items:center;gap:1rem}.history-item.svelte-olfq0i>p.svelte-olfq0i{font-size:2rem;font-weight:bold}.fighter.svelte-olfq0i.svelte-olfq0i,.opponent.svelte-olfq0i.svelte-olfq0i{position:relative;display:flex;flex-direction:column;align-items:center;gap:1rem;& > span {\r\n			position: absolute;\r\n			top: 0;\r\n			right: 0;\r\n			display: flex;\r\n			align-items: center;\r\n			gap: 2px;\r\n		};& > span > p{\r\n			font-size: 1.5rem;\r\n			font-weight: bold;\r\n			text-transform: capitalize;\r\n			margin: 0;\r\n			padding: 0.5rem;\r\n		};& > span > img {\r\n			width: 30px;\r\n		}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { fighter, points, history } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="fighter-wrapper svelte-olfq0i">${validate_component(Pokemon, "Pokemon").$$render($$result, { pokemon: fighter }, {}, {})} <span class="is-champion svelte-olfq0i"${add_attribute("style", `color: ${colorByType[fighter.types[0].type.name].secondary} !important;`, 0)}><img src="/src/lib/assets/crown.png" alt=""> ${escape(points)}</span></div> <div class="history svelte-olfq0i">${history.length > 0 ? `<h2 data-svelte-h="svelte-dhg2vq">History</h2> ${each(history, ({ opponent, winner }) => {
    return `<div class="history-item svelte-olfq0i"><div class="fighter svelte-olfq0i">${validate_component(Pokemon, "Pokemon").$$render($$result, { pokemon: fighter }, {}, {})} ${winner === fighter.uuid ? `<span class="has-win" data-svelte-h="svelte-1fu9k45"><img src="/src/lib/assets/crown.png" alt=""> <p>Winner</p> </span>` : ``}</div> <p class="svelte-olfq0i" data-svelte-h="svelte-93qx69">vs</p> <div class="opponent svelte-olfq0i">${validate_component(Pokemon, "Pokemon").$$render($$result, { pokemon: opponent }, {}, {})} ${winner === opponent.uuid ? `<span class="has-win" data-svelte-h="svelte-1fu9k45"><img src="/src/lib/assets/crown.png" alt=""> <p>Winner</p> </span>` : ``}</div> </div>`;
  })}` : ``} </div>`;
});
export {
  Page as default
};
