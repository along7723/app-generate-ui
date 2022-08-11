import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/training/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/training/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/training/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/training/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/training/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/training/delBatch',
    method: 'post',
    data: params
  })
}
