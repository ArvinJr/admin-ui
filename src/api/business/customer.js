import request from '@/utils/request'
import customer from "@/views/business/customer";

// 根据id查询二维码和电话
export function getCustomer() {
  return request({
    url: '/business/customer/',
    method: 'get'
  })
}

// 新增内容
export function addCustomer(data) {
  return request({
    url: '/business/customer',
    method: 'post',
    data: data
  })
}

// 修改内容信息
export function updateCustomer(data) {
  return request({
    url: '/business/customer/updateCustomer',
    method: 'put',
    data: data
  })
}
