<script lang="ts">
	import Pokemon from "$lib/Pokemon.svelte";
	import { colorByType } from "$lib/helpers";
	import crown from "$lib/assets/crown.png";
	export let data;
	const { list } = data;
</script>

<div class="main">
	<div class="fighters-wrapper">
		{#each list as fighter}
			<a
				href={`/fighters-list/${fighter.fighter.uuid}?points=${fighter.points}`}
				class="fighter-wrapper"
			>
				<Pokemon pokemon={fighter.fighter} />
				<span
					class="is-champion"
					style={`color: ${colorByType[fighter.fighter.types[0].type.name].secondary} !important;`}
				>
					<img src={crown} alt="" />
					{fighter.points}
				</span>
			</a>
		{/each}
	</div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.fighters-wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	.fighter-wrapper {
		position: relative;
		margin: 1rem;
		text-decoration: none;
	}
	.is-champion {
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		align-items: center;
		gap: 2px;
		font-size: 1.5rem;
		font-weight: bold;
		text-transform: capitalize;
		margin: 0;
		padding: 0.5rem;

		& > img {
			width: 30px;
		}
	}
</style>
