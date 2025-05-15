export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/cart/index',
    'pages/category/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: false,
    color: '#000000',
    selectedColor: '#A4452A',
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "",
        selectedIconPath: "",
        text: "首页"
      },
      {
        pagePath: "pages/category/index",
        iconPath: "",
        selectedIconPath: "",
        text: "分类 "
      },
      {
        pagePath: "pages/cart/index",
        iconPath: "",
        selectedIconPath: "",
        text: "购物车"
      },
      {
        pagePath: "pages/my/index",
        iconPath: "",
        selectedIconPath: "",
        text: "我的"
      },
    ]
  }
})
