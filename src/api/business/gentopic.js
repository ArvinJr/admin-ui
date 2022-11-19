import request from '@/utils/request'

/**
 * 查询活动信息
 * @param {Object} query
 */
export function listGenATopic(query) {
  return request({
    url: '/business/genATopic/list',
    method: 'get',
    params: query
  })
}

// 获取详情
export function getInfo(genId) {
  return request({
    url: '/business/genATopic/' + genId,
    method: 'get'
  })
}


// 新增活动发布
export function addGenATopic(data) {
  return request({
    url: '/business/genATopic',
    method: 'post',
    data: data
  })
}


export function editGenATopic(data){
  return request({
    url: '/business/genATopic',
    method: 'put',
    data: data
  })
}

/**
 * 查询景点信息
 * @param {Object} query
 */
export function listScenic(query) {
  return request({
    url: '/business/scenic/list/grepOn',
    method: 'get',
    params: query
  })
}

/**
 * 删除
 * @param {Object} eventId
 */
export function remove(genId) {
  return request({
    url: '/business/genATopic/' + genId,
    method: 'delete'
  })
}

/**
 * 发布或下架
 * @param {Object} data
 */
export function upOrDown(data) {
  return request({
    url: '/business/genATopic/upOrDown',
    method: 'post',
    data: data
  })
}
