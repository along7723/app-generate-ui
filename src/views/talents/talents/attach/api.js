import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/attach/query',
    params: params,
    method: 'get'

  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/attach/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/attach/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/attach/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/attach/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/attach/delBatch',
    method: 'post',
    data: params
  })
}

