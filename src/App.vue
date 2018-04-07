<template>
  <div id="app">
    <b-row>
      <b-col cols="auto">
        <app-nav class="nav-bar"/>
      </b-col>
      <b-col>
        <b-container>
          <router-view/>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import Navigation from '@/components/Navigation.vue'

Vue.use(BootstrapVue);
export default {
  name: 'App',
  components: {
    appNav: Navigation
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
  margin-top: 10px;
}

/* .nav {

  width: 200px;
  position: absolute;
} */

.nav-bar {
  width: 150px;
  display: sticky;
}
</style>
