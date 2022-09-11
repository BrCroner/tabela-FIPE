import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Formulario from '@/views/Formulario.vue'
import TabelaFipe from '@/views/TabelaFipe.vue'
import Sobre from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: Formulario,
  },
  {
    path: '/tabela-fipe',
    name: 'tabela-fipe',
    component: TabelaFipe,
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
