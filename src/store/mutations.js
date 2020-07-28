import Vue from "vue";
import {INSCREMENT} from "../components/constType";

export default {
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
}
