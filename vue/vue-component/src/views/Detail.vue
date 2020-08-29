<template>
  <div class="detail">
      <h1>Computed 计算属性</h1>

      <div class="price">
          ￥{{totalPrice}}
      </div>

      <div class="new">
          <ul>
              <li v-for="(item, index) in reverseNews" :key="index">{{item.title}}——{{item.date}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            price: 100,
            num: 4,
            news: [
                {title: '这是第一个标题', date: '2020/08/24'},
                {title: '这是第二个标题', date: '2020/08/25'},
                {title: '这是第三个标题', date: '2020/08/26'},
                {title: '这是第四个标题', date: '2020/08/27'},
            ]
        }
    },
    computed: {
        totalPrice: function() {
            return this.price * this.num
        },
        reverseNews: function() {
            let news = this.news
            return news.reverse()
        }
    }
}
</script>

<style>

</style>