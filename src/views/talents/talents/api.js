import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/talents/query',
    method: 'get',
    params: params
  })
}

export function queryMyInfo(params) {
  return request({
    url: '/talents/talents/queryMy',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/talents/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/talents/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/talents/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/talents/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/talents/delBatch',
    method: 'post',
    data: params
  })
}

export function examine(params) {
  return request({
    url: '/talents/talents/examine',
    method: 'post',
    data: params
  })
}

export function getCountOfIdNo(params) {
  return request({
    url: '/talents/talents/getCountOfIdNo',
    method: 'get',
    params: params
  })
}

export function relevanceTalents(params) {
  return request({
    url: '/talents/talents/relevanceTalents',
    method: 'get',
    params: params
  })
}

export function leaveOffice(params) {
  return request({
    url: '/talents/talents/leaveOffice',
    method: 'get',
    params: params
  })
}

export function fetchExportMode(params) {
  return request({
    url: '/talents/talents/downloadexcelTemplate',
    method: 'get',
    params: params,
    responseType: 'arraybuffer'
  })
}
