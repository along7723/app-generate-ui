import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/manage/user/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/sys/manage/user/getById',
    method: 'get',
    params: params
  })
}


