
//index.js
//获取应用实例
const app = getApp()
const host = app.globalData.host;

Page({
  data: {
    
  },

  onShow: function () {
    const page  = this
    console.log("index")
    wx.request({
      url: `${host}/hosts`,
      method: 'GET',
      success(res) {
        console.log('in show', res)
        const hosts = res.data;
        page.setData({
          hosts: hosts,
        });
        console.log(33, hosts)
      }, 
      fail: (res) => {
        console.log(22, res)
      }
    })
    },
    onLoad: function (options) {
      // let that = this
      // wx.authorize({
      //   scope: 'scope.userLocation',
      //     success(res){
      //       console.log(res)
      //       wx.chooseLocation({
      //         success: function(res) {
      //         console.log(res)
      //       }
      //     })
      //   },
      //   fail(err) {
      //     console.log(err)
      //   }
      // })
    },

    
  goToShow: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
  },
  data: {
    lt: "31.232065",
    lg: "121.470645",
    sc: '14',
    mk: [{
      iconPath: "/img/marker.png", // **1
      id: 0,
      latitude: 31.219614,
      longitude: 121.443877,
      width: 40,
      height: 40,
      callout: { content: "Le Wagon \n Shanghai, China", fontSize: 15, color: "#000000", padding: 10 }
    }, //add more markers here]
    ]
  },
  markertap(e) {
    console.log(e.markerId)
 },

  searchInput: function(e) {
    console.log(e)
    this.setData({
      searchKeyWord: e.detail.value
    })
  },
 
 searchForm: function(e) {
   let page = this
   let searchKeyWord = page.data.searchKeyWord
   wx.request({
    url: `http://localhost:3000/api/v1/hosts?query=${searchKeyWord}`,
    method: 'GET',
    success(res) {
      const hosts = res.data;
      page.setData({
        hosts: hosts,
      });
      console.log(hosts)
    }
  })
 },

  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
