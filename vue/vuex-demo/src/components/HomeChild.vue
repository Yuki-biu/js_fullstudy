<template>
  <div class="home-child">
      <p>首页的子组件</p>
      <hr />
      <h3>{{count}}</h3>
      <h3>{{count100}}</h3>
      <div class="btn">
        <button @click="addAction">+</button>
        <button @click="reduce">-</button>
      </div>
  </div>
</template>

<script>
import store from '@/vuex/store.js'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      msg: 'Hello world'
    }
  },
  store,
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   }
  // },
  // computed: mapState({
  //   count:state => state.count
  // }),
  // computed: mapState(['count']),
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count100'])
  },
  // methods: {
  //   add() {
  //     // this.$store.state.count++
  //     this.$store.commit('add', 5)
  //   },
  //   reduce() {
  //     this.$store.commit('reduce')
  //     // this.$store.state.count--
  //     }
  // }
  // methods: mapMutations(['add', 'reduce'])
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction'])
  }
}
</script>

<style>

</style>