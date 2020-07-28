import Vue from 'vue'
import Vuex from 'vuex'
import {INSCREMENT} from "../components/constType";

Vue.use(Vuex)
const moduleA = {
  state:{
    name: '李四'
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  getters:{
    fullName1(state){// 引用自己的name
      return state.name
    },
    fullName2(state,getters){// 调用自己的fullName1
      return getters.fullName1+ '111'
    },
    fullName3(state,getters,rootState){// 引用store的count
      return getters.fullName2+ rootState.count
    },
  },
  actions:{
    modUpdateName(context){//
      // context.rootState // 根的state
      setTimeout(()=>{
        // 只能提交自己mutations
        context.commit('updateName')
      },1000)
    }
  },
  modules:{

  }
}
export default new Vuex.Store({
  modules:{
    a: moduleA
  },
  state:{
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
  },
  actions:{
    //对象方式传递
  //   aUpdateInfo(context,payload){// context相当于store
  //     setTimeout(()=>{// 模拟异步操作
  //       context.commit('mUpdateInfo')
  //       console.log(payload.message)
  //       payload.success()
  //     },1000)
  //   }
  // },
    aUpdateInfo(context,payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('mUpdateInfo')
          console.log(payload)
          resolve('异步拉取的结果')
        }, 1000)
      })
    }
    },
  mutations:{
    mUpdateInfo(state){// vue使用观察者模式
      //1添加
      //1.1非响应式: 不会添加自动刷新
      // state.subjects['class'] = 'vue学习101期'
      //1.2 响应式: push,pop,slice等等
      Vue.set(state.info,'age',20)
      //2.删除
      //2.1非响应式: delete
      // delete state.subjects.score
      // 2.2响应式:
      // Vue.delete(state.subjects,'score')// 删除所有
      // Vue.delete(state.subjects,'score')
    },
    // constMethod(){// 1.常规方式定义方法
    [INSCREMENT](){// 类型常量定义方法
      setTimeout(()=>{// 模拟异步操作
        console.log("mutations里面不能有异步操作, 异步操作在actions里面操作")
      },1000)
    },
    //1.普通方式提交
    // addNumber(state,count){
    //   state.countVuex += count
    // },
    //2.type风格提交: 对象方式接受
    addNumber(state,payload){
      state.countVuex += payload.count
    },
    increment(state){// 默认传state参数
      state.countVuex ++
    },
    decrement(state){
      state.countVuex --
    },
    addSubjects(state,newSubject){
      state.subjects.push(newSubject)
    }
  },
  getters: {//getters相当于组件里面的computed
    power(state) {// 默认添加state参数
      return state.countVuex * state.countVuex
    },
    moreScore(state) {// 返回score大于80的学生
      return state.subjects.filter(s => s.score > 80)
    },
    moreScoreLength(state, getters) {// 统计大于80的个数
      return getters.moreScore.length
    },
    moreAge(state) {
      return function (newScore) {
        return state.subjects.filter(s => s.score > newScore)
      }
      // return newScore => {state.subjects.filter(s =>s.score > newScore)}
    }
  },


})

