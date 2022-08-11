import request from '@/utils/request'

export function countCompanyIndustry() {
  return request({
    url: '/talents/companyFormal/countCompanyIndustry',
    method: 'get'
  })
}


