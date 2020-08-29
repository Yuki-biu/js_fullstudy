<template>
  <div class="child">
      child1
      <span @click="sendMsg">传值给2</span>
  </div>
</template>

<script>
import bus from '@/utils/bus.js'
export default {
    data() {
        return {
            msg: '我是child1中的msg'
        }
    },
    methods: {
        sendMsg() {
            bus.$emit('info', this.msg)
        }
    }
}
</script>

<style>

</style>