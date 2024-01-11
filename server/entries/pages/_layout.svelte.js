import { c as create_ssr_component } from "../../chunks/ssr.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.svelte-1l9kdoq.svelte-1l9kdoq{font-family:"Pokemon Pixel Font", monospace}#main.svelte-1l9kdoq.svelte-1l9kdoq{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem}nav.svelte-1l9kdoq.svelte-1l9kdoq{display:flex;justify-content:center;align-items:center;background:#3343ba;height:50px;width:100%}nav.svelte-1l9kdoq ul.svelte-1l9kdoq{display:flex;justify-content:space-around;align-items:center;list-style:none;width:100%}nav.svelte-1l9kdoq ul li.svelte-1l9kdoq{margin:0 1rem}nav.svelte-1l9kdoq ul li a.svelte-1l9kdoq{text-decoration:none;color:#ffde00;font-size:1.5rem;font-weight:bold;text-transform:capitalize}nav.svelte-1l9kdoq ul li a.svelte-1l9kdoq:hover{color:#fff}.fighter-button.svelte-1l9kdoq.svelte-1l9kdoq{background:#ffde00;color:#3343ba;padding:0.5rem 1rem;border-radius:10px;box-shadow:6px 6px 10px rgb(59, 68, 134),\r\n			-6px -6px 10px #2231a0;transition:all 0.1s ease-in-out}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="main" class="svelte-1l9kdoq"><nav class="svelte-1l9kdoq" data-svelte-h="svelte-w0cswj"><ul class="svelte-1l9kdoq"><li class="svelte-1l9kdoq"><a href="/" class="svelte-1l9kdoq">Home</a></li> <li class="svelte-1l9kdoq"><a href="/create-fighter" class="fighter-button svelte-1l9kdoq">Add Fighter</a></li> <li class="svelte-1l9kdoq"><a href="/fighters-list" class="svelte-1l9kdoq">Fighters</a></li></ul></nav> ${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
