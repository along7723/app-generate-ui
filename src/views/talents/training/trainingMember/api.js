import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/trainingMember/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/trainingMember/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/trainingMember/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/trainingMember/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/trainingMember/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/trainingMember/delBatch',
    method: 'post',
    data: params
  })
}

export function examine(params) {
  return request({
    url: '/talents/trainingMember/examine',
    method: 'post',
    data: params
  })
}

export function fetchExportBill(params) {
  return request({
    url: '/talents/trainingMember/expData',
    method: 'post',
    params: params,
    responseType: 'arraybuffer'
  })
}

export function addMembers(params) {
  return request({
    url: '/talents/trainingMember/addMembers',
    method: 'get',
    params: params
  })
}
