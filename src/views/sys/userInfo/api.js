import request from '@/utils/request'

export function getMyInfo() {
  return request({
    url: '/sys/manage/shiro/getMyInfo',
    method: 'get'
  })
}

export function editMyInfo(data) {
  return request({
    url: '/sys/manage/shiro/editMyInfo',
    method: 'post',
    data: data
  })
}

export function editMyHeadImg(data) {
  return request({
    url: '/sys/manage/shiro/editMyHeadImg',
    method: 'post',
    data: data
  })
}


