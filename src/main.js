import Vue from 'vue'
import App from './App.vue'
import './styles/app.css'
import './styles/tailwind.css'
import VueRouter from "vue-router"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Main from "./components/views/Main.vue"
import CountryDetail from "./components/views/CountryDetail.vue"

Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Main,
    meta: {
      title: "Homepage"
    }
  },
  {
    path: '/:country',
    name: 'countryDetail',
    component: CountryDetail,
    meta: {
      title: "Country"
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
