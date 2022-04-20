import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import {AboutPage, HomePage, PageNotFound} from '@views';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
