import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/generate/field/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/sys/generate/field/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/sys/generate/field/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/sys/generate/field/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/sys/generate/field/del',
    method: 'get',
    params: params
  })
}

export function fieldOrder(params) {
  return request({
    url: '/sys/generate/field/fieldOrder',
    method: 'get',
    params: params
  })
}

export function incrementSynField(params) {
  return request({
    url: '/sys/generate/field/incrementSynField',
    method: 'get',
    params: params
  })
}
