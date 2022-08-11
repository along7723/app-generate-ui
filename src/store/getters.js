const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  user: state => state.user.user,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  menus: state => state.user.menus,
  buttons: state => state.user.buttons,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  dicts: state => state.dict.dicts,
  dictsState: state => state.dict.dicts_state,
  dictsExpire: state => state.dict.dicts_expire
}
export default getters
