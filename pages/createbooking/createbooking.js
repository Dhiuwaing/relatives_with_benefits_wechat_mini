// pages/createbooking/createbooking.js
const app = getApp();
const host = app.globalData.host;

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.data.id = options.id


  },



  formSubmit: function(event) {
    let message = event.detail.value.message;
    let time = this.data.date;
    console.log(app.globalData.userId)
    let booking = {
      user_id: app.globalData.userId,
      confirmed: 0,
      message: message,
      time: time,
      host_id: this.data.id,
    };
    console.log("event.body",booking)
    wx.request({
      url: `${host}bookings`,
      method: 'POST',
      data: {booking: booking},
      success: (res) => {
        console.log('create', res)
        wx.switchTab({
        url: '/pages/book/book'
      })
    },  
      fail: (res) => {
        console.log(11, res)
      }
  })
},
    


  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
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

  }
})