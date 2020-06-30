// pages/home/home.js
const util = require('../../utils/util.js')
Page({
  data: {
    login_form:{
      username:'张三',
      password:'123321'
    },
    imgArr:[{
      id:1,
      url:'http://stock.591hx.com/images/2020-03-02/%E5%9B%BE%E7%89%879.jpg'
    },{
      id:2,
      url:'http://stock.591hx.com/images/2020-03-02/%E5%9B%BE%E7%89%879.jpg'
    },{
      id:3,
      url:'http://stock.591hx.com/images/2020-03-02/%E5%9B%BE%E7%89%879.jpg'
    }],
    articles:[{
      id:1,
      userImg:'http://stock.591hx.com/images/2020-03-02/%E5%9B%BE%E7%89%879.jpg',
      username:'张三',
      title:'娱乐',
      content:'更好解决很多覆盖人口高峰的人给海天教育集团更好解决很多覆盖人口高峰的人给海天教育集团更好解决很多覆盖人口高峰的人给海天教育集团更好解决很多覆盖人口高峰的人给海天教育集团',
      articleImg:'http://stock.591hx.com/images/2020-03-02/%E5%9B%BE%E7%89%879.jpg',
      publishTime:util.formatTime(new Date()),
      likeNum:5
    },{
      id:2,
      userImg:'http://stock.591hx.com/images/2020-03-02/%E5%9B%BE%E7%89%879.jpg',
      username:'李四',
      title:'体育',
      content:'更好解决很多覆盖人口高峰的人给海天教育集团更好解决很多覆盖人口高峰的人给海天教育集团',
      articleImg:'http://stock.591hx.com/images/2020-03-02/%E5%9B%BE%E7%89%879.jpg',
      publishTime:util.formatTime(new Date()),
      likeNum:15
    },{
      id:3,
      userImg:'http://stock.591hx.com/images/2020-03-02/%E5%9B%BE%E7%89%879.jpg',
      username:'张三',
      title:'新闻',
      content:'更好解决很多覆盖人口高峰的人给海天教育集团更好解决很多覆盖人口高峰的人给海天教育集团',
      articleImg:'http://stock.591hx.com/images/2020-03-02/%E5%9B%BE%E7%89%879.jpg',
      publishTime:util.formatTime(new Date()),
      likeNum:10
    },{
      id:4,
      userImg:'http://stock.591hx.com/images/2020-03-02/%E5%9B%BE%E7%89%879.jpg',
      username:'张三',
      title:'政治',
      content:'更好解决很多覆盖人口高峰的人给海天教育集团更好解决很多覆盖人口高峰的人给海天教育集团',
      articleImg:'http://stock.591hx.com/images/2020-03-02/%E5%9B%BE%E7%89%879.jpg',
      publishTime:util.formatTime(new Date()),
      likeNum:5
    }]
  },
  innerHandler(){
    console.log('inner')
  },
  toIndex(event){
    // wx.navigateTo({
    //   url: '../index/index?msg='+this.data.msg,
    // })
    console.log(event.target,'---')
    // wx.navigateTo({
    //   url: '../index/index?login_form='+JSON.stringify(this.data.login_form),
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})