<script lang="ts">  import { onMount } from "svelte";

  export let maxHeight: number = 100;
  let div: HTMLDivElement;

  // Jank as fuck pop-in fix
  onMount(async () => {
    // Ensures this is queued in the next task after the render has time to go through
    setTimeout(() => {
      div.style.maxHeight = maxHeight + "px";
    }, 0);
  });
</script>

<div class="loading-helper" bind:this={div}>
  <div class="content">
    <slot />
  </div>
</div>

<style lang="scss">
  .content {
    margin-top: 10px;
  }

  .loading-helper {
    margin: 0;
    max-height: 0;
    transition: max-height 0.5s;
  }
</style>
