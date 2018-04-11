<template>
  <div id="app">
    <b-navbar fixed sticky toggleable="md" type="dark" variant="dark">
      <b-navbar-brand to="/home">James <strong>Armbrust</strong></b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <b-container fluid>
      <b-row>
        <b-col cols="auto">
          <b-navbar sticky role="navigation" class="side-bar collapse navbar-collapse">
            <b-nav vertical pills>
              <b-nav-item to="/home">Home</b-nav-item>
              <b-nav-item to="/miscprojects">Misc Projects</b-nav-item>
              <b-nav-item to="/petpics">Pet Pics</b-nav-item>
              <b-nav-item to="/aboutme">About Me</b-nav-item>
            </b-nav>
          </b-navbar>
        </b-col>
        <b-col>
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import Navigation from '@/components/Navigation.vue'

Vue.use(BootstrapVue)

export default {
  name: 'App',
  components: {
    appNav: Navigation
  },
  beforeCreate () {
    document.body.className = 'home'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body.home {
  background-color: #ced9dd;
  margin: 0 35px;
}

html {
  background-color: #2c3e50;
}

.side-bar {
  top: 70px;
}

.nav-pills .nav-link {
  color: black;
}

.nav-pills .nav-link.active {
  background-color: #2c3e50 !important;
}

</style>
