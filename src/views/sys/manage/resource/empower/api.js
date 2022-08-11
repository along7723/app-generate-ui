import request from '@/utils/request'

export function queryTree(params) {
  return request({
    url: '/sys/manage/resource/queryTree',
    method: 'get',
    params: params
  })
}
