import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/patent/query',
    params: params,
    method: 'get'

  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/patent/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/patent/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/patent/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/patent/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/patent/delBatch',
    method: 'post',
    data: params
  })
}

