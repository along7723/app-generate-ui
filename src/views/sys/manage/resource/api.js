import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/manage/resource/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/sys/manage/resource/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/sys/manage/resource/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/sys/manage/resource/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/sys/manage/resource/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/sys/manage/resource/delBatch',
    method: 'post',
    data: params
  })
}

export function queryTree(params) {
  return request({
    url: '/sys/manage/resource/queryTree',
    method: 'get',
    params: params
  })
}
