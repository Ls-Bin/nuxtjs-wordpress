import dayjs from 'dayjs'

/**
 * 格式化文章数据
 * @param {Object} postData 文章数据
 */
function formatPostDetail(postData) {
  let o = JSON.parse(JSON.stringify(postData))
  o.date = dayjs(o.date).format('YYYY年MM月DD日')
  return o
}

export { formatPostDetail }
