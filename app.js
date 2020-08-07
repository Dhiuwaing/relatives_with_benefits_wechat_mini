//app.js
App({
  onLaunch: function () {
    const host = 'http://localhost:3000/'
    wx.login({
      success: (res) => {
        console.log('code', res)
      // insert next code here
      wx.request({
        url: this.globalData.host + '/login',
        method: 'post',
        data: {
          code: res.code
        },
      // insert next code here
      success: (res) => {
      // console.log('login res', res)
        this.globalData.userId = res.data.userId
      }
      })
      }
    })
  },
  globalData: {
    userInfo: null,
    host: "http://localhost:3000/api/v1"
    // host: "http://relatives-with-benefits.herokuapp.com/api/v1"
  },
})