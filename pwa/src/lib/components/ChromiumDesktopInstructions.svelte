<script lang="ts">
  import InstallInstructions from "./InstallInstructions.svelte";

  const chromeWebStoreLink: string = "https://chrome.google.com";
</script>

<InstallInstructions maxHeight=100>
  <p>
    Download the extension from the <a href={chromeWebStoreLink}>chrome web
    store</a> for
    simple one-click redirects on any medium blog, no matter the domain!</p>
  <a class="button" href="chromeWebStoreLink">
    Take me there!
  </a>
</InstallInstructions>

<style>
    .button {
        font: bold 11px Arial;
        text-decoration: none;
        background-color: #EEEEEE;
        color: #333333;
        padding: 2px 6px 2px 6px;
        border-top: 1px solid #CCCCCC;
        border-right: 1px solid #333333;
        border-bottom: 1px solid #333333;
        border-left: 1px solid #CCCCCC;
    }
</style>
