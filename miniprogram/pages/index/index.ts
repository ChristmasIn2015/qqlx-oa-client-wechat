// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
    data: {
        index: "",
    },
    onLoad() {
        // @ts-ignore
        wx.login({
            success: (res) => {
                this.setData({ index: "https://qqlx.tech/oa-client/login" + "?code=" + res.code });
            },
            fail: (e) => console.log(e),
        });
    },
});
