<template>
  <div class="hi">
    <p>我是hi2页面{{$route.name}}</p>
    <button @click="goBack">back</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push({path:'/abc', query:{name:'wn'}})
    }
  }
}
</script>

<style>

</style>