import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/manage/leave/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/sys/manage/leave/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/sys/manage/leave/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/sys/manage/leave/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/sys/manage/leave/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/sys/manage/leave/delBatch',
    method: 'post',
    data: params
  })
}

//申请请假
export function applyLeave(params) {
  return request({
    url: '/sys/manage/leave/applyLeave',
    method: 'get',
    params: params
  })
}

//审批请假
export function approvalLeave(params) {
  return request({
    url: '/sys/manage/leave/approvalLeave',
    method: 'get',
    params: params
  })
}

//查询待处理请假
export function approvalLeaveList(params) {
  return request({
    url: '/sys/manage/leave/approvalLeaveList',
    method: 'get',
    params: params
  })
}

