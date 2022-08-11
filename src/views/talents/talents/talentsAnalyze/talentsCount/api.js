import request from '@/utils/request'

export function countUserTrend(params) {
  return request({
    url: '/talents/countUserType/countUserTrend',
    method: 'get',
    params: params
  })
}
