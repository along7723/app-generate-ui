import request from '@/utils/request'

export function getSubData(params) {
  return request({
    url: '/talents/talents/getSubData',
    method: 'get',
    params: params
  })
}
