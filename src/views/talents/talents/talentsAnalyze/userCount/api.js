import request from '@/utils/request'

export function countSex(params) {
  return request({
    url: '/talents/countUserType/countSex',
    method: 'get',
    params: params
  })
}

export function countAge(params) {
  return request({
    url: '/talents/countUserType/countAge',
    method: 'get',
    params: params
  })
}

export function countCulture(params) {
  return request({
    url: '/talents/countUserType/countCulture',
    method: 'get',
    params: params
  })
}

export function countNation(params) {
  return request({
    url: '/talents/countUserType/countNation',
    method: 'get',
    params: params
  })
}

export function countSource(params) {
  return request({
    url: '/talents/countUserType/countSource',
    method: 'get',
    params: params
  })
}
