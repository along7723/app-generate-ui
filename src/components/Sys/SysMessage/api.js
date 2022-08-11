import request from '@/utils/request'

export function readMessage(params) {
  return request({
    url: '/sys/manage/message/readMessage',
    params: params,
    method: 'get'

  })
}
