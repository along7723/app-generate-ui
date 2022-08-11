import request from '@/utils/request'

export function onTheJob() {
  return request({
    url: '/talents/countCompany/onTheJob',
    method: 'get'
  })
}

export function quantityChange() {
  return request({
    url: '/talents/countCompany/quantityChange',
    method: 'get'
  })
}

export function unitType() {
  return request({
    url: '/talents/countCompany/unitType',
    method: 'get'
  })
}

