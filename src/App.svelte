<script lang="ts">
  import Header from "./components/Header.svelte";
  import User from "./components/User.svelte";
  import type IUser from "./interfaces/IUser";

  let user: IUser | null = null;
  const setUser = (event: CustomEvent<IUser>) => (user = event.detail);
</script>

<div class="app">
  <Header on:onAlterUser={setUser} />
  {#if user}
    <User {user} />
  {/if}
</div>

<style>
  .app {
    max-height: 100vh;
  }
</style>
