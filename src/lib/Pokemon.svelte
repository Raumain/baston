<script lang="ts">
	import type { Pokemon as PType } from "$lib/types";
	import { colorByType } from "$lib/helpers";
	export let pokemon: PType & { hp: number; attack: number };
</script>

<div
	class="pokemon-card"
	style={`background-color: ${colorByType[pokemon.types[0].type.name].main}; 
		color: ${colorByType[pokemon.types[0].type.name].secondary} !important;`}
>
	<p>#{pokemon.id}</p>
	<div>
		<img src={pokemon.sprites.front_default} alt="" id="img-front" />
		<p>{ pokemon.name}</p>
		<div class="fighter-info">
			<span>
				<img src="/src/lib/assets/heart.png" alt="" />
				<p>{pokemon.hp}</p>
			</span>
			<span>
				<img src="/src/lib/assets/sword.png" alt="" />
				<p>{pokemon.attack}</p>
			</span>
		</div>
	</div>
</div>

<style>
	* {
		font-family: "Pokemon Pixel Font", monospace;
	}
	.pokemon-card > div > img {
		width: 100px;
		height: 100px;
		transform: scale(1.8) translateY(20px);
		transition: all 0.1s ease;
	}
	.pokemon-card {
		display: flex;
		flex-direction: column;
		align-items: start;
		width: 300px;
		height: 300px;
		text-decoration: none;
		background: rgba(255, 255, 255, 0.25);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		transition: all 0.2s ease;
		&:hover {
			transition: all 0.3s ease;
			background: rgba(167, 167, 167, 0.25);
			box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.37);
		}
		&:hover > div > img {
			transition: all 0.3s ease;
			transform: scale(2.1) translateY(17px);
		}
	}

	.pokemon-card > p {
		font-size: 1.5rem;
		font-weight: bold;
		text-transform: capitalize;
		margin: 0;
		padding: 0.5rem;
	}

	.pokemon-card > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		width: 100%;
	}

	.pokemon-card > div > p {
		font-size: 1.5rem;
		font-weight: bold;
		text-transform: capitalize;
		transform: translateY(20px);
	}

	.fighter-info {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.fighter-info span {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		height: 20px;
		padding: 0.5rem;
	}
	.fighter-info span p {
		font-size: 1.5rem;
		font-weight: bold;
	}
	.fighter-info span img {
		width: 20px;
		height: 20px;
	}
</style>
