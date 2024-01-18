<script lang="ts">
	export let data;
	const { pokemon } = data;
	let pokemonId = 1;
	let pokemonSurname = "";
	$: pokemonDisplay = pokemon.find((pok) => pok.id === pokemonId);

	function handleRandom() {
		const newPokemonId = Math.floor(Math.random() * 152) + 1;
		const shuffleInterval = setInterval(() => {
			pokemonId = Math.floor(Math.random() * 152) + 1;
			if (pokemonId === newPokemonId) {
				fetch("https://api.api-ninjas.com/v1/randomword", {
					headers: {
						"X-Api-Key": "nuWHPgabXPFSGBCjyaP+Lg==hYNUmS6u0ekp4RUR"
					}
				}).then((res) => {
					res.json().then((data) => {
						pokemonSurname = data.word;
					});
				});
				clearInterval(shuffleInterval);
			}
		}, 10);
	}
</script>

<div class="main">
	<form method="post">
		<div class="form-field">
			<label for="fighter-id">Choose a pokemon</label>
			<select
				name="fighter-id"
				id="fighter-id"
				value={pokemonId}
				on:change={(e) => (pokemonId = Number(e.currentTarget.value))}
			>
				{#each pokemon as pok}
					<option value={pok.id}>
						#{pok.id}
						{pok.name}
					</option>
				{/each}
			</select>
		</div>
		<div class="form-field">
			<label for="fighter-surname"> Surname </label>
			<input
				type="text"
				name="fighter-surname"
				id="fighter-surname"
				value={pokemonSurname || ""}
				on:change={(e) => (pokemonSurname = e.currentTarget.value)}
			/>
		</div>
		<div class="buttons">
			<input type="submit" value="Create" />
			<button type="button" on:click={handleRandom}>Random</button>
		</div>
	</form>
	<div class="pokemon-display">
		{#if pokemonDisplay}
			<img src={pokemonDisplay.sprites.front_default} alt="" />
		{/if}
	</div>
</div>

<style>
	.main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 200px);
		width: 100%;
	}
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		height: 100%;
	}
	.form-field {
		display: flex;
		flex-direction: column;
		width: 70%;
	}
	.form-field label {
		margin-bottom: 0.5rem;
		font-size: 2rem;
	}
	.form-field select {
		font-size: 1.7rem;
		font-family: "Pokemon Pixel Font", monospace;
	}

	.form-field select option {
		color: #3343ba;
	}

	.form-field input {
		font-size: 1.7rem;
		font-family: "Pokemon Pixel Font", monospace;
	}
	.buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		width: 100%;
	}
	input[type="submit"],
	button {
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 10px;
		background: #ffde00;
		color: #3343ba;
		box-shadow:
			6px 6px 10px rgb(59, 68, 134),
			-6px -6px 10px #2231a0;
		transition: all 0.1s ease-in-out;
		font-family: "Pokemon Pixel Font", monospace;
		font-size: 1.7rem;
		cursor: pointer;
		&:hover {
			transform: scale(1.03);
			transition: all 0.1s ease-in-out;
			background: #ffde00;
			color: #3343ba;
			box-shadow:
				-6px -6px 10px rgb(59, 68, 134),
				6px 6px 10px #2231a0;
		}
		&:active {
			background: #ffde00;
			color: #3343ba;
			box-shadow:
				-6px -6px 10px rgb(59, 68, 134),
				6px 6px 10px #2231a0;
			transform: scale(0.99) !important;
			transition: all 0.1s ease-in-out;
		}
	}
	.pokemon-display {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		height: 100%;

		& > img {
			width: 200px;
		}
	}
</style>
