import request from '@/utils/request'

export function fetchExportBill(params) {
  return request({
    url: '/sys/generate/test/expData',
    method: 'post',
    params: params,
    responseType: 'arraybuffer'
  })
}



