import * as server from '../entries/pages/fighters-list/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/fighters-list/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/fighters-list/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.0a34be78.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.5dc5c8e5.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Pokemon.60ed7d86.js"];
export const stylesheets = ["_app/immutable/assets/5.09184b6e.css","_app/immutable/assets/Pokemon.de85cb42.css"];
export const fonts = [];
