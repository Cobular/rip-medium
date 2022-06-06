<script lang="ts">
  import collapse from "svelte-collapse";
  import InstallInstructions from "./InstallInstructions.svelte";

  let open = false;
</script>

<InstallInstructions>
  <p>There's also an extension for chrome, but it doesn't work on
    firefox right now.
    <button on:click={() => open = !open}>
      (more info)
    </button>
  </p>
  <p use:collapse={{open}}>
    It's Google's fault with their whole extension Manifest V3 stuff, which
    they're pushing very hard for adoption before the other browsers even
    support them at all :(
    <br />
    Anyway, this will be coming soonish™! Please check back in a few weeks.
    <br />
    In the meantime, consider taking a look at the automatic redirection
    instructions on the scribe.rip FAQ. Thank you!
  </p>
</InstallInstructions>

<style lang="scss">
  p {
    margin: 0;
  }
</style>

