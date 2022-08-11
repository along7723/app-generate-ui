import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/manage/test/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/sys/manage/test/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/sys/manage/test/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/sys/manage/test/add',
    method: 'post',
    data: params,
    baseURL: 'http://127.0.0.1:81/sys'
  })
}

export function delInfo(params) {
  return request({
    url: '/sys/manage/test/del',
    method: 'get',
    params: params,
    baseURL: 'http://127.0.0.1:81/sys'
  })
}

