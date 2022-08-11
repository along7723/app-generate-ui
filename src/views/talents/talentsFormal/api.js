import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/talentsFormal/query',
    method: 'get',
    params: params
  })
}

export function queryMyInfo(params) {
  return request({
    url: '/talents/talentsFormal/queryMy',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/talentsFormal/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/talentsFormal/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/talentsFormal/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/talentsFormal/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/talentsFormal/delBatch',
    method: 'post',
    data: params
  })
}

export function fetchExportBill(params) {
  console.log('fetchExportBill')
  return request({
    url: '/talents/talentsFormal/expData',
    method: 'post',
    params: params,
    responseType: 'arraybuffer'
  })
}
