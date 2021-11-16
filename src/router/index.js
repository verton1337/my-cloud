import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import DeletePage from "@/pages/DeletePage.vue";

const routes = [
  {
    path: '/delete/:photo',
    name: 'DeletePage',
    component: DeletePage,
    props: true

  },
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  }
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
