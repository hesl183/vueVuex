import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

Vue.use(Vuex)
const state = {
  countVuex: 10,
  subjects: [
    {id:101,name:'Java',score: 90},
    {id:102,name:'JavaScript',score: 88},
    {id:103,name:'vue',score: 89},
    {id:104,name:'c++',score: 70},
    {id:105,name:'python',score: 76},],
  info: {
    id:101,
    name: 'admin',
    age: 18
  },
}
export default new Vuex.Store({
  // state:state,// es5语法
  state,
  actions,// es6语法
  mutations,
  getters,
  modules:{
    a:moduleA
  }
})

