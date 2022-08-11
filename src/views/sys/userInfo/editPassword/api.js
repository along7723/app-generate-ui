import request from '@/utils/request'

export function editPassword(data) {
  return request({
    url: '/sys/manage/shiro/editPassword',
    method: 'get',
    params: data
  })
}


