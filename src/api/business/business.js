import request from '@/utils/request'

// 查询商家列表
export function listBusiness(query) {
  return request({
    url: '/system/business/list',
    method: 'get',
    params: query
  })
}

// 查询商家详细
export function getBusiness(businessId) {
  return request({
    url: '/system/business/' + businessId,
    method: 'get'
  })
}

// 新增商家
export function addBusiness(data) {
  return request({
    url: '/system/business',
    method: 'post',
    data: data
  })
}

// 删除商家
export function delBusiness(businessId) {
  return request({
    url: '/system/business/' + businessId,
    method: 'delete'
  })
}

// 上架商家
export function statusUpBusiness(businessId) {
  return request({
    url: '/system/business/statusUp/' + businessId,
    method: 'get'
  })
}

// 上架商家
export function statusDownBusiness(businessId) {
  return request({
    url: '/system/business/statusDown/' + businessId,
    method: 'get'
  })
}

// 推荐设置
export function updateBusinessSort(data) {
  return request({
    url: '/system/business/updateBusinessSort',
    method: 'put',
    data: data
  })
}

// 修改商家信息
export function updateBusiness(data) {
  return request({
    url: '/system/business/updateBusiness',
    method: 'put',
    data: data
  })
}

// 查询全局推荐类型
export function orderBusiness() {
  return request({
    url: '/system/business/order',
    method: 'get'
  })
}

// 修改全局推荐
export function updateBusinessOrder(data) {
  return request({
    url: '/system/business/updateOrder',
    method: 'put',
    data: data
  })
}

