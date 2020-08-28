<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <router-link :to="{name:'hi1', params:{name: 'hi111'}}">hi 1</router-link>
      <span style="display:inline-block; width: 50px"></span>
      <router-link to='/hi/hi2'>hi 2</router-link>

      <span style="display:inline-block; width: 50px"></span>
      <router-link to='/abc'>404</router-link>
    
      
      
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
    },
    beforeRouteEnter: (to, from, next) => {
        console.log('准备进入页面')
        next()
    },
    beforeRouteLeave: (to, from, next) => {
        console.log('准备离开目标')
        next()
    }
}
</script>

<style>

</style>