import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/generate/ipGenerateAddress/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/sys/generate/ipGenerateAddress/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/sys/generate/ipGenerateAddress/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/sys/generate/ipGenerateAddress/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/sys/generate/ipGenerateAddress/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/sys/generate/ipGenerateAddress/delBatch',
    method: 'post',
    data: params
  })
}
