<script>
  import "../app.scss";
</script>

<nav>
  <h2>R.I.P Medium</h2>

  <h3>What?</h3>
  <h3>How?</h3>
</nav>

<slot />

<style lang="scss">
  nav {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-left: 20px;
    margin-right: 20px;
    h3:first-of-type {
      margin-left: auto;
    }
  }
</style>
