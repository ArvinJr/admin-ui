import request from '@/utils/request'
import banner from "@/views/business/banner";

// 查询内容列表
export function listBanner(query) {
  return request({
    url: '/business/banner/list',
    method: 'get',
    params: query
  })
}

// 查询内容详细
export function getBanner(bannerId) {
  return request({
    url: '/business/banner/' + bannerId,
    method: 'get'
  })
}


// 新增内容
export function addBanner(data) {
  return request({
    url: '/business/banner',
    method: 'post',
    data: data
  })
}

// 删除内容
export function delBanner(bannerId) {
  return request({
    url: '/business/banner/' + bannerId,
    method: 'delete'
  })
}

// 上架内容
export function statusUpBanner(bannerId) {
  return request({
    url: '/business/banner/statusUp/' + bannerId,
    method: 'get'
  })
}

// 下架内容
export function statusDownBanner(bannerId) {
  return request({
    url: '/business/banner/statusDown/' + bannerId,
    method: 'get'
  })
}

// // 推荐设置
// export function updateBusinessSort(data) {
//   return request({
//     url: '/system/business/updateBusinessSort',
//     method: 'put',
//     data: data
//   })
// }

// 修改内容信息
export function updateBanner(data) {
  return request({
    url: '/business/banner/updateBanner',
    method: 'put',
    data: data
  })
}

// 查询景点
export function selectScenic() {
  return request({
    url: '/business/banner/selectByScenicId',
    method: 'get'
  })
}



