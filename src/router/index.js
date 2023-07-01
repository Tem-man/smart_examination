import { createRouter, createWebHashHistory } from 'vue-router'

// import about from '../views/AboutView.vue'

const routes = [
 
  {
    path: '/',
    name: 'menu',
    redirect:'/TestView',
    component: () => import('../views/MenuItem.vue'),
    children: [
      {
        path: 'TestView',
        name: 'testView',
        component: () => import('../views/TestView.vue')
      },
      {
        path: 'TestPaperLib',
        name: 'testPaperLib',
        component: () => import('../views/TestPaperLib')
      },
      {
        path: 'CorrectCatalog',
        name: 'correctCatalog',
        component: () => import('../views/CorrectCatalog.vue')
      },
      {
        path: 'TableCpnent',
        name: 'tableCpnent',
        component:()=>import('../layouts/TableCpnent')
  }
    ]
  },
  {
    path: '/new',
    name: 'new',
    component:()=>import('../views/NewView.vue')
  },
  {
    path: '/ExamCpnent',
    name: 'ExamCpnent',
    component:()=>import('../layouts/ExamCpnent')
  },
  {
    path: '/CorrectTestPaper',
    name: 'CorrectTestPaper',
    component:()=>import('../views/CorrectTestPaper')
  },
  {
    path: '/TestPaperDetail',
    name: 'TestPaperDetail',
    component: () => import('../views/TestPaperDetail')
  },
  

]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
