import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/company/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/company/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/company/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/company/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/company/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/company/delBatch',
    method: 'post',
    data: params
  })
}

export function examine(params) {
  return request({
    url: '/talents/company/examine',
    method: 'post',
    data: params
  })
}

export function fetchExportMode(params) {
  return request({
    url: '/talents/company/downloadexcelTemplate',
    method: 'get',
    params: params,
    responseType: 'arraybuffer'
  })
}

