import axios from 'axios'
// import fs from 'fs'

const baseURL = 'http://localhost/wordpress'

/**
 * 获取info参数
 */
function getInfo() {
  return axios({
    url: `${baseURL}/wp-json`
  })
}
/**
 * 获取文章列表
 * @param {Object} params -请求参数
 */
function getPostList(params) {
  return axios({
    url: `${baseURL}/wp-json/wp/v2/posts`,
    params
  })
}

/**
 *  获取文章详情
 * @param {Number} id -文章id
 */
function getPostDetail(id) {
  return axios({
    url: `${baseURL}/wp-json/wp/v2/posts/${id}`
  })
}

export { getPostList, getPostDetail, getInfo }
