const app = getApp()

Page({
    data: {
        goods: [],
    },
    onLoad: function () {
        console.info("初始化商品列表页", app);
        this.loadGoods();
    },
    loadGoods(params) {
        params = { page: 0, ...params };
        tt.request({
            url: `${app.data.baseUrl}/goods`,
            data: params,
            success: (res) => {
                console.info("取得商品信息:", res.data);
                this.setData({ goods: res.data.content });
            }
        });
    },
    search(event) {
        const value = event.detail.value;
        this.loadGoods({ name: value });
    },
    previewCover(event) {
        // const index = event.currentTarget.dataset.index;
        // const goods = this.data.goods[index];
        // console.info('预览商品：', goods);
        // tt.previewImage({
        //     urls: goods.coverImageUrls, // 图片地址列表
        //     success: (res) => {

        //     }
        // });
    },
    toDetail(event) {
        const index = event.currentTarget.dataset.index;
        const goods = this.data.goods[index];
        console.info('跳转商品详情页：', goods);
        tt.navigateTo({
            url: `/pages/goods/detail/detail?id=${goods.id}`
        });
    }
});
