import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/jg/reportMonth/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/jg/reportMonth/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/jg/reportMonth/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/jg/reportMonth/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/jg/reportMonth/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/jg/reportMonth/delBatch',
    method: 'post',
    data: params
  })
}
