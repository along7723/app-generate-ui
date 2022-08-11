import request from '@/utils/request'

export function getDicItems(data) {
  return request({
    url: '/sys/manage/dicItem/queryDicItem',
    method: 'get',
    params: data
  })
}

export function getDicItemsTree(data) {
  return request({
    url: '/sys/manage/dicItem/queryDicItemTree',
    method: 'get',
    params: data
  })
}

export function queryInfo(params) {
  return request({
    url: '/sys/manage/dicItem/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/sys/manage/dicItem/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/sys/manage/dicItem/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/sys/manage/dicItem/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/sys/manage/dicItem/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/sys/manage/dicItem/delBatch',
    method: 'post',
    data: params
  })
}
