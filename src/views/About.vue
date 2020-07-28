<template>
  <div>
    <h4>多个组件间共享数据: 实现模式--单例</h4>
    <h5>使用场景: </h5>
    <ul>
      <li>用户登录消息: username, userId,cookie,session等数据</li>
      <li>登录地址</li>
    </ul>
<!--    <p>父子组件间的传递{{counts}}</p>-->
<!--    <button @click="counts++"> + </button>-->
<!--    <button @click="counts&#45;&#45;"> - </button>-->
<!--    <h5>vuex共享的变量$store获取变量: {{$store.state.countVuex}}</h5>-->
<!--    <button @click="add"> + </button>-->
<!--    <button @click="sub"> - </button>-->
<!--    <h4>mutations传递参数:{{$store.state.countVuex}}</h4>-->
<!--    <button @click="addCount(5)">+5</button>-->
<!--    <button @click="addSubject">添加科目</button>-->
    <button @click="updateInfo">updateInfo</button>
    <h4>{{$store.state.info}}</h4>
<!--    <h5>vuex的getters: </h5>-->
<!--    <h6>计算平方:{{$store.getters.power}}</h6>-->
<!--    <h6>过滤score大于80:{{$store.getters.moreScore}}</h6>-->
<!--    <h6>统计score大于80的个数:{{$store.getters.moreScoreLength}}</h6>-->
<!--    <input type="number" v-model="score">-->
<!--    <h4>过滤大于输入score:{{$store.getters.moreAge(score)}}</h4>-->
        <h4>modules:有多个模块时,分开写,最终注册到store里</h4>
        <h5>{{$store.state.a.name}}</h5>
        <button @click="moduleUpdateName">更新module</button>
        <h6>{{$store.getters.fullName1}}</h6>
        <h6>{{$store.getters.fullName2}}</h6>
        <h6>{{$store.getters.fullName3}}</h6>
        <button @click="asyncUpdateName">异步修改</button>
  </div>
</template>
<script>
  import {INSCREMENT} from "../components/constType";

  export default {
    methods:{
      asyncUpdateName(){
        this.$store.dispatch('modUpdateName')
      },
      moduleUpdateName(){
        this.$store.commit('updateName','lisi')
      },
      updateInfo(){
        //1.mutations
        // this.$store.commit('mUpdateInfo')
        //2.actions: dispatch提交,对象参数
        //2.1对象方式传递参数
        // this.$store.dispatch('aUpdateInfo',{
        //   message: 'actions通过dispatch去调用mutations修改state',
        //   success:()=>{
        //     console.log("已经异步调用完成")
        //   }
        // })
        //2.2
        const info = '我是携带的信息'
        this.$store
          .dispatch('aUpdateInfo',info)
          .then(res =>{
            console.log(res)
          })
      },
      constMethod(){
        this.$store.commit(INSCREMENT)
      },
      addCount(count){
        //1.普通方式提交
        // return this.$store.commit('addNumber',count)
        //2.type风格提交: 对象方式传递
        return this.$store.commit({
          type:'addNumber',
          count: count
        })
      },
      addSubject(){
        const subject = {id:106,name:'go',score: 66}
        return this.$store.commit('addSubjects',subject)
      },
      add(){
        // 调用vuex里面的mutations里面的increment方法
        this.$store.commit('increment')
      },
      sub(){
        this.$store.commit('decrement')
      },

    },
    name: "About",
    data(){
      return{
        score: 60,
      }
    },
    props:{
      counts:{
        type: Number,
        default: 0
      }
    },

  }
</script>

<style scoped>

</style>
