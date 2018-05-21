import Vue from 'vue'
import Router from 'vue-router'
import Enter from '@/components/Enter'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Library from '@/components/Library'
import Project from '@/components/Project'

//Prject Interfaces
import Diagrams from '@/components/project/DiagramsInterface'
import Tasks from '@/components/project/TasksInterface'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: to => {
        return '/enter'
      }
    },
    {
      path: '/enter',
      name: 'enter',
      component: Enter
    },
    {
      path: '/register',
      name: 'sign-up',
      component: Register
    },
    {
      path: '/profile',
      name: 'UserProfile',
      component: Profile,
      children: [
        {
          path: 'projects',
          name: 'library',
          component:Library
        },
        {
          path: 'project',
          name: 'project',
          component:Project,
          children: [
            {
              path: 'tasks',
              name: 'tasks',
              component:Tasks
            },
            {
              path: 'diagrams',
              name: 'diagrams',
              component:Diagrams
            }
          ]
        }        
      ]
    }
  ]
})
