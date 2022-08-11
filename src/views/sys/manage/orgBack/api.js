import request from '@/utils/request'

export function queryInfoTree(params) {
  return request({
    url: '/sys/manage/org/queryInfoTree',
    method: 'get',
    params: params
  })
}

export function queryInfo(params) {
  return request({
    url: '/sys/manage/org/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/sys/manage/org/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/sys/manage/org/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/sys/manage/org/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/sys/manage/org/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/sys/manage/org/delBatch',
    method: 'post',
    data: params
  })
}
