<div class="user-card">
  <div class="upper-bar">
    <span class="action-user" />
    <span class="action-user" />
    <span class="action-user" />
  </div>
</div>

<style>
  .upper-bar {
    background: rgba(255, 255, 255, 0.5);
    padding: 10px;
    border-radius: 8px 8px 0 0;
  }

  .upper-bar > .action-user {
    width: 7px;
    height: 7px;

    display: inline-block;
    border-radius: 50%;
  }

  .upper-bar > .action-user:first-child {
    background: #d8695b;
  }

  .upper-bar > .action-user:nth-child(2) {
    background: #eac213;
  }

  .upper-bar > .action-user:nth-child(3) {
    background: #79c743;
  }
</style>
