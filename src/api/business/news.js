import request from '@/utils/request'


// 查询所有项目文档
export function listNews(query) {
  return request({
    method: 'get',
    url: '/system/news/list',
    params: query
  })
}

// 根据News_id查询
export function getNews(newId) {
  return request({
    url: '/system/news/' + newId,
    method: 'get'
  })
}

// 新增项目文档
export function addNews(data) {
  return request({
    url: '/system/news',
    method: 'post',
    data: data
  })
}

// 修改项目文档
export function updateNews(data) {
  return request({
    url: '/system/news',
    method: 'put',
    data: data
  })
}

//下架
export function backNews(data) {
  return request({
    url: '/system/news/back',
    method: 'post',
    data: data
  })
}

//发布
export function upNews(data) {
  return request({
    url: '/system/news/up',
    method: 'post',
    data:data
  })
}

// 删除项目文档
export function delNews(newId) {
  return request({
    url: '/system/news/' + newId,
    method: 'delete'
  })
}

// 拿到景点名称集合
export function  getScenic(){
  return request({
    url: '/system/news/scenicList',
    method: 'get',
  })
}

