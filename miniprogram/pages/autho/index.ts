const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'


Page({
  data: {
    avator: defaultAvatarUrl,
    nickname: '',
    phone: ''
  },
  onLoad(options) {
      const { avator, nickname, phone } = options
      console.log(nickname, phone)
      this.setData({ 
        avator: avator || defaultAvatarUrl, 
        nickname: nickname || '-', 
        phone: phone || ''
      })
  },
  pickAvator(event: {detail: {avatarUrl: string}}) {
    const { avatarUrl } = event.detail 
    this.setData({ avator: avatarUrl })
  },
  pickPhone(event: {detail: {code: string}}){
      const {code } = event.detail
      const url = `/pages/index/index?clientPhoneCode=${code}&nickname=${this.data.nickname}&avator=${this.data.avator}`
      wx.reLaunch({url})
  }
})
