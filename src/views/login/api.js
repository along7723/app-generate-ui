import request from '@/utils/request'

export function registerUser(data) {
  return request({
    url: '/sys/manage/shiro/registerUser',
    method: 'post',
    data: data
  })
}

export function checkUserAccount(data) {
  return request({
    url: '/sys/manage/shiro/checkUserAccount',
    method: 'get',
    params: data
  })
}

export function checkUserPhone(data) {
  return request({
    url: '/sys/manage/shiro/checkUserPhone',
    method: 'get',
    params: data
  })
}

export function checkUserEmail(data) {
  return request({
    url: '/sys/manage/shiro/checkUserEmail',
    method: 'get',
    params: data
  })
}

export function getSsoLoginUrl(data) {
  return request({
    url: '/sys/manage/shiro/getSsoLoginUrl',
    method: 'get',
    params: data
  })
}


