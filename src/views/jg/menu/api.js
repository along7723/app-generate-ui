import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/jg/menuNameMangage/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/jg/menuNameMangage/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/jg/menuNameMangage/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/jg/menuNameMangage/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/jg/menuNameMangage/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/jg/menuNameMangage/delBatch',
    method: 'post',
    data: params
  })
}
