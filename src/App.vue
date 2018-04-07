<template>
  <div id="app">
    <div class="bs-docs-container">
      <app-nav />
      <div class="page-body">
        <router-view/>
      </div>
    </div>
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

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

.nav {
  display: block;
  width: 200px;
  position: absolute;
  margin-top: 10px;
}

.page-body {
  margin-top: 10px;
}
</style>
