<script lang="ts">
	import { slide } from 'svelte/transition';
	import { getRedirectURL } from '@rip-medium/redirector';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faClipboard } from '@fortawesome/free-regular-svg-icons';
	import Button from './Button.svelte';

	export let show_copy = false;

	let urlField: string;
	let error: undefined | string;
	let message: undefined | string;

	const errorMessage = 'Please enter a URL to a Medium post!';

	function do_error() {
		error = errorMessage;
		urlField = '';

		setTimeout(() => {
			error = undefined;
		}, 2000);
	}

	function redirect(maybe_url: string) {
		console.log('redirecting to', maybe_url);

		let scribeUrl = getRedirectURL(maybe_url);
		if (scribeUrl === false) {
			do_error();
			return;
		}

		setTimeout(() => {
			message = '...and off we go!!';
			if (typeof scribeUrl === 'string') {
				location.href = scribeUrl;
			}
		}, 100);
	}

	function urlSubmit() {
		if (typeof urlField !== 'string') {
			do_error();
			return;
		}

		redirect(urlField);
	}
</script>

<form on:submit|preventDefault={urlSubmit} novalidate>
	<label for="url"><b>&emsp; Paste a URL here: </b></label>

	<!--  The clipboard reading API isn't supported on FF -->
	<div>
		{#if show_copy}
			<Button on:click={async () => redirect(await navigator.clipboard.readText())}>
				<Fa icon={faClipboard} />
			</Button>
		{/if}

		<input
			bind:value={urlField}
			id="url"
			name="url"
			placeholder="https://..."
			required
			type="url"
		/>
		<Button type="submit">Go!</Button>
	</div>
</form>

{#if error !== undefined}
	<p class="callout error" transition:slide={{ duration: 150 }}>{error}</p>
{/if}

{#if message !== undefined}
	<p class="callout message" transition:slide={{ duration: 50 }}>{message}</p>
{/if}

<style lang="scss">
	.callout {
		border-radius: 3px;
		border: 1px solid;
		padding: 6px;
	}

	.error {
		color: indianred;
		border-color: indianred;
	}

	.message {
		color: darkseagreen;
		border-color: darkseagreen;
	}

	form {
		@media (max-width: 600px) {
			flex-direction: column;
		}
	}

	div {
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		gap: 5px;
		margin-top: 7px;

		max-width: 80ch;
	}

	input[type='url'] {
		width: 100%;
		padding: 9px 15px;
		margin: 5px 0;
		box-sizing: border-box;
		font-size: 18px;
	}
</style>
