import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import TodoList from '@/components/TodoList'
import MiscPrograms from '@/components/MiscPrograms'
import PetPics from '@/components/PetPics'
import AboutMe from '@/components/AboutMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/todolist',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/miscprograms',
      name: 'MiscPrograms',
      component: MiscPrograms
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
      path: '*',
      redirect: '/',
      component: HomePage
    }
  ]
})
