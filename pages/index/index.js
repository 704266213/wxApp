//index.js

var imageUtil = require('../../utils/imageUtil.js');
// const itemListUrl = require('../../config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    resuleCode: -1,
    loadtxt: '正在加载',
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imagewidth: 0,
    imageheight: 0,
    mode: "aspectFill"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.onLoadData("https://hao.360.cn/")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onReload: function() {
    this.setData({
      resuleCode: -1
    })
    this.onLoadData("https://hao.360.cn/")
  },
  imageLoad: function(e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },


  /**
   * 用户点击右上角分享
   */
  onLoadData: function(url) {
    var self = this
    wx.request({
      url: url,
      method: 'Get', //仅为示例，并非真实的接口地址
      success: function(res) {
        console.log("===========================" + res.statusCode)
        if (res.statusCode == 200) {
          console.log(res.data)
          self.setData({
            resuleCode: 200,
            imgUrls: [
              'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
              'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
              'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
            ]
          })
        }
      },
      fail: function(res) {
        console.log("==========fail=================" + res.statusCode)
        self.setData({
          resuleCode: 1
        })
      }
    })
  },


})