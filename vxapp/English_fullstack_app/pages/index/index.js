//index.js
//获取应用实例
const app = getApp()
const cars = []

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHidden: false,
    articleList: [

    ],
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    setTimeout(() => {
      this.setData({
        articleList: [{
          date: '6月27日',
          articles: [{
            id: 0,
            title: 'title1',
            pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595245633242&di=c3cd3c00bb2b3806a75d8ce6e56aeea6&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F18%2F20180818173404_ZncUv.thumb.400_0.jpeg'
          },{
            id: 1,
            title: 'title2',
            pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595246067065&di=5b381ff0705b25e9ae3d7d5224460a6c&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F18%2F20180818172640_GENu2.thumb.400_0.jpeg'
          }]
        }],articleList: [{
          date: '6月26日',
          articles: [{
            id: 0,
            title: 'title1',
            pic: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1866166103,130707979&fm=15&gp=0.jpg'
          },{
            id: 1,
            title: 'title2',
            pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595245633242&di=c3cd3c00bb2b3806a75d8ce6e56aeea6&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F18%2F20180818173404_ZncUv.thumb.400_0.jpeg'
          }]
        }],
        isHidden: true
      })
    },2000)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
