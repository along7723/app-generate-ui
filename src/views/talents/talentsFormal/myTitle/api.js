import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/title/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/title/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/title/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/title/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/title/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/title/delBatch',
    method: 'post',
    data: params
  })
}
