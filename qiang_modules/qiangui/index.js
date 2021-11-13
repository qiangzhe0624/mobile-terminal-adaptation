import qiang1 from './components/qiang1.vue'
import qiang2 from './components/qiang2.vue'
const QiangA = qiang1
const QiangB = qiang2
const QiangUi = {
  install(Vue){
    Vue.component('QiangA',QiangA)
    Vue.component('QiangB',QiangB)
    console.log(111);
  }
}
export {qiang1 as QiangA}
export {qiang2 as QiangB}
export default QiangUi