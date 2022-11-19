import request from '@/utils/request'

// 查询商家列表
export function listProject(query) {
  return request({
    url: '/system/project/list',
    method: 'get',
    params: query
  })
}

// 查询商家详细
export function getProject(projectId) {
  return request({
    url: '/system/project/' + projectId,
    method: 'get'
  })
}

// 新增项目
export function addProject(data) {
  return request({
    url: '/system/project',
    method: 'post',
    data: data
  })
}

// 删除项目
export function delProject(projectId) {
  return request({
    url: '/system/project/' + projectId,
    method: 'delete'
  })
}

// 启用项目
export function statusUpProject(projectId) {
  return request({
    url: '/system/project/statusUp/' + projectId,
    method: 'get'
  })
}

// 关闭项目
export function statusDownProject(projectId) {
  return request({
    url: '/system/project/statusDown/' + projectId,
    method: 'get'
  })
}

// 修改项目信息
export function updateProject(data) {
  return request({
    url: '/system/project/updateProject',
    method: 'put',
    data: data
  })
}

// 查询景点
export function getScenic() {
  return request({
    url: '/system/project/getScenic',
    method: 'get'
  })
}


