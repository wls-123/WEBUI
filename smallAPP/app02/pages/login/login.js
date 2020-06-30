Page({
  data: {
    login_form:{},
    // username:'',
    // password:''
  },

  onLoad: function (options) {

  },
  nameHandler(e){
    this.setData({
      'login_form.username':e.detail.value
    })
  },
  pwdHandler(e){
    this.setData({
      'login_form.password':e.detail.value
    })
  },
  loginHandler(){
    if(this.data.login_form.username === '张三' && this.data.login_form.password === '123321'){
      wx.navigateTo({
        url: '../home/home'
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请输入正确的用户名密码',
        showCancel:false,
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }
})