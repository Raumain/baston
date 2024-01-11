import * as server from '../entries/pages/fight/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/fight/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/fight/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.5875946a.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.5dc5c8e5.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Pokemon.71d03e80.js"];
export const stylesheets = ["_app/immutable/assets/4.0a54fb5b.css","_app/immutable/assets/Pokemon.de85cb42.css"];
export const fonts = [];
