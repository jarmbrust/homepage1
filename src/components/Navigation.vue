<template>
  <b-container role="navigation" class="nav-container">
    <b-nav vertical pills>
      <b-link to="/home" class="nav-link">Home</b-link>
      <b-link to="/miscprojects" class="nav-link">Misc Projects</b-link>
      <b-link to="/petpics" class="nav-link">Pet Pics</b-link>
      <b-link to="/aboutme" class="nav-link">About Me</b-link>
    </b-nav>
  </b-container>
</template>

<script>
export default {

}
</script>

<style>
  .nav-container {
    border: 2px solid #000;
    padding: 20px;
    border-bottom-right-radius: 25px;
    background-color: #bec4ce;
    box-shadow: 2px 3px #7f7f80;
  }
</style>
