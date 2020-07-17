// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLeft: true,
    autoplay: true,
    indicatorDots: true,
    interval: 3000,
    duration: 800,
    circular: true,
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594982007082&di=54c689fb2ef27d19a463ee6a01074b35&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0724%2F970AF64D5A0F26F9A969A3050783210856AABAD6_size102_w1080_h633.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594982007082&di=cd28354e8aeb90019fe142300da5f9d2&imgtype=0&src=http%3A%2F%2Fi2.wp.com%2Fimg.char.tw%2Fuploads%2F20180929213252_84.jpg%3Fresize%3D1280%2C720',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2068911901,966202251&fm=15&gp=0.jpg'
    ],
    movieList: [
      {
        isShow: 0,
        name: "第一次的离别",
        imgUrl: "https://p1.meituan.net/moviemachine/4ea68a0de8949d99fd7ff426b84d3c381761878.jpg@1l_1e_1c_128w_180h",
        actor: "艾萨·亚森,凯丽比努尔·热合米图力,艾力乃孜·热合米图力",
        time: "2020-07-20",
        wantSee: '9745'
      },
      {
        isShow: 1,
        name: "璀璨薪火3D",
        imgUrl: "https://p0.meituan.net/moviemachine/1b6ca45db703c6df1c1ad8412ad0639a633073.jpg@1l_1e_1c_128w_180h",
        actor: "",
        time: "2020-07-20",
        wantSee: '1248'
      }
    ]
  },

  //function tabChangeWaiting() {}
  tabChangeWaiting() {
    // console.log('点击了即将上映')
    this.setData({
      isLeft: false
    })
  },

  tabChangeHot() {
    // console.log('点击了正在热映')
    this.setData({
      isLeft: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }


})