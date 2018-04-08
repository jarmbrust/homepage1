<template>
  <div>
    <h1 class="heading">Various projects I am working on will be added here...</h1>
    <b-card
      header="Todo List"
      class="text-center project-card"
      style="max-width: 400px;"
    >
      <p class="card-text">
        A todo list program I wrote in React a few weeks ago.  Will add it
        as soon as I rewrite it in Vue in the next few days.
      </p>
      <b-button v-b-tooltip.hover title="not ready yet">Go to ToDo List</b-button>
    </b-card>
    <b-card
      header="Retro Gamming Console"
      class="text-center project-card"
      style="max-width: 400px;"
    >
      <p class="card-text">Using a Raspberry Pi to make an awesome retro gaming console.</p>
      <b-button v-b-tooltip.hover title="also not ready yet">Go to project</b-button>
    </b-card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .heading {
    font-size: 20px;
    margin: 20px;
  }
  .project-card {
    margin: 15px;
  }
</style>
