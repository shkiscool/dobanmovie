const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(options)
  const _this = this
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      data: { apikey:'0df993c66c0c636e29ecbb5344252a4a'},
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          list: res.data.subjects,
          title: res.data.title
        })
      }
    })
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