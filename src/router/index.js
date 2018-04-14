import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import MiscProjects from '@/components/MiscProjects'
import PetPics from '@/components/PetPics'
import AboutMe from '@/components/AboutMe'
import TodoList from '@/todolist/components/AppTodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
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
      redirect: '/',
      component: HomePage
    }
  ]
})
