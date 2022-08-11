import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/generate/test/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/sys/generate/test/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/sys/generate/test/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/sys/generate/test/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  console.log(params)
  return request({
    url: '/sys/generate/test/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/sys/generate/test/delBatch',
    method: 'post',
    data: params
  })
}

export function fetchExportBill(params) {
  return request({
    url: '/sys/generate/test/expData',
    method: 'post',
    params: params,
    responseType: 'arraybuffer'
  })
}
