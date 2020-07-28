
export default {
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
}
