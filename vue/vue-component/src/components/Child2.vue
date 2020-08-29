<template>
  <div class="child">
      child2 {{msg}}
  </div>
</template>

<script>
import bus from '@/utils/bus.js'
export default {
    data() {
        return {
            msg: ''
        }
    },
    created() {
        bus.$on('info', (val) => {
            this.msg = val
        })
    }
}
</script>

<style>

</style>