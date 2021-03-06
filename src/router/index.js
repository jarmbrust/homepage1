import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import MiscProjects from '@/components/MiscProjects'
import PetPics from '@/components/PetPics'
import AboutMe from '@/components/AboutMe'
import TodoList from '@/todolist/AppTodoList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/miscprojects',
      name: 'MiscProjects',
      component: MiscProjects
    },
    {
      path: '/petpics',
      name: 'PetPics',
      component: PetPics
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/todolist',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '*',
      redirect: '/home',
      component: HomePage
    }
  ]
})
