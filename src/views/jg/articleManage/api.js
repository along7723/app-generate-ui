import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/jg/articleManage/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/jg/articleManage/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/jg/articleManage/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/jg/articleManage/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/jg/articleManage/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/jg/articleManage/delBatch',
    method: 'post',
    data: params
  })
}
