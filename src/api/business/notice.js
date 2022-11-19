import request from '@/utils/request'


// 查询所有项目文档
export function listNotice(query) {
  return request({
    url: '/business/notice/list',
    method: 'get',
    params: query
  })
}

// 根据notice_id查询
export function getNotice(noticeId) {
  return request({
    url: '/business/notice/' + noticeId,
    method: 'get'
  })
}

// 新增项目文档
export function addNotice(data) {
  return request({
    url: '/business/notice',
    method: 'post',
    data: data
  })
}

// 修改项目文档
export function updateNotice(data) {
  return request({
    url: '/business/notice/edit',
    method: 'put',
    data: data
  })
}

//下架
export function backNotice(noticeId) {
  return request({
    url: '/business/notice/back/' + noticeId,
    method: 'post'
  })
}

//发布
export function upNotice(data) {
  return request({
    url: '/business/notice/up',
    method: 'post',
    data: data
  })
}

// 删除项目文档
export function delNotice(noticeId) {
  return request({
    url: '/business/notice/remove/' + noticeId,
    method: 'delete'
  })
}

// 拿到景点名称集合
export function  getScenic(){
  return request({
    url: '/business/notice/scenicList',
    method: 'get',
  })
}

