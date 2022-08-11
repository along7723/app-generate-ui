import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect','/sso-login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  console.log('-----href',window.location.href)
  console.log('-----from',from)
  console.log('-----to',to)

  console.log('白名单',whiteList)
  if (whiteList.indexOf(to.path) !== -1) {
    // in the free login whitelist, go directly
    console.log('白名单中...')
    next()
    NProgress.done()
    return
  }
  console.log('白名单之外...')

  // sso 登录
  // if(from.path=="/"){
  //   const ssoToken=window.location.href.match(/token=(.*)#/)[1];
  //   console.log('-----ssoToken',ssoToken)
  //   store.dispatch('user/login', {ssoToken})
  //         .then(() => {
  //           console.log('-----ssoToken登录成功')
  //         })
  //         .catch(() => {
  //           console.log('-----ssoToken登录失败')
  //         })
  // }

  // set page myTitle
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    } else {

      // 判断用户是否存在
      // determine whether the user has obtained his permission roles through getInfo
      // const hasRoles = store.getters.roles && store.getters.roles.length > 0
      const user = store.getters.user
      if (user) {//存在用户信息就放行
        next()
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          const { roles } = await store.dispatch('user/getInfo')

          // console.log('roles', roles)
          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          // const accessRoutes = store.getters.menus;
          // console.log('menus length:', accessRoutes.length)
          // console.log("accessRoutes:",accessRoutes)

          // dynamically add accessible routes
          router.addRoutes(accessRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
