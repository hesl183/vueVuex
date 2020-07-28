export default {//getters相当于组件里面的computed
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
}
