import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/talentPolicy/query',
    params: params,
    method: 'get'

  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/talentPolicy/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/talentPolicy/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/talentPolicy/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/talentPolicy/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/talentPolicy/delBatch',
    method: 'post',
    data: params
  })
}

