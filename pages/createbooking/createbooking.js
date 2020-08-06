// pages/createbooking/createbooking.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  submit: function(event) {
    let name = event.detail.value.name
    let gender = event.detail.value.gender
    let description = event.detail.value.description
    let location = event.detail.value.location

    let host = {
      name: name,
      gender: gender,
      description: description,
      location: location
    }
    wx.request({
      url: `http://localhost:3000/api/v1/hosts`,
      method: 'POST',
      data: host,
      success(res) {
        console.log(res)
      }
    })
  },
  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

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