import request from '@/utils/request'

// 查询餐饮
export function listRestaurant(query) {
  return request({
    url: '/business/restaurant/list',
    method: 'get',
    params: query
  })
}

// 新增餐饮
export function addRestaurant(data) {
  return request({
    url: '/business/restaurant',
    method: 'post',
    data: data
  })
}

// 删除餐饮
export function delRestaurant(restaurantId) {
  return request({
    url: '/business/restaurant/' + restaurantId,
    method: 'delete'
  })
}


// 回显默认的全局推荐设置
export function getDefaultSetting() {
  return request({
    url: '/business/restaurant/setting',
    method: 'get',
  })
}

// 修改全局推荐设置
export function updateSetting(data) {
  const obj = {
    orderId: data.recommendMethod
  }
  return request({
    url: '/business/restaurant/setting',
    method: 'put',
    data: obj
  })
}

// 查询餐饮详细
export function getRestaurant(restaurantId) {
  return request({
    url: '/business/restaurant/' + restaurantId,
    method: 'get'
  })
}

// 修改餐饮
export function updateRestaurant(data) {
  return request({
    url: '/business/restaurant/edit',
    method: 'put',
    data: data
  })
}

// 上架，下架餐饮
export function changeRestaurantStatus(restaurantId, code) {
  const data = {
    restaurantId: restaurantId,
    postStatus: code
  }
  return request({
    url: '/business/restaurant/changeStatus',
    method: 'put',
    data: data
  })
}

// 回显默认的推荐设置
export function getDefaultRecommend(restaurantId) {
  return request({
    url: '/business/restaurant/recommend/' + restaurantId,
    method: 'get',
  })
}

// 修改推荐设置
export function updateRecommend(data) {
  const obj = {
    restaurantId: data.restaurantId,
    weighting: data.weighting2,
    sticky: data.sticky,
  }
  return request({
    url: '/business/restaurant/recommend',
    method: 'put',
    data: obj
  })
}
