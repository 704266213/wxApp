//生产环境 
// var apiHost = "https://tips.kangzubin.com/api"
var apiHost = "https://api.hibai.cn/api/"

var config = {

  // 列表
  feedListUrl: `${apiHost}/index/index`,
  // 搜索
  feedSearchUrl: `${apiHost}/feed/search`,
  // 详情
  feedDetailUrl: `${apiHost}/feed/detail`,
  // 收藏
  feedFavorlUrl: `${apiHost}/feed/favor`,
  // 收藏列表
  feedFavorListUrl: `${apiHost}/feed/favorList`,
  // 登录
  userLoginUrl: `${apiHost}/user/login`,
  // 更新用户信息
  userUpdateUrl: `${apiHost}/user/update`,
}

module.exports = config
