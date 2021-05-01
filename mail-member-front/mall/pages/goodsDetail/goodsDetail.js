const app = getApp()
console.info("应用信息: ", app);

Page({
  data: {
    goods: {},
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500
  },
  onLoad: function (options) {
    console.info("初始化商品详情页", options);
    tt.request({
      url: `${app.data.baseUrl}/goods/${options.id}`,
      success: (res) => {
        console.info('取得商品信息:', res.data);
        this.setData({ goods: res.data });
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
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    });
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    });
  },
  changeCircular: function (e) {
    this.setData({
      circular: !this.data.circular
    });
  },
  changeVertical: function (e) {
    this.setData({
      vertical: !this.data.vertical
    });
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    });
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    });
  },
  animationFinish(e) {
    console.log(e.detail);
  },
  transition(e) {
    console.log(e.detail);
  }
});
