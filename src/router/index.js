import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/pages/MainPage.vue";

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
