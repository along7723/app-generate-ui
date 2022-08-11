import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/generate/table/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/sys/generate/table/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/sys/generate/table/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/sys/generate/table/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/sys/generate/table/del',
    method: 'get',
    params: params
  })
}

export function generate(params) {
  return request({
    url: '/sys/generate/table/generate',
    method: 'get',
    params: params
  })
}

export function incrementSynTable(params) {
  return request({
    url: '/sys/generate/table/incrementSynTable',
    method: 'get',
    params: params
  })
}

export function incrementQueryDB(params) {
  return request({
    url: '/sys/generate/table/incrementQueryDB',
    method: 'get'
  })
}


