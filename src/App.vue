<template>
  <div id="app">
    <nav>
      <router-link to="/" class="btn">Home</router-link>
      <router-link to="/todolist" class="btn">Todo List</router-link>
    </nav>
    <div class="page-body">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
nav {
  display: block;
}
</style>
