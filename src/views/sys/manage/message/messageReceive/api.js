import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/manage/messageReceive/query',
    params: params,
    method: 'get'

  })
}





