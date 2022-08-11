import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/manage/leaveApproval/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/sys/manage/leaveApproval/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/sys/manage/leaveApproval/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/sys/manage/leaveApproval/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/sys/manage/leaveApproval/del',
    method: 'get',
    params: params
  })
}

