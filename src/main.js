import Vue from 'vue';
import App from './App.vue';
import {routes} from '../src/router';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});
