import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'
// import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // global css
import 'font-awesome/css/font-awesome.min.css'

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters
import '@/utils/watermark'

/**
 * 模拟数据
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // , // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})
import vuetimeline from '@growthbunker/vuetimeline'

Vue.use(vuetimeline)

// import VueComponent from "@yichenlei/vue-component"
// Vue.use(VueComponent)

import WebSocketClient from '@/utils/websocket-client'
// 连接WebSocket服务器
WebSocketClient.getInstance.connect()
// 注册到Vue原型
Vue.prototype.$socket = WebSocketClient.getInstance

// 全局引入UUID
import UUID from 'vue-uuid'

Vue.use(UUID)

// htmlToPdf
import htmlToPdf from '@/utils/htmlToPdf.js'
// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.use(htmlToPdf)

// 打印
import Print from 'vue-print-nb'

Vue.use(Print)  //注册

// Import Froala Editor
import 'froala-editor/js/plugins.pkgd.min.js'
// Import third party plugins
import 'froala-editor/js/third_party/embedly.min'
import 'froala-editor/js/third_party/font_awesome.min'
import 'froala-editor/js/third_party/spell_checker.min'
import 'froala-editor/js/third_party/image_tui.min'
// Import Froala Editor css files.
import 'froala-editor/css/froala_editor.pkgd.min.css'

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'

Vue.use(VueFroala)

// 混入自定义核心组件
import CoreUi from '@/views/mixin/CoreUi'

Vue.mixin(CoreUi)

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/** 按钮权限-角色权限-指令**/
Vue.directive('permission', (el, binding) => {

  function hasButtonPermission(buttons, btn_permission) {
    if (!btn_permission) { // 不存在，则不需要判断
      return true
    }
    if (buttons && buttons.indexOf(btn_permission) !== -1) {
      return true
    }
    return false
  }

  function hasRolePermission(roles, role_permission) {
    if (!role_permission) { // 不存在，则不需要判断
      return true
    }
    if (roles && role_permission) {
      if (typeof (role_permission) === 'string') {
        if (roles.indexOf(role_permission) !== -1) {
          return true
        }
      } else {
        for (let i = 0; i < role_permission.length; i++) {
          if (roles.indexOf(role_permission[i]) !== -1) {
            return true
          }
        }
      }
    }
    return false
  }

  function hasPermission(el, binding) {

    const btn_permission = binding.value ? binding.value.button : null
    const role_permission = binding.value ? binding.value.role : null
    const buttons = store.getters.buttons
    const roles = store.getters.roles

    // console.log('btn_permission', btn_permission)
    // console.log('buttons', buttons)
    // console.log('role_permission', role_permission)
    // console.log('roles', roles)
    if (hasButtonPermission(buttons, btn_permission) && hasRolePermission(roles, role_permission)) {
      // 移除元素
      // el.parentNode.removeChild(el)
      // 隐藏元素
      el.style.display = ''
    } else {
      el.style.display = 'none'
    }
  }

  // console.log('hasPermission')
  hasPermission(el, binding)
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
