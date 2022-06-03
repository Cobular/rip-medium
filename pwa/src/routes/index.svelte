<script lang="ts">
  import {
    type Browser,
    detect,
    type DetectedInfoType,
    type OperatingSystem
  } from "detect-browser";
  import UrlRedirect from "../lib/components/UrlRedirect.svelte";
  import ChromeAndroidInstructions
    from "../lib/components/ChromeAndroidInstructions.svelte";
  import type { platform } from "node:process";
  import ChromiumDesktopInstructions
    from "../lib/components/ChromiumDesktopInstructions.svelte";
  import FirefoxInstructions
    from "../lib/components/FirefoxInstructions.svelte";
  import OtherInstructions from "../lib/components/OtherInstructions.svelte";
  import SeeOtherInstructions
    from "../lib/components/SeeOtherInstructions.svelte";


  const {
    os,
    name,
    type: browserType
  } = detect();

  function isChromiumBrowser(browser: Browser | DetectedInfoType): boolean {
    switch (browser) {
      case "chrome":
      case "edge-chromium":
      case "opera":
        return true;
      default:
        return false;
    }
  }

  function isDesktopOs(os: OperatingSystem | platform): boolean {
    switch (os) {
      case "Mac OS":
      case "Linux":
        return true;
      default:
        return os.toString().startsWith("Windows");
    }
  }
</script>


<main>
  <h1>
    R.I.P Medium
  </h1>

  <h4>
    Tools for redirecting from medium.com to scribe.rip, a faster, less
    bloated, and more private frontend for the content you love.
  </h4>

  <h3>
    Paste a URL Here:
  </h3>
  <UrlRedirect />

  {#if os === "Android OS" && name === "chrome"}
    <ChromeAndroidInstructions />
  {:else if isDesktopOs(os)}
    {#if isChromiumBrowser(name)}
      <ChromiumDesktopInstructions />
    {:else if name === "firefox"}
      <FirefoxInstructions />
    {:else}
      <OtherInstructions />
    {/if}
  {/if}

  <SeeOtherInstructions />
</main>

<style lang="scss">
  main {
    width: 100ch;
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
