<div id="main">
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/create-fighter" class="fighter-button">Add Fighter</a></li>
			<li><a href="/fighters-list">Fighters</a></li>
		</ul>
	</nav>
	<slot />
</div>

<style>
	* {
		font-family: "Pokemon Pixel Font", monospace;
	}
	#main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #3343ba;
		height: 50px;
		width: 100%;
	}
	nav ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		list-style: none;
		width: 100%;
	}
	nav ul li {
		margin: 0 1rem;
	}
	nav ul li a {
		text-decoration: none;
		color: #ffde00;
		font-size: 1.5rem;
		font-weight: bold;
		text-transform: capitalize;
	}
	nav ul li a:hover {
		color: #fff;
	}
	.fighter-button {
		background: #ffde00;
		color: #3343ba;
		padding: 0.5rem 1rem;
		border-radius: 10px;
		box-shadow:
			6px 6px 10px rgb(59, 68, 134),
			-6px -6px 10px #2231a0;
		transition: all 0.1s ease-in-out;
	}
</style>
