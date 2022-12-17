<script>
  import Form from "./Form.svelte";
  import Title from "./Title.svelte";
</script>

<header>
  <Title />
  <div class="search-user">
    <Form on:onAlterUser />
  </div>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search-user {
    position: relative;
    width: 70%;
  }
</style>
