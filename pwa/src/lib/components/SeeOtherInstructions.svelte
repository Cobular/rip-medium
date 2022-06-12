<script>
  import MiniBrowserInstallInstruction
    from "./MiniBrowserInstallInstruction.svelte";
</script>

<p>
  &emsp; In Other Browsers...
</p>
<div class="grid">
  <MiniBrowserInstallInstruction
    title="Extension - Chromium">
    <p>
      An extension exists for all major Chromium browsers.
    </p>
    <p>
      The extension provides a handy button to easily redirect any medium post
      to scribe.rip and provides indication as to when the page you're on is a
      medium post.
    </p>
  </MiniBrowserInstallInstruction>
  <MiniBrowserInstallInstruction
    title="PWA / Add to Homescreen<br/>Chrome on Android">
    <p>
      On Android, add this site as a PWA (install it to your homescreen).
    </p>
    <p>
      Then, it will appear in the share menu for links and convert them for
      you automatically!
    </p>
  </MiniBrowserInstallInstruction>
</div>

<style lang="scss">
  .grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, minmax(200px, 1fr));

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 5px;
    }
  }

  p {
    margin-bottom: 0;
  }
</style>
