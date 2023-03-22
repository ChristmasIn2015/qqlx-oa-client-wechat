// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
    data: {
        index: "",
    },
    async onLoad(options) {
        const info = await wx.login();
        let url = "http://localhost:3000/oa-client/login"
        url += `?code=${info.code}`

        options.avator && (url += `&avator=${options.avator}`)
        options.nickname && (url += `&nickname=${options.nickname}`)
        options.clientPhoneCode && (url += `&clientPhoneCode=${options.clientPhoneCode}`)

        this.setData({ index:  url });
    },
});
