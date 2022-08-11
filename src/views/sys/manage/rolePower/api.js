import request from '@/utils/request'

export function queryAllPower(params) {
  return request({
    url: '/sys/manage/role/queryAllPower',
    method: 'post',
    data: params
  })
}

export function addRoleMenu(params) {
  // const ids = param2Url(params);
  return request({
    url: '/sys/manage/role/addRoleMenu',
    method: 'post',
    data: params
  })
}

export function delRoleMenu(params) {
  // const ids = param2Url(params);
  return request({
    url: '/sys/manage/role/delRoleMenu',
    method: 'post',
    data: params
  })
}

export function addRoleResource(params) {
  // const ids = param2Url(params);
  return request({
    url: '/sys/manage/role/addRoleResource',
    method: 'post',
    data: params
  })
}

export function delRoleResource(params) {
  // const ids = param2Url(params);
  return request({
    url: '/sys/manage/role/delRoleResource',
    method: 'post',
    data: params
  })
}

function param2Url(params) {
  let url = ''
  if (params) {
    url += '?'
    for (const p in params) {
      if (params[p]) {
        if (Array.isArray(params[p])) {
          for (const j in params[p]) {
            url += p + '=' + params[p][j] + '&'
          }
        } else {
          url += p + '=' + params[p] + '&'
        }
      }
    }
  }

  return url
}
