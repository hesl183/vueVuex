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

export default {
  a: moduleA
}
