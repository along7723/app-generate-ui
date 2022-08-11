import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/vue-element-admin/routes',
    method: 'get',
    baseURL: '/dev-api'
  })
}

export function getRoles() {
  return request({
    url: '/vue-element-admin/roles',
    method: 'get',
    baseURL: '/dev-api'
  })
}

export function addRole(data) {
  return request({
    url: '/vue-element-admin/role',
    method: 'post',
    data,
    baseURL: '/dev-api'
  })
}

export function updateRole(id, data) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'put',
    data,
    baseURL: '/dev-api'
  })
}

export function deleteRole(id) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'delete',
    baseURL: '/dev-api'
  })
}
