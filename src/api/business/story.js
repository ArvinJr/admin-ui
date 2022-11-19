import request from '@/utils/request'

// 查询故事列表
export function listStory(query) {
  return request({
    url: '/system/story/list',
    method: 'get',
    params: query
  })
}

// 查询项目列表
export function listProject(query) {
  return request({
    url: '/system/story/projectList',
    method: 'get',
    params: query
  })
}

// 查询商家详细
export function getStorySummary(storyId) {
  return request({
    url: '/system/story/summary/' + storyId,
    method: 'get'
  })
}



// 查询商家详细
export function getStory(storyId) {
  return request({
    url: '/system/story/' + storyId,
    method: 'get'
  })
}

// 查询故事概括详细
export function getSummaryBySId(summaryId) {
  return request({
    url: '/system/story/getSummaryBySId/' + summaryId,
    method: 'get'
  })
}

// 查询商家详细
export function getSummary(storyId) {
  return request({
    url: '/system/story/getSummary/' + storyId,
    method: 'get'
  })
}

// 新增商家
export function addStory(data) {
  return request({
    url: '/system/story',
    method: 'post',
    data: data
  })
}

// 修改故事信息
export function updateStory(data) {
  return request({
    url: '/system/story/updateStory',
    method: 'put',
    data: data
  })
}

// 修改概括信息
export function updateSummary(data) {
  return request({
    url: '/system/story/updateSummary',
    method: 'put',
    data: data
  })
}

//根据id查询项目模块信息
export function listCharacteristicType(characteristicType) {
  return request({
    url: '/system/story/getMoudle/' + characteristicType,
    method: 'get',
  })
}

//根据id查询项目模块信息
export function listProjectByRegion(region) {
  return request({
    url: '/system/story/getProjectByRegion/' + region,
    method: 'get',
  })
}


// 删除商家
export function delStory(storyId) {
  return request({
    url: '/system/story/' + storyId,
    method: 'delete'
  })
}

// 删除商家
export function delSummary(summaryId) {
  return request({
    url: '/system/story/delSummary/' + summaryId,
    method: 'delete'
  })
}

// 启用故事
export function statusUpStory(storyId) {
  return request({
    url: '/system/story/statusUp/' + storyId,
    method: 'get'
  })
}

// 关闭故事
export function statusDownStory(storyId) {
  return request({
    url: '/system/story/statusDown/' + storyId,
    method: 'get'
  })
}

// 启用概括
export function statusUpSummary(summaryId) {
  return request({
    url: '/system/story/statusUpSummary/' + summaryId,
    method: 'get'
  })
}

// 关闭概括
export function statusDownSummary(summaryId) {
  return request({
    url: '/system/story/statusDownSummary/' + summaryId,
    method: 'get'
  })
}

// 新增故事概括
export function insertSummary(data) {
  return request({
    url: '/system/story/insertSummary',
    method: 'post',
    data: data
  })
}

// 新增故事他色
export function insertCharacteristic(data) {
  return request({
    url: '/system/story/insertCharacteristic',
    method: 'post',
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


