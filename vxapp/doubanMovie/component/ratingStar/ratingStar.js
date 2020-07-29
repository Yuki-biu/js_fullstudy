// component/ratingStar/ratingStar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      value: 0
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    starSrc:[],
    fullUrl: "/assets/imgs/rating_star_small_on.png",
    halfUrl: "/assets/imgs/rating_star_small_half.png",
    noUrl: "/assets/imgs/rating_star_small_off.png"
  },

  lifetimes: {
    getStar: function () {
      let score = this.data.score
      console.log(score)
      let starSrc = []
      for(let i = 0; i < 5; i++ ){
        if (score >= 0.6) {
          starSrc.push(this.data.fullUrl)
          score -= 1
        } else if (score >= 0.2) {
          starSrc.push(this.data.halfUrl)
          score -= 1
        } else {
          starSrc.push(this.data.noUrl)
          score -= 1
        }
      }
      console.log(starSrc)
      this.setData({
        starSrc
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
