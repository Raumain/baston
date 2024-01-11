import { c as create_ssr_component, f as each, d as add_attribute, e as escape, h as null_to_empty } from "../../../chunks/ssr.js";
import { h as heart } from "../../../chunks/Pokemon.svelte_svelte_type_style_lang.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main.svelte-u34pdy.svelte-u34pdy.svelte-u34pdy{width:100%;height:calc(100vh - 200px);display:flex;flex-direction:column;justify-content:center;align-items:center}.new-fight.svelte-u34pdy.svelte-u34pdy.svelte-u34pdy{margin-top:20px;padding:10px 20px;border-radius:10px;background-color:#ffde00;color:#000;text-decoration:none}.winner.svelte-u34pdy.svelte-u34pdy.svelte-u34pdy{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%}.fighters-wrapper.svelte-u34pdy.svelte-u34pdy.svelte-u34pdy{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.figther-wrapper.svelte-u34pdy.svelte-u34pdy.svelte-u34pdy{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;flex-grow:1;height:100%;&:first-of-type {\r\n			border-right: 1px #ffde00 solid;\r\n		};&:first-of-type p {\r\n			left: 20px;\r\n		};&:last-of-type p {\r\n			right: 20px;\r\n		}}.figther-wrapper.svelte-u34pdy p.svelte-u34pdy.svelte-u34pdy{position:absolute;top:0;display:flex;align-items:center;gap:10px;font-size:2rem;font-weight:bold}.figther-wrapper.svelte-u34pdy p.svelte-u34pdy>img.svelte-u34pdy{width:30px}.figther-wrapper.svelte-u34pdy>img.svelte-u34pdy.svelte-u34pdy{width:200px}.hurted.svelte-u34pdy.svelte-u34pdy.svelte-u34pdy{animation:svelte-u34pdy-hurted 0.5s ease-in-out}@keyframes svelte-u34pdy-hurted{0%{filter:sepia(inherit) brightness(inherit) saturate(inherit) contrast(inherit);transform:translateX(0)}25%{transform:translateX(10px)}50%{filter:sepia(100%) brightness(63%) saturate(547%) contrast(241%);transform:translateX(0)}75%{transform:translateX(-10px)}100%{filter:sepia(default) brightness(default) saturate(default) contrast(default);transform:translateX(0)}}@keyframes svelte-u34pdy-shake{0%{transform:translateX(0)}25%{transform:translateX(10px)}50%{transform:translateX(0)}75%{transform:translateX(-10px)}100%{transform:translateX(0)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { fighters } = data;
  let hp = [
    {
      uuid: fighters[0].uuid,
      hp: fighters[0].hp
    },
    {
      uuid: fighters[1].uuid,
      hp: fighters[1].hp
    }
  ];
  let hurtedClass = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="main svelte-u34pdy">${`${`<div class="fighters-wrapper svelte-u34pdy">${each(fighters, (fighter, index) => {
    return `<div class="figther-wrapper svelte-u34pdy"><p class="svelte-u34pdy"><img${add_attribute("src", heart, 0)} alt="" class="svelte-u34pdy"> ${escape(hp[index].hp > 0 ? hp[index].hp : 0)}</p> <img${add_attribute("src", fighter.sprites.front_default, 0)} alt=""${add_attribute("style", index === 0 ? "transform: scaleX(-1);" : "", 0)} class="${escape(null_to_empty(`fighter-img ${hurtedClass[index]?.hurted ? "hurted" : ""}`), true) + " svelte-u34pdy"}"> </div>`;
  })}</div>`}`} </div>`;
});
export {
  Page as default
};
