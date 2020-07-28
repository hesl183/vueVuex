<template>
  <div class="home">
    <h4>vuex状态管理:</h4>
    <p>{{count}}</p>
    <button @click="count++"> + </button>
    <button @click="count--"> - </button>
    <About :counts="count"/>
    <h5>计算属性computed:</h5>
    <h6>计算平方:{{power}}</h6>
    <h6>返回分数大于80:{{moreScore}}</h6>
  </div>
</template>

<script>
  import About from "./About";
export default {
  name: 'Home',
  data(){
    return {
      count: 0
    }
  },
  components:{
    About
  },
  computed:{
    power(){
      let powerParm = this.$store.state.countVuex
      return  this.$store.state.countVuex
    }
  },
  moreScore(){
    return this.$store.state.subjects.filter(s => s.score>=80)
  }
}
</script>
