import request from '@/utils/request'

/**
 * 查询活动信息
 * @param {Object} query
 */
export function listRelease(query) {
  return request({
    url: '/business/eventRelease/list',
    method: 'get',
    params: query
  })
}


export function getInfo(eventId){
  return request({
    url: '/business/eventRelease/' + eventId,
    method: 'get'
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

// 新增活动发布
export function addRelease(data) {
  return request({
    url: '/business/eventRelease',
    method: 'post',
    data: data
  })
}

// 修改活动
export function editRelease(data){
  return request({
    url: '/business/eventRelease',
    method: 'put',
    data: data
  })
}

/**
 * 删除
 * @param {Object} eventId
 */
export function remove(eventId) {
  return request({
    url: '/business/eventRelease/' + eventId,
    method: 'delete'
  })
}

/**
 * 发布或下架
 * @param {Object} data
 */
export function upOrDown(data) {
  return request({
    url: '/business/eventRelease/upOrDown',
    method: 'post',
    data: data
  })
}
