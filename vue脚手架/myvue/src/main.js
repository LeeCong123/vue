import Vue from 'vue'
import App from './App.vue'
import my from "./components/my.vue"

Vue.config.productionTip = false

new Vue({
  render: h => h(my),
}).$mount('#app')
