import { asyncRoutes, constantRoutes } from '@/router'
import store from '@/store'
import Layout from '@/layout'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
// function hasPermission(roles, route) {
//   if (route.meta && route.meta.roles) {
//     return roles.some(role => route.meta.roles.includes(role))
//   } else {
//     return true
//   }
// }

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, isFirstLevel) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }

    if (tmp.children) {
      tmp.children = filterAsyncRoutes(tmp.children, false)
    } else {
      delete tmp.children
    }

    // 处理path路径问题
    if (isFirstLevel) {
      if (!tmp.path.startsWith('http') && tmp.path.charAt(0) !== '/') {
        tmp.path = '/' + tmp.path
      }
    } else {
      if (tmp.path.charAt(0) === '/') {
        tmp.path = tmp.path.slice(1)
      }
    }

    tmp.hidden = tmp.isHidden === '1'

    // tmp.name = "name_"+tmp.id
    tmp.name = tmp.name || tmp.path
    if (tmp.name.charAt(0) === '/') {
      tmp.name = tmp.name.slice(1)
    }
    tmp.meta = {
      title: tmp.title,
      icon: tmp.icon,
      affix: tmp.affix === '1',
      // noCache: false,
      noCache: tmp.noKeepAlive === '1',
      activeMenu: tmp.activeMenuPath
    }
    tmp.activeMenu = tmp.activeMenuPath

    // console.log(typeof tmp.component)
    let component = tmp.component
    if (typeof tmp.component === 'function') {
      // 内部静态路由
    } else if (tmp.component === '#') {
      // 父菜单
      if (isFirstLevel) {
        tmp.component = Layout
      } else {
        tmp.component = (resolve) => require([`@/views/sys/emptyMenu`], resolve)
      }
    } else {
      if (component.charAt(0) === '/') {
        component = component.slice(1)
      }
      // tmp.component = (resolve) => require([`@/views/${component}`], resolve)

      if (isFirstLevel && tmp.path.indexOf('_blank') === -1) {
        // console.log('component:', component)
        // 解决一级菜单，直接访问具体页面
        tmp.component = Layout
        // 自己设置为自己的子菜单
        const childComponent = (resolve) => require([`@/views/${component}`], resolve)
        tmp.children = [{
          path: tmp.path,
          component: childComponent,
          name: (tmp.name || tmp.path),
          meta: { title: tmp.title, icon: tmp.icon, affix: tmp.affix === '1' }
        }]

        tmp.path = tmp.path + 'Auto'
        tmp.name = (tmp.name || tmp.path) + 'Auto'
      } else {
        tmp.component = (resolve) => require([`@/views/${component}`], resolve)
      }
    }

    // console.log('tmp.activeMenuPath', tmp.activeMenuPath)
    delete tmp.activeMenuPath
    delete tmp.affix
    delete tmp.createTime
    delete tmp.createUser
    delete tmp.hasChild
    delete tmp.icon
    delete tmp.id
    delete tmp.parentId
    delete tmp.noKeepAlive
    delete tmp.sort
    delete tmp.source
    delete tmp.state
    delete tmp.title
    delete tmp.type

    res.push(tmp)
  })

  // 页面不存在时跳转404页面
  res.push({ path: '*', redirect: '/404', hidden: true })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  // 生成动态路由
  generateRoutes({ commit }, roles) {
    return new Promise((resolve) => {
      let accessedRoutes

      accessedRoutes = filterAsyncRoutes(store.getters.menus, true)

      // console.log('accessedRoutes', accessedRoutes)

      commit('SET_ROUTES', accessedRoutes)

      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
