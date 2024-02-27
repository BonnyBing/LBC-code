export default defineAppConfig({
  pages: [
    'pages/home/home',
    'pages/shop/shop',
    'pages/car/car',
    'pages/my/my',
  ],
  "subpackages":[
    {
      "root":"subpackages",
      "name":"分包1",
      "pages":[
        "pages/login/login"
      ]
    }
  ],
  tabBar:{
    list:[
      {
        iconPath:'assets/font/tar/index.png',
        selectedIconPath:'assets/font/tar_on/index_on.png',
        pagePath:'pages/home/home',
        text:'首页',
      },
      {
        iconPath:'assets/font/tar/shop.png',
        selectedIconPath:'assets/font/tar_on/shop_on.png',
        pagePath:'pages/shop/shop',
        text:'商城',
      },
      {
        iconPath:'assets/font/tar/car.png',
        selectedIconPath:'assets/font/tar_on/car_on.png',
        pagePath:'pages/car/car',
        text:'购物车',
      },
      {
        iconPath:'assets/font/tar/my.png',
        selectedIconPath:'assets/font/tar_on/my_on.png',
        pagePath:'pages/my/my',
        text:'我的',
      },
    ],
    color: '#bfbfbf',
    selectedColor: '#000',
    backgroundColor: '#fff',
    borderStyle: 'white',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
