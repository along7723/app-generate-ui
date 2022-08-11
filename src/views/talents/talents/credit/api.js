import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/credit/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/credit/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/credit/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/credit/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/credit/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/credit/delBatch',
    method: 'post',
    data: params
  })
}
