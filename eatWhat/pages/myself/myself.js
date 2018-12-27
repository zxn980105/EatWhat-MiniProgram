//个人中心

//获取数据
var myselfData = require('../../data/myself_data.js')

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    hasUserInfo: false
  },
  onLoad: function() {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })

    //假装是从服务器中获得的数据
    this.setData({
      myself_key: myselfData.myselfList
    });

  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  }
})