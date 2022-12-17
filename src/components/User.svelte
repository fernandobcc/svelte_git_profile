<script lang="ts">
  import type IUser from "../interfaces/IUser";
  import UpperBar from "./UpperBar.svelte";

  export let user: IUser;
  $: hasRepo = Boolean(user.recent_repos.length > 0);
</script>

<div class="user-card">
  <UpperBar />
  <div class="container-user">
    <div class="container-pic">
      <a href={user.perfil_url} target="_blank" rel="noreferrer">
        <div class="user-pic" style:background-image="url({user.avatar_url})" />
      </a>
    </div>
    <div class="user-details">
      {#if user.name !== null}
        <div class="info">
          Name: <span class="value">{user.name}</span>
        </div>
      {/if}
      <div class="info">
        User: <span class="value">{user.login}</span>
      </div>
      <div class="info">
        Follows: <span class="value">{user.followers}</span>
      </div>
      <div class="info">
        Repos: <span class="value">{user.public_repos}</span>
      </div>
    </div>

    {#if hasRepo}
      <div class="repos">
        <h2 class="title">Recent Repos</h2>
        <ul>
          {#each user.recent_repos as repo}
            <li>
              <a href={repo.url} target="_blank" rel="noreferrer" class="repo">
                {repo.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</div>

<style>
  .user-card {
    margin-top: 65px;
  }

  .container-user {
    padding: 28px 0;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: -12px 37px 45px rgba(133, 127, 201, 0.18);
    border-radius: 0px 0px 13px 13px;

    display: flex;
    justify-content: center;
  }

  .container-pic {
    margin-right: 81px;
  }

  .user-pic {
    width: 12.75rem;
    height: 12.75rem;
    border: 4.56px solid #2e80fa;
    border-radius: 50%;
    background-size: cover;
  }

  .user-details {
    margin-right: 55px;
  }

  .user-details > .info {
    font-weight: 600;
    font-size: 20px;
    line-height: 31px;
    color: #395278;
  }

  .user-details > .info > span {
    color: #6781a8;
    font-weight: normal;
  }

  .repos > .title {
    font-size: 20px;
    line-height: 31px;
    font-weight: 600;
    color: #395278;
  }
  .repo {
    font-size: 20px;
    line-height: 31px;
    color: #6781a8;
    transition: color 0.2s;
  }
</style>
