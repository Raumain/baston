import * as server from '../entries/pages/create-fighter/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/create-fighter/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/create-fighter/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.956eefd7.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.5dc5c8e5.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/3.adcbc722.css"];
export const fonts = [];