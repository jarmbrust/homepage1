<template>
  <div bd-sidebar col-md-3 col-xl-2 col-12>
    <b-nav vertical pills sticky>
      <b-nav-item><router-link to="/" class="btn nav-item">Home</router-link></b-nav-item>
      <b-nav-item><router-link to="/todolist" class="btn nav-item">Todo List</router-link></b-nav-item>
      <b-nav-item><router-link to="/miscprograms" class="btn nav-item">Misc Programs</router-link></b-nav-item>
      <b-nav-item><router-link to="/petpics" class="btn nav-item">Pet Pics</router-link></b-nav-item>
      <b-nav-item><router-link to="/aboutme" class="btn nav-item">About Me</router-link></b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
