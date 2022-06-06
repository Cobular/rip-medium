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

  <section id="what">
    <h3>What?</h3>
    <p>
      Tools for redirecting blog posts on medium.com to
      <a href="https://scribe.rip/">scribe.rip</a>,
      a faster, less bloated, and more private frontend for the same content you
      love.
    </p>
  </section>

  <section id="how">
    <h3>How?</h3>
    <UrlRedirect />
    {#if os === "Android OS" && name === "chrome"}
      <p>Or...</p>
      <ChromeAndroidInstructions />
    {:else if isDesktopOs(os)}
      {#if isChromiumBrowser(name)}
        <p>Or...</p>
        <ChromiumDesktopInstructions />
      {:else if name === "firefox"}
        <FirefoxInstructions />
      {:else}
        <OtherInstructions />
      {/if}
    {/if}

    <SeeOtherInstructions />
  </section>


  <section id="why">
    <h3>
      Why?
    </h3>
    <p>From the <a href="">scribe.rip FAQ:</a></p>
    <ul>
      <li>You believe in an <a
        href="http://scripting.com/liveblog/users/davewiner/2016/01/20/0900.html">open
        web</a></li>
      <li>You believe more in <a
        href="https://www.manton.org/2016/01/15/silos-as-shortcuts.html">the
        author</a> than the platform
      </li>
      <li>You <a
        href="https://twitter.com/BretFisher/status/1206766086961745920">don't
        like the reading experience</a> that Medium provides
      </li>
      <li>You object to <a
        href="https://www.cdevn.com/why-medium-actually-sucks/">Medium's
        extortionist business tactics</a></li>
      <li>You're concerned about how <a
        href="https://tosdr.org/en/service/1003">Medium
        uses your data</a></li>
      <li><a href="https://nomedium.dev/">Other reasons</a></li>
    </ul>
  </section>
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
    gap: 20px;

    & > * {
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  h3 {
    margin-top: 0;
    padding-left: 4ch;
  }
</style>
