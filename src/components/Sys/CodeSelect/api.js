import request from '@/utils/request'

export function getDicItemsTree(data) {
  return request({
    url: '/sys/manage/dicItem/queryDicItemTree',
    method: 'get',
    params: data
  })
}
