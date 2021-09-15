import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "tailwindcss/tailwind.css"
import "./mixins"

Vue.config.productionTip = false
Vue.component("Loader", ()=> import("./components/Loader.vue"))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
