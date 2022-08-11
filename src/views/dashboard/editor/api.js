import request from '@/utils/request'

export function queryTODO(params) {
  return request({
    url: '/talents/talents/queryTODO',
    method: 'get',
    params: params
  })
}
