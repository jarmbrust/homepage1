<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col cols="auto">
          <b-navbar sticky role="navigation">
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
  background-color: #d7e1f2;
  margin: 0 35px;
  min-height: 900px;
}

html {
  background-color: black;
}
.nav-bar {
  width: 150px;
}

</style>
