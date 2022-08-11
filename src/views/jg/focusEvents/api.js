import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/jg/focusEvents/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/jg/focusEvents/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/jg/focusEvents/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/jg/focusEvents/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/jg/focusEvents/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/jg/focusEvents/delBatch',
    method: 'post',
    data: params
  })
}
