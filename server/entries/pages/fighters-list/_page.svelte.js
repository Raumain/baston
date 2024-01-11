import { c as create_ssr_component, f as each, d as add_attribute, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { P as Pokemon, c as crown } from "../../../chunks/crown.js";
import { c as colorByType } from "../../../chunks/helpers.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main.svelte-1mqrxm1{display:flex;flex-direction:column;align-items:center}.fighters-wrapper.svelte-1mqrxm1{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}.fighter-wrapper.svelte-1mqrxm1{position:relative;margin:1rem;text-decoration:none}.is-champion.svelte-1mqrxm1{position:absolute;top:0;right:0;display:flex;align-items:center;gap:2px;font-size:1.5rem;font-weight:bold;text-transform:capitalize;margin:0;padding:0.5rem;& > img {\r\n			width: 30px;\r\n		}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { list } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="main svelte-1mqrxm1"><div class="fighters-wrapper svelte-1mqrxm1">${each(list, (fighter) => {
    return `<a${add_attribute("href", `/fighters-list/${fighter.fighter.uuid}?points=${fighter.points}`, 0)} class="fighter-wrapper svelte-1mqrxm1">${validate_component(Pokemon, "Pokemon").$$render($$result, { pokemon: fighter.fighter }, {}, {})} <span class="is-champion svelte-1mqrxm1"${add_attribute("style", `color: ${colorByType[fighter.fighter.types[0].type.name].secondary} !important;`, 0)}><img${add_attribute("src", crown, 0)} alt=""> ${escape(fighter.points)}</span> </a>`;
  })}</div> </div>`;
});
export {
  Page as default
};
