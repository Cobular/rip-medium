<script lang="ts">
  interface ImageData {
    src: string;
    alt: string;
  }

  export let imageData: ImageData | undefined = undefined;
  export let title: string;
</script>

<div class="card">
  {#if imageData !== undefined}
    <img alt={imageData.alt} src={imageData.src} />
  {/if}
  <h3>{@html title}</h3>

  <slot></slot>
</div>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 46ch;
    flex-basis: 100%;
  }

  h3 {
    text-align: center;
    margin-bottom: 0;
  }
</style>
