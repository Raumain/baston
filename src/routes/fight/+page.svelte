<script lang="ts">
	import Pokemon from "$lib/Pokemon.svelte";
	import type { Pokemon as PType } from "$lib/types";
	import heart from "$lib/assets/heart.png";
	import { onMount } from "svelte";
	import { invalidate } from "$app/navigation";
	export let data;
	const { fighters } = data;
	let hp = [
		{ uuid: fighters[0].uuid, hp: fighters[0].hp },
		{ uuid: fighters[1].uuid, hp: fighters[1].hp }
	];
	let hurtedClass = [] as { uuid: string; hurted: boolean }[];
	let winner: PType & { uuid: string; hp: number; attack: number };
	let isDraw = false;

	const attack = () => {
		fighters.forEach((fighter, index) => {
			console.log(hp);
			const opponent = index === 0 ? 1 : 0;
			hp[opponent].hp -= Math.floor(Math.random() * fighter.attack);
			// hurtedClass[index] = {
			// 	uuid: fighter.uuid,
			// 	hurted: hurtedClass[index]?.hurted ? false : true
			// };
		});
	};

	const checkWinner = async () => {
		if (hp[0].hp <= 0) {
			winner = fighters[1];
			await fetch(`http://localhost:5173/fight?winner=${winner.uuid}&loser=${fighters[0].uuid}`, {
				method: "POST"
			});
		} else if (hp[1].hp <= 0) {
			winner = fighters[0];
			await fetch(`http://localhost:5173/fight?winner=${winner.uuid}&loser=${fighters[1].uuid}`, {
				method: "POST"
			});
		} else if (hp[0].hp <= 0 && hp[1].hp <= 0) {
			isDraw = true;
			await fetch(
				`http://localhost:5173/fight?&winner=${fighters[0].uuid}&looser=${fighters[1].uuid}&isDraw=true`,
				{
					method: "POST"
				}
			);
		}
	};

	onMount(() => {
		let i = 0
		const interval = setInterval(async () => {
			i++;
			console.log(i);
			attack();
			checkWinner();
			if (hp[0].hp <= 0 || hp[1].hp <= 0) {
				invalidate("champion:all");
				clearInterval(interval);
			}
		}, 1000);
		return () => clearInterval(interval);
	});
</script>

<div class="main">
	{#if winner}
		<div class="winner">
			<h1>{winner.name.toUpperCase()} wins !</h1>
			<Pokemon pokemon={winner} />
		</div>
		<a href="/" class="new-fight">New Fight</a>
	{:else if isDraw}
		<div class="winner">
			<h1>Draw !</h1>
			<Pokemon pokemon={fighters[0]} />
			<Pokemon pokemon={fighters[1]} />
		</div>
		<a href="/" class="new-fight">New Fight</a>
	{:else}
		<div class="fighters-wrapper">
			{#each fighters as fighter, index}
				<div class="figther-wrapper">
					<p>
						<img src={heart} alt="" />
						{hp[index].hp > 0 ? hp[index].hp : 0}
					</p>
					<img
						src={fighter.sprites.front_default}
						alt=""
						style={index === 0 ? "transform: scaleX(-1);" : ""}
						class={`fighter-img ${hurtedClass[index]?.hurted ? "hurted" : ""}`}
					/>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.main {
		width: 100%;
		height: calc(100vh - 200px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.new-fight {
		margin-top: 20px;
		padding: 10px 20px;
		border-radius: 10px;
		background-color: #ffde00;
		color: #000;
		text-decoration: none;
	}
	.winner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}
	.fighters-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.figther-wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		height: 100%;
		&:first-of-type {
			border-right: 1px #ffde00 solid;
		}
		&:first-of-type p {
			left: 20px;
		}
		&:last-of-type p {
			right: 20px;
		}
	}
	.figther-wrapper p {
		position: absolute;
		top: 0;
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 2rem;
		font-weight: bold;
	}
	.figther-wrapper p > img {
		width: 30px;
	}
	.figther-wrapper > img {
		width: 200px;
	}

	.hurted {
		animation: hurted 0.5s ease-in-out;
	}
	@keyframes hurted {
		0% {
			filter: sepia(inherit) brightness(inherit) saturate(inherit) contrast(inherit);
			transform: translateX(0);
		}
		25% {
			transform: translateX(10px);
		}
		50% {
			filter: sepia(100%) brightness(63%) saturate(547%) contrast(241%);
			transform: translateX(0);
		}
		75% {
			transform: translateX(-10px);
		}
		100% {
			filter: sepia(default) brightness(default) saturate(default) contrast(default);
			transform: translateX(0);
		}
	}

	@keyframes shake {
		0% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(10px);
		}
		50% {
			transform: translateX(0);
		}
		75% {
			transform: translateX(-10px);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
