<script lang="ts">
	import Pokemon from "$lib/Pokemon.svelte";
	import type { Pokemon as PType } from "$lib/types";
	import crown from "$lib/assets/crown.png";

	export let data;
	const { fighters } = data;
	const { champion } = data;
	let selectedFighters = [] as string[];
	async function handleDelete(fighter: PType & { uuid: string; hp: number; attack: number }) {
		await fetch(`http://localhost:5173/fighters-list?uuid=${fighter.uuid}`, {
			method: "DELETE"
		});
	}
</script>

<div class="main">
	{#if fighters.length === 0}
		<h1>No fighters yet !</h1>
		<div class="button-wrapper">
			<a href="/create-fighter" class="add-figther"><span> + </span> </a>
			<p>Add a fighter !</p>
		</div>
	{/if}
	<a
		href={`/fight?uuid1=${selectedFighters?.[0]}&uuid2=${selectedFighters?.[1]}`}
		class="start-fight"
		aria-disabled={selectedFighters.length !== 2}
		style={selectedFighters.length !== 2 ? "background: #86815c; cursor:not-allowed;" : ""}
		>Start the fight !</a
	>
	<div class="figthers-wrapper">
		{#each fighters as fighter}
			<div
				class="fighter-wrapper"
				style={selectedFighters.includes(fighter.uuid) ? "border: #cc0000 solid" : ""}
			>
				<Pokemon pokemon={fighter} />
				<span class="is-selected">
					{selectedFighters.includes(fighter.uuid) ? "Selected" : ""}
				</span>
				<span class="is-champion">
					{#if champion?.uuid === fighter.uuid}
						<img src={crown} alt="" />
						{champion?.points}
					{/if}
				</span>
				<div class="select-fighter">
					{#if selectedFighters.includes(fighter.uuid)}
						<button
							class="choose-fighter"
							on:click={() =>
								(selectedFighters = selectedFighters.filter((f) => f !== fighter.uuid))}
						>
							Unselect</button
						>
					{:else}
						<button
							class="choose-fighter"
							on:click={() => (selectedFighters = [...selectedFighters, fighter.uuid])}
							disabled={selectedFighters.length === 2}
						>
							Select</button
						>
					{/if}
					<button class="delete-fighter" on:click={() => handleDelete(fighter)}>Delete</button>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
	.start-fight {
		font-size: 2rem;
		background: #ffde00;
		text-decoration: none;
		color: #3343ba;
		padding: 0.5rem 1rem;
		border-radius: 10px;
		box-shadow:
			6px 6px 10px rgb(59, 68, 134),
			-6px -6px 10px #2231a0;
		transition: all 0.1s ease-in-out;
		&:hover:not([aria-disabled="true"]) {
			transform: scale(1.03);
			transition: all 0.1s ease-in-out;
			color: #a80303;
			font-weight: bold;
		}
	}
	.button-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}
	.add-figther {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 1rem;
		height: 150px;
		width: 150px;
		font-size: 5rem;
		cursor: pointer;
		background: #3343ba;
		border-radius: 15%;
		box-shadow:
			6px 6px 10px rgb(59, 68, 134),
			-6px -6px 10px #2231a0;
		color: #ffde00;
		text-decoration: none;
		text-align: center;
		font-family: "Courier New", Courier, monospace;
		transition: all 0.1s ease-in-out;
		&:active {
			box-shadow:
				4px 4px 7px rgb(59, 68, 134),
				-4px -4px 7px #2231a0;
			transform: scale(0.99) !important;
			transition: all 0.1s ease-in-out;
		}
		&:active span {
			transform: scale(0.9) !important;
		}
		&:hover span {
			transform: scale(1.1);
			transition: all 0.1s ease-in-out;
		}
	}
	.button-wrapper p {
		font-size: 2rem;
		margin-top: 1rem;
	}

	.figthers-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.fighter-wrapper {
		position: relative;
		&:hover .select-fighter {
			display: flex !important;
			transition: all 0.1s ease-in-out;
		}
		border-radius: 10px;
		border: 3px rgba(0, 0, 0, 0) solid;
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
		color: #cc0000;

		& > img {
			width: 30px;
		}
	}

	.is-selected {
		position: absolute;
		top: 25px;
		right: 0;
		font-size: 1.5rem;
		font-weight: bold;
		text-transform: capitalize;
		margin: 0;
		padding: 0.5rem;
		color: #cc0000;
	}

	.select-fighter {
		position: absolute;
		top: 0;
		left: 0;
		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		width: 100%;
		height: 100%;
		background: #00000099;
		border-radius: 10px;
		transition: all 0.1s ease-in-out;
	}

	.choose-fighter {
		background: #3343ba;
		border-radius: 15%;
		border: none;
		box-shadow:
			0.2px 0.2px 5px rgb(59, 68, 134),
			-0.2px -0.2px 5px #2231a0;
		color: #ffde00;
		text-decoration: none;
		text-align: center;
		font-family: "Pokemon Pixel Font", monospace;
		font-size: 1.5rem;
		letter-spacing: 2px;
		padding: 0.5rem 1rem;
		cursor: pointer;
		transition: all 0.1s ease-in-out;
		&:active:not(:disabled) {
			box-shadow:
				1px 1px 3px rgb(59, 68, 134),
				-1px -1px 3px #2231a0;
			transform: scale(0.99) !important;
			transition: all 0.1s ease-in-out;
		}
		&:hover:not(:disabled) {
			transform: scale(1.03);
			transition: all 0.1s ease-in-out;
			background: #243191;
		}
		&:disabled {
			filter: brightness(0.5);
			cursor: not-allowed;
		}
	}

	.delete-fighter {
		background: #cc0000;
		border-radius: 15%;
		border: none;
		box-shadow:
			0.2px 0.2px 5px #fe3636,
			-0.2px -0.2px 5px #940000;
		color: #ffde00;
		text-decoration: none;
		text-align: center;
		font-family: "Pokemon Pixel Font", monospace;
		font-size: 1.5rem;
		letter-spacing: 2px;
		padding: 0.5rem 1rem;
		cursor: pointer;
		transition: all 0.1s ease-in-out;
		&:active {
			box-shadow:
				1px 1px 3px #fe3636,
				-1px -1px 3px #940000;
			transform: scale(0.99) !important;
			transition: all 0.1s ease-in-out;
		}
		&:hover {
			transform: scale(1.03);
			transition: all 0.1s ease-in-out;
			background: #a80303;
		}
	}
</style>
