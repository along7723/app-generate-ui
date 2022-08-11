import request from '@/utils/request'

export function queryInfo(params) {
  return request({
    url: '/sys/generate/table/query',
    method: 'get',
    params: params
  })
}

export function getDetailInfo(params) {
  return request({
    url: '/sys/generate/table/getById',
    method: 'get',
    params: params
  })
}

export function getTableListType(params) {
  return getDetailInfo(params)
}

export function updateTableListTypeField(params) {
  return updateInfo(params)
}

export function updateInfo(params) {
  return request({
    url: '/sys/generate/table/update',
    method: 'post',
    data: params
  })
}

export function addInfo(params) {
  return request({
    url: '/sys/generate/table/add',
    method: 'post',
    data: params
  })
}

export function delInfo(params) {
  return request({
    url: '/sys/generate/table/del',
    method: 'get',
    params: params
  })
}

export function generate(params) {
  return request({
    url: '/sys/generate/table/generate',
    method: 'get',
    params: params
  })
}

export function deleteBatchInfo(params) {
  return request({
    url: '/sys/generate/table/delBatch',
    method: 'post',
    data: params
  })
}

/**
 * 获取菜单
 * @param {Object} params
 */
export function getCodeMenu(params) {
  return request({
    url: `/sys/manage/menu/queryByMetaId?metaID=${params}`,
    method: 'get'
  })
}

/**
 * 获取路径
 */
export function getCodePath() {
  return request({
    url: '/sys/generate/ipGenerateAddress/getByIP',
    method: 'get'
  })
}

export function incrementSynTable(params) {
  return request({
    url: '/sys/generate/table/incrementSynTable',
    method: 'get',
    params: params
  })
}

export function incrementQueryDB(params) {
  return request({
    url: '/sys/generate/table/incrementQueryDB',
    method: 'get'
  })
}

export function querySynTable(params) {
  return request({
    url: '/sys/generate/table/querySynTable',
    method: 'get',
    params: params
  })
}

export function incrementSynOneTable(params) {
  return request({
    url: '/sys/generate/table/incrementSynOneTable',
    method: 'get',
    params: params
  })
}
