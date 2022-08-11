import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/manage/messageType/query',
    params: params,
    method: 'get'

  })
}





