<template>
  <div>
    <h1 class="heading">Various projects and code samples will be added here...</h1>
    <b-card
      header="Simple Todo List"
      class="text-center project-card"
      style="max-width: 400px;"
    >
      <todo-list/>
    </b-card>
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
import TodoList from '@/todolist/components/AppTodoList'

export default {
  components: {
    todoList: TodoList
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
