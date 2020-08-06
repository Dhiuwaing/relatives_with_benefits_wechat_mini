// pages/createbooking/createbooking.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  formSubmit: function(event) {
    let name = event.detail.value.name
    let description = event.detail.value.description
    let location = event.detail.value.location

    app.globalData.hosts.unshift({location, description, name})

    wx.switchTab({
      url: 'pages/book/book',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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

  }
})