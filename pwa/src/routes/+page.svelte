<script lang="ts">
	import UrlRedirect from '../lib/components/UrlRedirect.svelte';
	import ChromeAndroidInstructions from '../lib/components/ChromeAndroidInstructions.svelte';
	import ChromiumDesktopInstructions from '../lib/components/ChromiumDesktopInstructions.svelte';
	import FirefoxInstructions from '../lib/components/FirefoxInstructions.svelte';
	import OtherInstructions from '../lib/components/OtherInstructions.svelte';
	import SeeOtherInstructions from '../lib/components/SeeOtherInstructions.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	const { chrome_desktop, chrome_android, firefox, other, is_pwa } = data;
</script>

<svelte:head>
	<title>RIP Medium</title>
	<meta
		name="description"
		content="Tools for redirecting blog posts on medium.com (or a custom domain) to scribe.rip, a faster, less bloated, and more private frontend for the same content you love."
	/>
</svelte:head>

<main>
	<section id="what">
		<h2>What?</h2>
		<p>
			Tools for redirecting blog posts on medium.com (or a custom domain) to
			<a href="https://scribe.rip/">scribe.rip</a>, a faster, less bloated, and more private
			frontend for the same content you love.
		</p>
	</section>

	<section id="how">
		<h2>How?</h2>
		<UrlRedirect show_copy={!firefox} />
		{#if chrome_android}
			{#if !is_pwa}
				<p>Or...</p>
				<ChromeAndroidInstructions />
			{:else}
				<p>
					You're already using the PWA version of this site! You can use the share menu to redirect
					any medium link to scribe.rip.
				</p>
			{/if}
		{/if}

		{#if chrome_desktop}
			<p>Or...</p>
			<ChromiumDesktopInstructions />
		{/if}

		{#if firefox}
			<FirefoxInstructions />
		{/if}

		{#if other}
			<OtherInstructions />
		{/if}

		<SeeOtherInstructions is_chormium_browser={chrome_desktop} is_android={chrome_android} />
	</section>

	<section id="why">
		<h2>Why?</h2>
		<p>From the <a href="https://scribe.rip/faq">scribe.rip FAQ:</a></p>
		<ul>
			<li>
				You believe in an <a
					href="http://scripting.com/liveblog/users/davewiner/2016/01/20/0900.html">open web</a
				>
			</li>
			<li>
				You believe more in <a href="https://www.manton.org/2016/01/15/silos-as-shortcuts.html"
					>the author</a
				> than the platform
			</li>
			<li>
				You <a href="https://twitter.com/BretFisher/status/1206766086961745920"
					>don't like the reading experience</a
				> that Medium provides
			</li>
			<li>
				You object to <a href="https://www.cdevn.com/why-medium-actually-sucks/"
					>Medium's extortionist business tactics</a
				>
			</li>
			<li>
				You're concerned about how <a href="https://tosdr.org/en/service/1003"
					>Medium uses your data</a
				>
			</li>
			<li><a href="https://nomedium.dev/">Other reasons</a></li>
		</ul>
	</section>
</main>

<style lang="scss">
	main {
		width: 90ch;
		max-width: 90vw;
		margin-left: auto;
		margin-right: auto;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 20px;

		& > * {
			margin-bottom: 0;
			margin-top: 0;
		}
	}

	section {
		scroll-margin-top: 100px;
	}
</style>
