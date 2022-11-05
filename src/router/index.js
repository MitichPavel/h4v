import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'home'},
    /* jshint ignore:start */
    component: () => import('./../views/Home.vue'),
    /* jshint ignore:end */
  },
  {
    path: '/cases',
    name: 'cases',
    meta: {layout: 'main'},
    /* jshint ignore:start */
    component: () => import('./../views/Cases.vue'),
    /* jshint ignore:end */
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'login'},
    /* jshint ignore:start */
    component: () => import('./../views/Login.vue'),
    /* jshint ignore:end */
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_PUBLIC_PATH),
  routes,
  base: process.env.VUE_APP_PUBLIC_PATH,
});

export default router;
