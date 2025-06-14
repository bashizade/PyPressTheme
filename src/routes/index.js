import { createWebHistory, createRouter } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Changed to default import

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;