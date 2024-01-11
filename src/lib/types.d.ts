export type PokemonType = Pokemon[];

export interface Pokemon {
	base_experience: number;
	forms: Form[];
	height: number;
	held_items: HeldItem[];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	name: string;
	order: number;
	species: Species;
	sprites: Sprites;
	stats: Stat[];
	types: Type[];
	weight: number;
}

export interface Fighter {
	uuid: string;
	id: string;
	name: string;
	hp: number;
	attack: number;
}

export interface Form {
	name: string;
	url: string;
}

export interface HeldItem {
	item: Item;
	version_details: VersionDetail[];
}

export interface Item {
	name: string;
	url: string;
}

export interface VersionDetail {
	rarity: number;
	version: Version;
}

export interface Version {
	name: string;
	url: string;
}

export interface Species {
	name: string;
	url: string;
}

export interface Sprites {
	back_default: string;
	back_female?: string;
	back_shiny: string;
	back_shiny_female?: string;
	front_default: string;
	front_female?: string;
	front_shiny: string;
	front_shiny_female?: string;
}

export interface Stat {
	base_stat: number;
	effort: number;
	stat: Stat2;
}

export interface Stat2 {
	name: string;
	url: string;
}

export interface Type {
	slot: number;
	type: Type2;
}

export interface Type2 {
	name: string;
	url: string;
}
