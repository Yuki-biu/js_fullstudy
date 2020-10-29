<template>
  <h1>{{state.count}} * 2 = {{double}}</h1>
  <button @click="add">累加</button>
</template>

<script>
import { computed, reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      count: 1
    })
    const num = ref(2)
    function add() {
      state.count++
    }
    const double = computed(() => state.count * 2)

    return {
      state,
      add,
      double,
      num
    }
  }
}
</script>
