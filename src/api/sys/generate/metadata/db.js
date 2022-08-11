import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/generate/db/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/sys/generate/db/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/sys/generate/db/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/sys/generate/db/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/sys/generate/db/del',
    method: 'get',
    params: params
  })
}

