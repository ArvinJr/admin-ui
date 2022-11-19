import request from '@/utils/request'

// 新增项目文化
export function addCulture(data) {
  return request({
    url: '/business/culture',
    method: 'post',
    data: data
  })
}

// 查询项目文化列表
export function listCulture(query) {
  return request({
    url: '/business/culture/list',
    method: 'get',
    params: query
  })
}

// 修改项目文化
export function updateCulture(data) {
  return request({
    url: '/business/culture/edit',
    method: 'put',
    data: data
  })
}

// 查询项目文化详细
export function getCulture(cultureId) {
  return request({
    url: '/business/culture/' + cultureId,
    method: 'get'
  })
}

// 查询项目文化详细
export function getCultureMore(cultureId) {
  return request({
    url: '/business/culture/listSite/' + cultureId,
    method: 'get'
  })
}

// 回显文化景点
export function getDefaultCultureSite(cultureId) {
  return request({
    url: '/business/culture/site/' + cultureId,
    method: 'get',
  })
}

// 修改文化景点
export function updateCultureSite(data) {
  return request({
    url: '/business/culture/site/edit',
    method: 'put',
    data: data
  })
}


// 添加文化宣传
export function addCulturePropagada(data) {
  return request({
    url: '/business/culture/propaganda/add',
    method: 'post',
    data: data
  })
}

// 添加游客照片
export function addCultureTouristPic(data) {
  return request({
    url: '/business/culture/tourist/add',
    method: 'post',
    data: data
  })
}

// 启用、关闭项目文化
export function changeProjectCultureStatus(cultureId, code) {
  const data = {
    cultureId: cultureId,
    postStatus: code
  }
  return request({
    url: '/business/culture/changeStatus',
    method: 'put',
    data: data
  })
}

// 删除项目文化
export function delProjectCulture(cultureId) {
  return request({
    url: '/business/culture/' + cultureId,
    method: 'delete'
  })
}

// 查询项目文化宣传
export function getVideo(cultureId) {
  return request({
    url: '/business/culture/video/' + cultureId,
    method: 'get'
  })
}

// 查询项目文化游客相册
export function getImage(query) {
  return request({
    url: '/business/culture/image',
    method: 'get',
    params: query
  })
}

// 项目文化宣传状态修改
export function changePropagandaStatus(id, whetherOpen,cultureId) {
  const data = {
    id,
    whetherOpen,
    cultureId
  }
  return request({
    url: '/business/culture/changePropagandaStatus',
    method: 'put',
    data: data
  })
}

// 修改文化宣传
export function updatePropagada(data) {
  return request({
    url: '/business/culture/propaganda/edit',
    method: 'put',
    data: data
  })
}

// 删除文化宣传
export function deletePropagandaById(id) {
  return request({
    url: '/business/culture/propaganda/' + id,
    method: 'delete'
  })
}

// 回显 文化宣传
export function getDefaulPropaganda(id) {
  return request({
    url: '/business/culture/propaganda/' + id,
    method: 'get'
  })
}


// 修改游客相册文件名
export function updateImageName(id, newName) {
  const data = {
    id: id,
    imageName: newName
  }
  return request({
    url: '/business/culture/image/edit',
    method: 'put',
    data: data
  })
}

// 删除游客相册文件
export function deleteImageById(id) {
  return request({
    url: '/business/culture/image/' + id,
    method: 'delete'
  })
}

