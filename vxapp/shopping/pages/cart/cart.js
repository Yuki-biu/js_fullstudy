// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    totalPrice: 0,
    isAllSelected: true
  },

  // 计算totalPrice
  sum: function () {
    let carts = this.data.carts
    let total = 0
    for(let i = 0; i < carts.length; i ++) {
      if(carts[i].selected) {
        total += carts[i].num * carts[i].price
      }
    }
    this.setData({
      carts: carts,
      totalPrice: total.toFixed(2)
    })
  },

  // 判断是否全选
  selectAllCarts: function() {
    let carts = this.data.carts
    let selected = true
    for( let i = 0; i < carts.length; i++){
      if(carts[i] != selected){
        this.setData({
          isAllSelected: false
        })
        break;
      }
      this.setData({
        isAllSelected: true
      })
    }
  },

  // 点击 - 按钮
  downCount: function (e) {
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    let num = carts[index].num
    if(num <= 1) {
      wx.showToast({
        title: '已达商品最小数量',
        icon: 'none',
        duration: 1500,
        mask: false
      });
    } else {
      num = num - 1
      carts[index].num = num
      this.setData({
        carts: carts
      })
      this.sum()
    }
  },

  // 点击 + 按钮
  addCount: function (e) {
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    let num = carts[index].num
    num = num + 1
    carts[index].num = num
    this.setData({
      carts: carts
    })
    this.sum()
  },

  // 删除该商品
  deleteCart: function (e) {
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    carts.splice(index, 1)
    this.setData({
      carts: carts
    })
    this.sum()
  },

  // 单个选择
  changeSelect: function (e) {
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    const selected = carts[index].selected
    carts[index].selected = !selected //改变selected
    this.setData({
      carts: carts
    })
    this.sum()
    this.selectAllCarts()
  },

  // 全选
  changeSelectAll: function (e) {
    let isAllSelected = this.data.isAllSelected
    isAllSelected = !isAllSelected
    let carts = this.data.carts
    for( let i = 0; i < carts.length; i++) {
      carts[i].selected = isAllSelected
    }
    this.setData({
      isAllSelected: isAllSelected,
      carts: carts
    })
    this.sum()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
    setTimeout(() => {
      this.setData({
        carts:[
          { id: 1, title: '新鲜芹菜 半斤', image: '../../image/s5.png', num: 4, price: 0.01, selected: true },
          { id: 2, title: '素米 375g', image: '../../image/s6.png', num: 1, price: 0.03, selected: true }
        ]
      })
      this.sum()
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
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