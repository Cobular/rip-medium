<script lang="ts">
	import { onMount } from 'svelte';

	import '../app.scss';

	let nav: Element;

	onMount(() => {
		const observer = new IntersectionObserver(
			([e]) => e.target.classList.toggle('is-pinned', e.intersectionRatio < 1),
			{ threshold: [1] }
		);

		observer.observe(nav);

		return () => {
			observer.unobserve(nav);
		};
	});
</script>

<nav bind:this={nav}>
	<h1>R.I.P Medium</h1>

	<a href="#what">What?</a>
	<a href="#how">How?</a>
	<a href="https://github.com/Cobular/rip-medium">GitHub</a>
</nav>

<slot />

<style lang="scss">
	:global(html) {
		scroll-behavior: smooth;
	}

	nav {
		position: sticky;
		top: -1px;

		background-color: #fffff8;

		display: flex;
		flex-direction: row;
    align-items: center;
		gap: 20px;

		@media (max-width: 600px) {
			gap: 10px;
		}

		padding-left: 20px;
		padding-right: 20px;
		a:first-of-type {
			margin-left: auto;
		}

		& > * {
			transition: all 0.05s ease-in-out;
		}

		&:global(.is-pinned) > * {
			margin-top: 10px;
			margin-bottom: 7px;
		}
	}

	h1 {
		font-size: 1.5em;
	}

	a {
		font-size: 1.2em;
		font-style: italic;

    line-height: 2;
	}
</style>
