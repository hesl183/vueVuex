import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
// 创建shareState对象
const shareState = {
  name: 'admin',
  userId: 'adhdda18383',
}
// 注册到vue原型中供所有组件使用: 非响应式
Vue.prototype.shareState = shareState;
Vue.component("cpn1",{
  data(){
    return {
      userInfo: this.shareState,// 使用共享的shareState对象
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
