import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/jobInfo/query',
    params: params,
    method: 'get'

  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/jobInfo/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/jobInfo/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/jobInfo/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/jobInfo/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/jobInfo/delBatch',
    method: 'post',
    data: params
  })
}
