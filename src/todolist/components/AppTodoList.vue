<template>
  <div id="app">
    <input type="text"
      v-model="newItemText"
      @keyup.enter="addNewTodoItem"
      placeholder="Add an item"
    >
    <ul v-for="todo in todolist" :key="todo.id">
      <li>
        {{ todo.title }} <b-button size="sm" variant="outline-secondary" @click="removeItem(todo.id)">x</b-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppTodoList',
  data () {
    return {
      newItemText: '',
      todolist: [
        {
          id: 0,
          title: 'Walk dogs'
        },
        {
          id: 1,
          title: 'Wash dishes'
        },
        {
          id: 2,
          title: 'Finish Website'
        }
      ],
      nextTodoId: 3
    }
  },
  methods: {
    addNewTodoItem () {
      this.todolist.push({
        id: this.nextTodoId++,
        title: this.newItemText
      })
      this.newItemText = ''
    },
    removeItem (item) {
      const index = this.todolist.map(list => list.id).indexOf(item)
      this.todolist.splice(index, 1)
    }
  }
}
</script>

<style scoped>
  input {
    margin-bottom: 10px;
  }
  ul {
    text-align: left;
    list-style-type: circle;
  }
  li {
    margin: 3px;
  }
</style>
