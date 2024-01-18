<script lang="ts">
	import Pokemon from "$lib/Pokemon.svelte";
	import { colorByType } from "$lib/helpers";
	import crown from "$lib/assets/crown.png";
	export let data;
	const { fighter, points, history } = data;
</script>

{#if fighter}
	<div class="fighter-wrapper">
		<Pokemon pokemon={fighter} />
		<span
			class="is-champion"
			style={`color: ${colorByType[fighter.types[0].type.name].secondary} !important;`}
		>
			<img src={crown} alt="" />
			{points}
		</span>
	</div>
	<div class="history">
		{#if history.length > 0}
			<h2>History</h2>
			{#each history as { opponent, winner }}
				<div class="history-item">
					<div class="fighter">
						<Pokemon pokemon={fighter} />
						{#if winner === fighter.uuid}
							<span class="has-win">
								<img src={crown} alt="" />
								<p>Winner</p>
							</span>
						{/if}
					</div>
					<p>vs</p>
					<div class="opponent">
						<Pokemon pokemon={opponent} />
						{#if winner === opponent.uuid}
							<span class="has-win">
								<img src={crown} alt="" />
								<p>Winner</p>
							</span>
						{/if}
					</div>
				</div>
			{/each}
		{/if}
	</div>
{/if}

<style>
	.fighter-wrapper {
		position: relative;
		margin: 1rem;
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
	.history {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	.history-item {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.history-item > p {
		font-size: 2rem;
		font-weight: bold;
	}
	.fighter,
	.opponent {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		& > span {
			position: absolute;
			top: 0;
			right: 0;
			display: flex;
			align-items: center;
			gap: 2px;
		}
		& > span > p {
			font-size: 1.5rem;
			font-weight: bold;
			text-transform: capitalize;
			margin: 0;
			padding: 0.5rem;
		}
		& > span > img {
			width: 30px;
		}
	}
</style>
