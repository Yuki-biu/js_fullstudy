// component/ratingStar/ratingStar.js
const STAR_ON = "/assets/imgs/rating_star_small_on.png"
const STAR_OFF = "/assets/imgs/rating_star_small_off.png"
const STAR_HALF = "/assets/imgs/rating_star_small_half.png"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      observer: function (newVal, oldVal, path) {
        let stars = [STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF]
        if (newVal > 0) {
          newVal = newVal / 10
          let floor = Math.floor(newVal)
          if (floor != newVal) {
            stars[floor] = STAR_HALF
          }
          for (let i = 0; i < floor; i++) {
            stars[i] = STAR_ON
          }
        }
        this.setData({
          stars
        })
      }
    },
    iconSize: {
      type: String,
      value: '26rpx'
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    stars: [STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF]
    // starSrc:[],
    // fullUrl: "../../assets/imgs/rating_star_small_on.png",
    // halfUrl: "../../assets/imgs/rating_star_small_half.png",
    // noUrl: "../../assets/imgs/rating_star_small_off.png"
  },

  // lifetimes: {
  //   getStar: function () {
  //     let score = this.data.score
  //     console.log(score)
  //     let starSrc = this.data.starSrc
  //     for(let i = 0; i < 5; i++ ){
  //       if (score >= 0.6) {
  //         starSrc.push(this.data.fullUrl)
  //         score -= 1
  //       } else if (score >= 0.2) {
  //         starSrc.push(this.data.halfUrl)
  //         score -= 1
  //       } else {
  //         starSrc.push(this.data.noUrl)
  //         score -= 1
  //       }
  //     }
  //     console.log(starSrc)
  //     this.setData(this.data)
  //   }
  // },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
