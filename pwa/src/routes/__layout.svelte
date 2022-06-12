<script>
  import "../app.scss";
</script>

<nav>
  <h1>R.I.P Medium</h1>

  <h3>What?</h3>
  <h3>How?</h3>
</nav>

<slot />

<style lang="scss">
  nav {
    position: sticky;
    top: 0;

    background-color: #fffff8;

    display: flex;
    flex-direction: row;
    gap: 20px;
    padding-left: 20px;
    padding-right: 20px;
    h3:first-of-type {
      margin-left: auto;
    }
  }

  h1 {
    font-size: 1.5em;
  }
</style>
