import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/manage/user/query',
    method: 'get',
    params: params
  })
}

export function getUserRole(params) {
  return request({
    url: '/sys/manage/userRole/getUserRole',
    method: 'post',
    data: params
  })
}

export function addUserRole(params) {
  const ids = param2Url(params)
  return request({
    url: '/sys/manage/userRole/addUserRole' + ids,
    method: 'get'
  })
}

export function delUserRole(params) {
  const ids = param2Url(params)
  return request({
    url: '/sys/manage/userRole/delUserRole' + ids,
    method: 'get'
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
