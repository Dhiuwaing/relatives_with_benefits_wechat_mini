// pages/book/book.js
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
    const page  = this
    wx.request({
      url: `${host}/bookings`,
      method: 'GET',
      success(res) {
        const bookings = res.data;
        page.setData({
          bookings: bookings,
        });
        console.log(bookings)
      }
    })

  },

  
    //...
  
    // binded to delete button
    deleteBooking(e) {
      const data = e.currentTarget.dataset;
      console.log(data)
      // make a DELETE request
      wx.request({
        url: `http://localhost:3000/api/v1/bookings/${data.id}`,
        method: 'DELETE',
        success() {
          // redirect to index page when done
          wx.reLaunch({
            url: '/pages/book/book'
          });
        }
      });
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