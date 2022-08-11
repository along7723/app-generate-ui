import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/notification/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/notification/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/notification/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/notification/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/notification/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/notification/delBatch',
    method: 'post',
    data: params
  })
}

export function signUp(params) {
  return request({
    url: '/talents/training/signUp',
    method: 'get',
    params: params
  })
}

export function checkSignUp(params) {
  return request({
    url: '/talents/training/checkSignUp',
    method: 'get',
    params: params
  })
}
