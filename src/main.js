import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import {Button} from 'vant';  
import Vant from 'vant'
Vue.use(Vant)
import 'vant/lib/index.css';
// import QiangUi from '../qiang_modules/qiangui/index'
// Vue.use(QiangUi)
import {QiangA,QiangB} from '../qiang_modules/qiangui/index'
Vue.component('QiangA',QiangA)
Vue.component('QiangB',QiangB)
// Vue.use(Button);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
