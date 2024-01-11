import * as server from '../entries/pages/fighters-list/_id_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/fighters-list/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/fighters-list/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.8ad24620.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.5dc5c8e5.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Pokemon.71d03e80.js","_app/immutable/chunks/crown.52ff8b1d.js"];
export const stylesheets = ["_app/immutable/assets/6.46344835.css","_app/immutable/assets/Pokemon.de85cb42.css"];
export const fonts = [];
