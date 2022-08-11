import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/manage/setting/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/sys/manage/setting/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/sys/manage/setting/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/sys/manage/setting/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/sys/manage/setting/del',
    method: 'get',
    params: params
  })
}

