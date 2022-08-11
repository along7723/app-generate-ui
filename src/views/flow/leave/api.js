import request from '@/utils/request'


export function queryInfo(params) {
    return request({
        url: '/sys/flow/leave/query',
        params: params,
    method: 'get',

    })
}

export function getDetailInfo(params) {
    return request({
    url: '/sys/flow/leave/getById',
    method: 'get',
    params: params,
    })
}

export function updateInfo(params) {
    return request({
    url: '/sys/flow/leave/update',
    method: 'post',
    data: params,
    })
}

export function addInfo(params) {
    return request({
    url: '/sys/flow/leave/add',
    method: 'post',
    data: params,
    })
}

export function delInfo(params) {
    return request({
    url: '/sys/flow/leave/del',
    method: 'get',
    params: params,
    })
}
export function deleteBatchInfo(params) {
    return request({
    url: '/sys/flow/leave/delBatch',
    method: 'post',
    data:params,
    })
}

