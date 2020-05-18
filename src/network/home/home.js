import {ajaxRequest} from '../request'

export function getJokeInfo(timestamp) {
  return ajaxRequest({

    url: '/api/joke/content/list.php',
    method: 'get',
    params: {
      sort: 'desc',
      page: 1,
      pagesize: 2,
      time: timestamp,
      key: '20630b5e6ae5fc9d292e2f10b118903b'
    }
  })
}

export function getMockInfo() {
  return ajaxRequest('/user.json')
}

export function getImage() {
  return ajaxRequest('/swipe.json')
}

export function getRecommend() {
  return ajaxRequest('/recommend.json')
}

export function getGoodsList(options) {
  return ajaxRequest({
    url:'/goodsList.json',
    method:'post',
    data:options
  });
}
