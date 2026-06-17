import { createWebHistory, createRouter } from 'vue-router';
import Main from '@/views/Main.vue';
import Camera from '@/views/Camera.vue';
import Gallery from '@/views/Gallery.vue';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/camera',
    component: Camera,
  },
  {
    path: '/gallery',
    component: Gallery,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;