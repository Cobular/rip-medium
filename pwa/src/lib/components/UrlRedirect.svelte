<script lang="ts">
	import { fade } from 'svelte/transition';
	import { getRedirectURL } from '@rip-medium/redirector';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faClipboard } from '@fortawesome/free-regular-svg-icons';
	import { detect } from 'detect-browser';
	import { browser } from '$app/env';

	const { os, name } = detect();

	let urlField: string;
	let error: undefined | string;
	let message: undefined | string;

	const errorMessage = 'Please enter a URL to a Medium post!';

	function urlSubmit() {
		if (typeof urlField !== 'string') {
			error = errorMessage;
			return;
		}

		let scribeUrl = getRedirectURL(urlField);
		if (scribeUrl === false) {
			error = errorMessage;
			return;
		}

		setTimeout(() => {
			message = '...and off we go!!';
			if (typeof scribeUrl === 'string') {
				location.href = scribeUrl;
			}
		}, 100);
	}
</script>

{#if error !== undefined}
	<p class="callout error" transition:fade={{ duration: 150 }}>{error}</p>
{/if}

<form on:submit|preventDefault={urlSubmit}>
	<label for="url"><b>&emsp; Paste a URL here: </b></label>

	<!--  The clipboard reading API isn't supported on FF -->
	<div>
		{#if browser && name !== 'firefox'}
			<button on:click={() => console.log(navigator.clipboard.readText())} type="button">
				<Fa icon={faClipboard} />
			</button>
		{/if}

		<input
			bind:value={urlField}
			id="url"
			name="url"
			placeholder="https://..."
			required
			type="url"
		/>
		<button type="submit"> Go! </button>
	</div>
</form>

{#if message !== undefined}
	<p class="callout message" transition:fade={{ duration: 50 }}>{message}</p>
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

  button {
		padding: 9px 15px;
		margin: 5px 0;
		box-sizing: border-box;
		font-size: 18px;
    font-weight: bold;
	}
</style>
