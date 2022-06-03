<script lang="ts">
  interface ImageData {
    src: string;
    alt: string;
  }

  export let imageData: ImageData | undefined;
  export let title: string;
</script>

<div class="card">
  {#if imageData !== undefined}
    <img alt={imageData.alt} src={imageData.src} />
  {/if}
  <h3>{title}</h3>

  <slot></slot>
</div>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }
</style>
