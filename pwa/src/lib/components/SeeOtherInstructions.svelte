<script>
  import MiniBrowserInstallInstruction
    from "./MiniBrowserInstallInstruction.svelte";
</script>

<div class="grid">
  <MiniBrowserInstallInstruction
    title="Extension - Chromium">
    An extension exists for all major Chromium browsers:
    <ul>
      <li>
        Chrome
      </li>
      <li>
        New Edge
      </li>
      <li>
        Opera
      </li>
      <li>
        Brave
      </li>
    </ul>
    The extension provides a handy button to easily redirect any medium post to
    scribe.rip and provides indication as to when the page you're on is a
    medium post.
  </MiniBrowserInstallInstruction>
  <MiniBrowserInstallInstruction
    title="PWA / Add to Homescreen - Chrome on Android">
    For Android Chrome, an installed PWA (when you add the app to your
    homescreen) can add itself as a share target to the share menu for, among
    other things, text!
    <br />
    This means you can choose to share a link from any share button to this
    app and it will automatically open a new tab to the scribe.rip page!
  </MiniBrowserInstallInstruction>
</div>

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
</style>
