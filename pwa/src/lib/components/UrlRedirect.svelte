<script lang="ts">
  import { fade } from "svelte/transition";
  import { getRedirectURL } from "@rip-medium/redirector";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faClipboard } from "@fortawesome/free-regular-svg-icons";
  import { detect } from "detect-browser";
  import { browser } from '$app/env';

  const {
    os,
    name
  } = detect();

  let urlField: string;
  let error: undefined | string;
  let message: undefined | string;

  const errorMessage = "Please enter a URL to a Medium post!";

  function urlSubmit(event) {
    const formData = new FormData(event.target);

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    const {
      url
    } = data;

    if (typeof url !== "string") {
      error = errorMessage;
      return;
    }

    let scribeUrl = getRedirectURL(url);
    if (scribeUrl === false) {
      error = errorMessage;
      return;
    }

    setTimeout(() => {
      message = "...and off we go!!";
      if (typeof scribeUrl === "string") {
        location.href = scribeUrl;
      }
    }, 500);
  }
</script>

{#if error !== undefined}
  <p class="callout error" transition:fade={{duration:150}}>{error}</p>
{/if}

<form on:submit|preventDefault={urlSubmit}>
  <label for="url">Paste a URL here: </label>

  <!--  The clipboard reading API isn't supported on FF -->
  {#if browser && name !== "firefox"}
    <button on:click={() =>
    console.log(navigator.clipboard.readText())} type="button">
      <Fa icon={faClipboard} />
    </button>
  {/if}

  <input bind:value={urlField} id="url" name="url" placeholder="https://..."
         required type="url" />
  <button type="submit">
    Go!
  </button>
</form>

{#if message !== undefined}
  <p class="callout message" transition:fade={{duration:50}}>{message}</p>
{/if}

<style lang="scss">
  .callout {
    border-radius: 3px;
    border: 1px solid;
    padding: 6px;
  }

  .error {
    color: indianred;
    border-color: indianred;
  }

  .message {
    color: darkseagreen;
    border-color: darkseagreen;
  }

  form {
    display: flex;
    gap: 5px;
  }

  input {
    flex-grow: 1;
  }
</style>
