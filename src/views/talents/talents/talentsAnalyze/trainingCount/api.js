import request from '@/utils/request'

export function count(params) {
  return request({
    url: '/talents/training/count',
    method: 'get',
    params: params
  })
}
