<template>
  <div>
    <ul class="nav nav-pills nav-stacked">
      <li><router-link to="/" class="btn">Home</router-link></li>
      <li><router-link to="/todolist" class="btn">Todo List</router-link></li>
      <li><router-link to="/petpics" class="btn">Pet Pics</router-link></li>
      <li><router-link to="/aboutme" class="btn">About Me</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav {
    position: absolute;
  }
</style>
