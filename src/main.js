import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';


import App from './App.vue';
import { routes } from './routes.js';
import store from './store/store.js';

import { url } from './config.js';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = url;

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
