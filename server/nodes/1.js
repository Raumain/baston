

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.595142ad.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.5dc5c8e5.js","_app/immutable/chunks/singletons.718e6ba8.js"];
export const stylesheets = [];
export const fonts = [];
