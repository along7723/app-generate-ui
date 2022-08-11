module.exports = {
  /**
   * 页面的默认标题
   */
  // title: '凡业科技低代码开发框架', // 重庆金融人才信息系统
  //  title: '研究所后台管理平台', // 重庆金融人才信息系统
  title: '重庆市金融人才管理系统',
  // title: '管理系统',
  // logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
  // @/assets/之后的路径
  logo: 'images/favicon.png',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production',
  /**
   * 消息开关
   */
  messageEnable: true,
  /**
   * sso单点登录开关
   */
  ssoEnable: true,
  // 测试环境
  ssoLogOutUrl: 'http://221.178.107.52:8085/#/logOut'
  // 生产环境
  // ssoLogOutUrl: 'http://221.178.107.52:7085/#/logOut'
}
