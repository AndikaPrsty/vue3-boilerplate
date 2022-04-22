import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import {AboutPage, HomePage, PageNotFound, Unauthorized} from '@views';

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
    meta: {
      auth: true,
      role: 'member',
    },
  },
  {
    path: '/unauthorized',
    name: 'unathorized',
    component: Unauthorized,
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

// dummy user login condition
const isLogin = false;
const userPermission = 'guest';

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!isLogin) {
      next('/unauthorized');
    } else {
      next();

      if (to.matched.some(record => record.meta.permission)) {
        if (userPermission === to.meta.permission) {
          next();
        } else {
          next('/unauthorized');
        }
      } else {
        next();
      }
    }
  } else {
    next();
  }
});

export default router;
