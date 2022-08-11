import request from '@/utils/request'

export function queryMenuTree() {
  return request({
    url: '/sys/manage/menu/queryMenuTree',
    method: 'get'
  })
}

export function getById(params) {
  return request({
    url: '/sys/manage/menu/getById',
    method: 'get',
    params: params
  })
}

export function del(id) {
  return request({
    url: '/sys/manage/menu/del',
    method: 'get',
    params: { id }
  })
}

export function add(data) {
  return request({
    url: '/sys/manage/menu/add',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/sys/manage/menu/update',
    method: 'post',
    data
  })
}

export function moveIndex(data) {
  return request({
    url: '/sys/manage/menu/moveIndex',
    method: 'get',
    params: data
  })
}
