<template>
  <div>
    <h1 class="heading">Various projects and code samples will be added here...</h1>
     <b-card
      header="Blogging app and database backend"
      class="text-center project-card"
      style="max-width: 500px;"
    >
      <p class="card-text">Currently to update the blog, I need to update the site (one of my
        excuses for not updating the blog in so long...).
      </p>
      <p>
        Project will entail setting up a server-side storage solution to update and store posts.
        Probably will use a SQL database, but I might go with a NoSQL solution depending on what
        works better for my small site (and what looks most interesting to set up).
      </p>
      <b-button v-b-tooltip.hover title="not ready yet">Go to project</b-button>
    </b-card>
    <b-card
      header="Dungeons and Dragons Character Stat Generator"
      class="text-center project-card"
      style="max-width: 550px;"
    >
      <p class="card-text">I play D&D with some friends on the weekends. I wrote this as a revamp of a program I
        created in jQuery awhile ago to facilitate character creation.
      </p>
      <stats-tool/>
    </b-card>
    <b-card
      header="A (Very) Simple Todo List"
      class="text-center project-card"
      style="max-width: 400px;"
    >
      <todo-list/>
    </b-card >
    <b-card
      header="Retro Gamming Console"
      class="text-center project-card"
      style="max-width: 400px;"
    >
      <p class="card-text">Using a Raspberry Pi to make an awesome retro gaming console.</p>
      <b-button v-b-tooltip.hover title="not ready yet">Go to project</b-button>
    </b-card>
  </div>
</template>

<script>
import TodoList from '@/todolist/AppTodoList'
import StatsTool from '@/statsTool/AppStatsTool'

export default {
  components: {
    todoList: TodoList,
    statsTool: StatsTool
  }
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
