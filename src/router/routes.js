import logado from './middleware/logado'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/inicio',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/departamento',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/departamento/Lista.vue'), beforeEnter: logado }
    ]
  },
  {
    path: '/departamento/adicionar',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/departamento/Adicionar.vue'), beforeEnter: logado }
    ]
  },
  {
    path: '/secretaria',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/secretaria/Lista.vue'), beforeEnter: logado }
    ]
  },
  {
    path: '/secretaria/adicionar',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/secretaria/Adicionar.vue'), beforeEnter: logado }
    ]
  },
  {
    path: '/usuario',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/usuario/Lista.vue'), beforeEnter: logado }
    ]
  },
  {
    path: '/assunto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/assunto/Lista.vue'), beforeEnter: logado }
    ]
  },
  {
    path: '/assunto/adicionar',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/assunto/Adicionar.vue'), beforeEnter: logado }
    ]
  },
  {
    path: '/chamado',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/chamado/Lista.vue'), beforeEnter: logado }
    ]
  },
  {
    path: '/chamado/adicionar',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/chamado/Adicionar.vue'), beforeEnter: logado }
    ]
  },
  // Pagina de login
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/usuario/Login.vue') }
    ]
  },
  // Pagina de registro
  {
    path: '/registrar',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/usuario/Registrar.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
