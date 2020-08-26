<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <router-link :to="{name:'hi1', params:{name: 'hi111'}}">hi 1</router-link>
      <span style="display:inline-block; width: 50px"></span>
      <router-link to='/hi/hi2'>hi 2</router-link>
    
      <!-- 有组件引入就需要路由入口 -->
      <router-view />
  </div>
</template>

<script>
export default {
    name: 'hi',
    data () {
        return{
            msg: 'Hi, I am wn'
        }
    }
}
</script>

<style>

</style>