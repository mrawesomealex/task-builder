import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      path: '/',
      name: 'landing',
      component: HelloWorld
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
