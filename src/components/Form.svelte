<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type IUser from "../interfaces/IUser";
  import buildUser from "../utils/user";
  import Button from "./Button.svelte";

  let inputValue = "";
  let statusError: null | number = null;

  const dispatch = createEventDispatcher<{
    onAlterUser: IUser | null;
  }>();

  async function onSubmit() {
    const responseUser = await fetch(
      `https://api.github.com/users/${inputValue}`
    );
    const responseRepo = await fetch(
      `https://api.github.com/users/${inputValue}/repos`
    );
    if (responseUser.ok && responseRepo.ok) {
      const userData = await responseUser.json();
      const repoData = await responseRepo.json();

      dispatch("onAlterUser", buildUser(userData, repoData));
      statusError = null;
    } else {
      statusError = responseUser.status;
      dispatch("onAlterUser", null);
    }
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <input
    type="text"
    placeholder="Search user"
    class="input {statusError === 404 && 'error-input'}"
    class:error-input={statusError === 404}
    bind:value={inputValue}
  />
  {#if statusError === 404}
    <span class="error">User not founded</span>
  {/if}
  <div class="container-button">
    <Button>
      Search
      <img src="assets/lupa.svg" alt="magnifying glass" />
    </Button>
  </div>
</form>

<style>
  .input {
    padding: 15px 25px;
    width: calc(100% - 8.75rem);
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #2e80fa;
    box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
    outline: 0;
  }

  .input::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 300;
    font-size: 19.5px;
    line-height: 26px;
    color: #6e8cba;
  }

  .error {
    position: absolute;
    bottom: -25px;
    left: 0;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    z-index: -1;
    color: #ff003e;
  }

  .error-input {
    border: 1px solid #ff003e;
  }

  .container-button {
    position: absolute;
    width: 9.625rem;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
  }
</style>
