// pages/show/show.js

const app = getApp()
const host = app.globalData.host;
Page({

  /**
   * Page initial data
   */
  data: {

  },

  goToBook: function (e) {
    let id = e.currentTarget.dataset.id
    console.log(id)
    wx.switchTab({
      url: `/pages/book/book?hostId=${id}`,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page  = this
    let id = options.id
    wx.request({
      url: `${host}/hosts/${id}`,
      method: 'GET',
      success(res) {
        const host = res.data;
        page.setData({
          host: host,
        });
      
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {


  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  // onLoad: function (options) {
  //   const that = this
  //   wx.getLocation({
  //     type: 'wgs84', // **1
  //     success: function(res) {
  //       const latitude = res.latitude
  //       const longitude = res.longitude
  //       that.setData({latitude, longitude})
  //     }
  //   })
  // },
  
})