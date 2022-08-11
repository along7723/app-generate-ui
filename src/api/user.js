import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/manage/shiro/login',
    method: 'get',
    params: data
  })
}

export function ssologin(data) {
  return request({
    url: '/sys/manage/shiro/ssologin',
    method: 'get',
    params: data
  })
}

export function getInfo(token) {
  return request({
    url: '/sys/manage/shiro/getUserInfo',
    method: 'get',
    params: { token }
  })
}

export function getMenus() {
  return request({
    url: '/sys/manage/shiro/getUserMenus',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/sys/manage/shiro/logout',
    method: 'post'
  })
}
