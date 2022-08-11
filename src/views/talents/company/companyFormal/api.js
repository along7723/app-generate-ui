import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/companyFormal/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/companyFormal/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/companyFormal/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/companyFormal/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/companyFormal/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/companyFormal/delBatch',
    method: 'post',
    data: params
  })
}

export function fetchExportBill(params) {
  return request({
    url: '/talents/companyFormal/expData',
    method: 'post',
    params: params,
    responseType: 'arraybuffer'
  })
}
