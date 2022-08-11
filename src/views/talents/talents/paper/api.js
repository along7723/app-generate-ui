import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/paper/query',
    params: params,
    method: 'get'

  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/paper/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/paper/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/paper/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/paper/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/paper/delBatch',
    method: 'post',
    data: params
  })
}

