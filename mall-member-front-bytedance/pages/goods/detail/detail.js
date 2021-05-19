const app = getApp()
console.info("应用信息: ", app);

Page({
    data: {
        goods: {},
        goodsParams: {show: false},
        order: {goodsCount: 1}
    },
    onLoad: function (options) {
        console.info("初始化商品详情页", options);
        options.id = options.id || 30;
        tt.request({
            url: `${app.data.baseUrl}/goods/${options.id}`,
            success: (res) => {
                console.info('取得商品信息:', res.data);
                this.setData({goods: res.data});
            }
        });
    },
    submitOrder(event) {
        console.info("提交订单:", event);
        if (!this.data.goodsParams.show) {
            this.setData({goodsParams: {show: true}});
            return;
        }

        console.info("跳转订单详情页:");
        tt.navigateTo({
            url: `/pages/order/detail/detail` // 指定页面的url
        });
    }
});
