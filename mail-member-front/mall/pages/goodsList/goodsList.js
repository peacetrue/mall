const app = getApp()

Page({
    data: {
        goods: [],
    },
    onLoad: function () {
        console.info("初始化商品列表页", app);
        tt.request({
            url: `${app.data.baseUrl}/goods`,
            success: (res) => {
                console.info('取得商品信息:', res.data.length);
                this.setData({goods: res.data});
            }
        });
    },
    previewCover(goods) {
        console.info('预览商品：', goods);
        tt.previewImage({
            urls: goods.coverImageUrls, // 图片地址列表
            success: (res) => {

            }
        });
    },
    toDetail(event) {
        const index = event.currentTarget.dataset.index;
        const goods = this.data.goods[index];
        console.info('跳转商品详情页：', goods);
        tt.navigateTo({
            url: `/pages/goodsDetail/goodsDetail?id=${goods.id}`
        });
    }
});
