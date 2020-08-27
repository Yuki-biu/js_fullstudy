<template>
  <div class="user">
      <p>{{userName}}</p>
      <!-- <button @click="handle">按钮</button> -->
      <button @click="changePet">新宠物</button>
  </div>
</template>

<script>
export default {
    props: ['userName'],
    data() {
        return {
            name: '皮皮',
            title: 'User Title'
        }
    },
    methods: {
        handle() {
            // console.log('okk')
            this.$emit('titleChange', this.title)
        },
        changePet() {
            // console.log('okk')
            this.$emit('petChange', '小黑')
        }
    }
}
</script>

<style>

</style>