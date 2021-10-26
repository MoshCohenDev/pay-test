const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/LoginPage.vue'),
        name: 'Login'
      },
      {
        path: '/home', component: () => import('pages/index.vue'),
        name: 'Home'
      },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
