<script lang="ts">
  import InstallInstructions from "./InstallInstructions.svelte";

  const chromeWebStoreLink: string = "https://chrome.google.com";
</script>

<InstallInstructions maxHeight=100>
  <p>
    Download the extension from the <a href={chromeWebStoreLink}>chrome web
    store</a> for
    simple one-click redirects on any medium blog, no matter the domain!</p>
  <form action="https://google.com">
    <input type="submit" value="Take me there!" />
  </form>
</InstallInstructions>

<style>
  input {
      font-size: 1em;
  }
</style>

