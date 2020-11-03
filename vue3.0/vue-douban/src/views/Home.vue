<template>
  <div class="home">
    <v-header title="豆瓣电影评分" :leftArrow="false"></v-header>
    <Movie :movie="{image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604383753481&di=34d6d8582a0a0f8a243f6d39a958952e&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2Fb%2F74%2Ff7fb1340886.jpg', title: '金刚川', rating: {stars:[1,1,1,1,0], score: 6.5}}"></Movie>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Movie from '@/components/Movie.vue'
export default {
  name: 'Home',
  components: {
    'v-header': Header,
    Movie
  }
}
</script>
