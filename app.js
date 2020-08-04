//app.js
App({
  onLaunch: function () {
    const host = 'http://localhost:3000/'
    console.log('beginning login')
    wx.login({
      success: (res) => {
        console.log('code', res)
      // insert next code here
      wx.request({
        url: host + 'login',
        method: 'post',
        data: {
          code: res.code
        },
      // insert next code here
      success: (res) => {
        console.log('login res', res)
        this.globalData.userId = res.data.userId
      }
      })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})