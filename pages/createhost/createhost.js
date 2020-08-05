// pages/createhost/createhost.js
const app = getApp();
console.log(app.globalData.userId);

Page({

  /**
   * Page initial data
   */
  data: {

  },


  formSubmit: function(event) {
    
    let description = event.detail.value.description;
    let location = event.detail.value.location;
    let category = event.detail.value.category;
    let gender = event.detail.value.gender;
    let age = event.detail.value.age;
    let url = event.detail.value.url;
    let image_url = event.detail.value.image_url;
    let name = event.detail.value.name;
    let host = {
      user_id: app.globalData.userId,
      name: name,
      description: description,
      location: location,
      category: category,
      gender: gender,
      url: url,
      image_url: image_url,
      age: age
    }
    wx.request({
      url: `http://localhost:3000/api/v1/hosts`,
      method: 'POST',
      data: host,
      success: (res) => {
        console.log(res)
        wx.redirectTo({
        url: '/pages/index/index'
      })
    }
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