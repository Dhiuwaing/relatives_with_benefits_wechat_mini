// pages/createhost/createhost.js
const app = getApp();
console.log(app.globalData.userId);
Page({
  /**
   * Page initial data
   */
  data: {
    array: ["grandfather", "grandmother", "mother", "father", "brother", "sister"],
    array2: ["Shanghai", "Taipei", "Hong Kong", "Xi'an", "Beijing", "Tianjin", "Haerbin", "Gaoxiong", "Pingdong"],
    items: ['Woman', 'Man'],
    
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail)
    this.setData({
      index2: e.detail.value
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      gender: e.detail.value
    })
  },
  formSubmit: function(event) {
    console.log(event)
    
    let description = event.detail.value.description
    let location = this.data.index2;
    let category = this.data.index;
    let gender = event.detail.value.gender[0];
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
    console.log(host)
    wx.request({
      url: `http://localhost:3000/api/v1/hosts`,
      method: 'POST',
      data: host,
      success: (res) => {
        console.log('create', res)
        wx.switchTab({
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