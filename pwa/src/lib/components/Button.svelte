<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  export let type: HTMLButtonAttributes["type"] = "button";
</script>

<button on:click {type}>
	<slot />
</button>

<style lang="scss">
	button {
		padding: 9px 15px;
		margin: 5px 0;
		box-sizing: border-box;
		font-size: 18px;
		font-weight: bold;
		background-color: white;
		border-radius: 3px;
    border: 1px solid black;
		cursor: pointer;
	}
</style>
