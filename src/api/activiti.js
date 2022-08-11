import request from '@/utils/request'

export function activitiInit(params) {
  return request({
    url: '/sys/manage/testActiviti/init',
    method: 'get',
    params: params
  })
}

export function creatLeave(params) {
  return request({
    url: '/sys/manage/testActiviti/creatLeave',
    method: 'get',
    params: params
  })
}

export function queryLeave(params) {
  return request({
    url: '/sys/manage/testActiviti/queryLeave',
    method: 'get',
    params: params
  })
}

export function agreeLeave(params) {
  return request({
    url: '/sys/manage/testActiviti/agreeLeave',
    method: 'get',
    params: params
  })
}

