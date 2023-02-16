<script lang="ts">
	import MiniBrowserInstallInstruction from './MiniBrowserInstallInstruction.svelte';

	export let is_chormium_browser: boolean;
	export let is_android: boolean;
</script>

{#if !is_chormium_browser || !is_android}
	<p>
		<b>&emsp; In Other Browsers...</b>
	</p>
	<div class="grid">
		{#if !is_chormium_browser}
			<MiniBrowserInstallInstruction title="Extension - Chromium">
				<p>An extension exists for all major Chromium browsers.</p>
				<p>
					The extension provides a handy button to easily redirect any medium post to scribe.rip and
					provides indication as to when the page you're on is a medium post.
				</p>
			</MiniBrowserInstallInstruction>
		{/if}

		{#if !is_android}
			<MiniBrowserInstallInstruction title="PWA / Add to Homescreen<br/>Chrome on Android">
				<p>On Android, add this site as a PWA (install it to your homescreen).</p>
				<p>
					Then, it will appear in the share menu for links and can convert them for you
					automatically!
				</p>
			</MiniBrowserInstallInstruction>
		{/if}
	</div>
{/if}

<style lang="scss">
	.grid {
		display: flex;
    justify-content: center;
		gap: 20px;

		@media (max-width: 600px) {
			flex-direction: column;
      align-items: center;
			gap: 5px;
		}
	}

	p {
		margin-bottom: 0;
	}
</style>
