import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/talents/planMembers/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/talents/planMembers/getById',
    method: 'get',
    params: params
  })
}

export function updateInfo(params) {
  return request({
    url: '/talents/planMembers/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/talents/planMembers/add',
    method: 'post',
    data: params
  })
}

export function addMembers(params) {
  return request({
    url: '/talents/planMembers/addMembers',
    method: 'get',
    params: params
  })
}

export function addNewPerson(params) {
  return request({
    url: '/talents/planMembers/addNewPerson',
    method: 'get',
    params: params
  })
}

export function delInfo(params) {
  return request({
    url: '/talents/planMembers/del',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/talents/planMembers/delBatch',
    method: 'post',
    data: params
  })
}
