import request from '@/utils/request'

// 查询商家列表
export function listHotel(query) {
  return request({
    url: '/system/hotel/list',
    method: 'get',
    params: query
  })
}

// 查询商家详细
export function getHotel(hotelId) {
  return request({
    url: '/system/hotel/' + hotelId,
    method: 'get'
  })
}

// 新增商家
export function addHotel(data) {
  return request({
    url: '/system/hotel',
    method: 'post',
    data: data
  })
}

// 删除商家
export function delHotel(hotelId) {
  return request({
    url: '/system/hotel/' + hotelId,
    method: 'delete'
  })
}

// 上架商家
export function statusUpHotel(hotelId) {
  return request({
    url: '/system/hotel/statusUp/' + hotelId,
    method: 'get'
  })
}

// 下架商家
export function statusDownHotel(hotelId) {
  return request({
    url: '/system/hotel/statusDown/' + hotelId,
    method: 'get'
  })
}

// 推荐设置
export function updateHotelSort(data) {
  return request({
    url: '/system/hotel/updateHotelSort',
    method: 'put',
    data: data
  })
}

// 修改酒店信息
export function updateHotel(data) {
  return request({
    url: '/system/hotel/updateHotel',
    method: 'put',
    data: data
  })
}

// 查询全局推荐类型
export function orderHotel() {
  return request({
    url: '/system/hotel/order',
    method: 'get'
  })
}

// 修改全局推荐
export function updateHotelOrder(data) {
  return request({
    url: '/system/hotel/updateOrder',
    method: 'put',
    data: data
  })
}

