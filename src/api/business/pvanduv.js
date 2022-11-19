import request from '@/utils/request'

//pv总数
export function getpv() {
  return request({
    method: 'get',
    url: '/business/pvanduv/getpv',
  })
}

//uv总数
export function getuv() {
  return request({
    method: 'get',
    url: '/business/pvanduv/getuv',
  })
}

//uv本月
export function getmuv() {
  return request({
    method: 'get',
    url: '/business/pvanduv/getmuv',
  })
}

//人均同比
export function gettb() {
  return request({
    method: 'get',
    url: '/business/pvanduv/gettb',
  })
}

//月同比，日环比
export function getrb() {
  return request({
    method: 'get',
    url: '/business/pvanduv/gettb1',
  })
}

/**
 * 获取项目
 */
export function getProjectList(id) {
  return request({
    method: 'get',
    url: '/business/pvanduv/getProjectList/'+ id,
  })
}

/**
 * 查询前5条数据
 */
export function selectListFive() {
  return request({
    method: 'get',
    url: '/business/pvanduv/selectListFive',
  })
}

export function getProjectCount(){
  return request({
    method: 'get',
    url: '/business/pvanduv/getProjectCount',
  })
}
