import request from '@/utils/request'

// 查询景点列表
export function listScenicGrepOn(query) {
  return request({
    url: '/business/scenic/list/grepOn',
    method: 'get',
    params: query
  })
}

// 查询景点列表
export function listScenic(query) {
  return request({
    url: '/business/scenic/list',
    method: 'get',
    params: query
  })
}

// 新增景点
export function addScenic(data) {
  return request({
    url: '/business/scenic',
    method: 'post',
    data: data
  })
}

// 查询景点
export function getScenic(scenicId) {
  return request({
    url: '/business/scenic/' + scenicId,
    method: 'get'
  })
}

// 修改景点
export function updateScenic(data) {
  return request({
    url: '/business/scenic/edit',
    method: 'put',
    data: data
  })
}

// 查询景点详情
export function getScenicMore(scenicId) {
  return request({
    url: '/business/scenic/more/' + scenicId,
    method: 'get'
  })
}

// 查询景点详情
export function getStrategyById(scenicId) {
  return request({
    url: '/business/scenic/strategy/' + scenicId,
    method: 'get'
  })
}

// 修改景点详情
export function updateScenicMore(data) {
  return request({
    url: '/business/scenic/edit/more',
    method: 'put',
    data: data
  })
}

// 启用、关闭景点
export function changeScenicStatus(scenicId, code) {
  const data = {
    scenicId: scenicId,
    postStatus: code
  }
  return request({
    url: '/business/scenic/changeStatus',
    method: 'put',
    data: data
  })
}

// 新增攻略
export function insertStrategy(data) {
  return request({
    url: '/business/scenic/strategy',
    method: 'post',
    data: data
  })
}

// 删除景点
export function delScenic(scenicId) {
  return request({
    url: '/business/scenic/' + scenicId,
    method: 'delete'
  })
}

// 查询景点
export function getScenicView(scenicId) {
  return request({
    url: '/business/scenic/view/' + scenicId,
    method: 'get'
  })
}

// 景点攻略状态修改
export function changeStrategyStatus(strategyId, code) {
  const data = {
    strategyId: strategyId,
    offByDefault: code
  }
  return request({
    url: '/business/scenic/changeStrategyStatus',
    method: 'put',
    data: data
  })
}

// 回显 景点攻略
export function getDefaulStrategy(strategyId) {
  return request({
    url: '/business/scenic/startegyInfo/' + strategyId,
    method: 'get'
  })
}

// 修改景点攻略
export function updateStrategy(data) {
  return request({
    url: '/business/scenic/strategy/edit',
    method: 'put',
    data: data
  })
}


// 删除景点攻略
export function deleteStrategyById(strategyId, scenicId) {
  return request({
    url: '/business/scenic/strategy/' + strategyId + '/' + scenicId,
    method: 'delete'
  })
}
