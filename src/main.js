import Vue from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
import '@/assets/css/global.css'
import title from './mixin'

Vue.mixin(title)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
