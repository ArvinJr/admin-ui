import request from '@/utils/request'

// 新增商品
export function addCommodity(data) {
  return request({
    url: '/business/commodity',
    method: 'post',
    data: data
  })
}

// 查询商品列表
export function listCommodity(query) {
  return request({
    url: '/business/commodity/list',
    method: 'get',
    params: query
  })
}

// 回显默认的全局推荐设置
export function getDefaultSetting() {
  return request({
    url: '/business/commodity/setting',
    method: 'get',
  })
}

// 修改全局推荐设置
export function updateSetting(data) {
  const obj = {
    orderId: data.recommendMethod
  }
  return request({
    url: '/business/commodity/setting',
    method: 'put',
    data: obj
  })
}

// 查询商品详细
export function getCommodity(commodityId) {
  return request({
    url: '/business/commodity/' + commodityId,
    method: 'get'
  })
}


// 修改商品
export function updateCommodity(data) {
  return request({
    url: '/business/commodity/edit',
    method: 'put',
    data: data
  })
}


// 删除商品
export function delCommodity(commodityId) {
  return request({
    url: '/business/commodity/' + commodityId,
    method: 'delete'
  })
}


// 上架，下架商品
export function changeCommodityStatus(commodityId, code) {
  const data = {
    commodityId: commodityId,
    onState: code
  }
  return request({
    url: '/business/commodity/changeStatus',
    method: 'put',
    data: data
  })
}

// 回显默认的推荐设置
export function getDefaultRecommend(commodityId) {
  return request({
    url: '/business/commodity/recommend/' + commodityId,
    method: 'get',
  })
}

// 修改推荐设置
export function updateRecommend(data) {
  const obj = {
    commodityId: data.commodityId,
    rankingPosition: data.rankingPosition2,
    sticky: data.sticky,
  }
  return request({
    url: '/business/commodity/recommend',
    method: 'put',
    data: obj
  })
}

// 查询已启用的商家
export function getBusiness() {
  return request({
    url: '/business/commodity/getBusiness',
    method: 'get',
  })
}
