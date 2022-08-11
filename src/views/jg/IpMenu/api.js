import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/jg/IpMenu/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/jg/IpMenu/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/jg/IpMenu/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/jg/IpMenu/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/jg/IpMenu/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/jg/IpMenu/delBatch',
    method: 'post',
    data: params
  })
}
