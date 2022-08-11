import request from '@/utils/request'

export function getDicTree() {
  return request({
    url: '/sys/manage/dic/getDicTree',
    method: 'get'
  })
}

export function getById(params) {
  return request({
    url: '/sys/manage/dic/getById',
    method: 'get',
    params: params
  })
}

export function del(id) {
  return request({
    url: '/sys/manage/dic/del',
    method: 'get',
    params: { id }
  })
}

export function add(data) {
  return request({
    url: '/sys/manage/dic/add',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/sys/manage/dic/update',
    method: 'post',
    data
  })
}
