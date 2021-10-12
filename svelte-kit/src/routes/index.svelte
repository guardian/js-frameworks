<script context="module">
	import { main, header, footer, logo, flex, flexItem } from '../styles/main.css';
	import { frameworks } from '../../../frameworks';
	
	export const framework = frameworks[2].name;
	export { frameworks };
	
	/**
	 * Hydration is essential, otherwise
	 * - no interactivity
	 * - vanilla-extract doesn’t work
	 */
	export const hydrate = true;
</script>

<script lang="ts">
	let counter = 12;
</script>

<!-- svelte-ignore component-name-lowercase -->
<header class={header}>
	<h1 class={logo}>The Guardian</h1>
	<h2>{framework}</h2>
</header>

<main class={main}>
	<p>
		This is the {framework} implementation of a simple page.
	</p>

	<p>
		You can see other implementation here, provided you ran
		<code>pnpm -r build-and-preview</code> in the top folder
	</p>
	<ul>
		{#each frameworks as {port, name} }
			<li><a href="http://localhost:{port}">{name}: port {port}</a></li>
		{/each}
	</ul>

	<div class={flex}>
		<p class={flexItem}>Here’s a dynamic component:</p>
		<div class={flexItem}>
			<button
				on:click={() => {
					counter--;
				}}>−</button
			>
			<pre>{counter}</pre>
			<button
				on:click={() => {
					counter++;
				}}>+</button
			>
		</div>
	</div>

	<h3>Drawbacks</h3>

	<ul>
		<li>Need to find a working CSS-in-JS library</li>
		<li>No partial hydration (but not a real issue)</li>
		<li>This is currently running in dev mode, not as a PROD build</li>
	</ul>
</main>

<!-- svelte-ignore component-name-lowercase -->
<footer class={footer}>(This footer cannot be imported from Source)</footer>

<style>
	:global(body) {
		max-width: 1300px;
		margin: 0 auto;
	}

	code {
		font-weight: bold;
		background-color: #ccc;
		padding: 0.125em 0.5em;
		border-radius: 0.5em;
	}
</style>
