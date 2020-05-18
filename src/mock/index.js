import Mock from 'mockjs';
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const userInfo = function (opt) {
  let person = [];
  for (let i = 0; i < 30; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 12),
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'),
      author_name: Random.cname(),
      date: Random.date(),
      email: Random.email(),
      name: Random.cname()
    }
    person.push(newArticleObject)
  }
  return {
    person: person
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/user.json', 'get', userInfo);


Mock.mock('/swipe.json', 'get', {
  state: 200,
  message: '获取轮播图资源成功',
  'data|4': [
    {
      id: '@increment(1)',
      imgUrl: '@dataImage("320x150","轮播图")',
      url: '@url'
    }
  ]
});

Mock.mock('/recommend.json', 'get', {
  state: 200,
  message: '获取推荐资源成功',
  'data|4': [
    {
      id: '@increment(1)',
      imgUrl: '@dataImage("68x68","hello guzx")',
      url: '@url',
      name: '@cword(2,5)'
    }
  ]
});

const goodInfo1 = Mock.mock({
  "list|30": [
    {
      goodId: '@increment(1)',
      sort: 'fashion',
      title: '@cword(5,10)',
      imageURL:'@dataImage("86x86","流行商品图")',
      price:'@integer(60, 100)',
      collect:'@integer(1, 100)'
    }
  ]
});

const goodInfo2 = Mock.mock({
  "list|30": [
    {
      goodId: '@increment(1)',
      sort: 'newStyle',
      title: '@cword(5,10)',
      imageURL:'@dataImage("86x86","新款商品图")',
      price:'@integer(60, 100)',
      collect:'@integer(1, 100)'
    }
  ]
});

const goodInfo3 = Mock.mock({
  "list|30": [
    {
      goodId: '@increment(1)',
      sort: 'sift',
      title: '@cword(5,10)',
      imageURL:'@dataImage("86x86","精选商品图")',
      price:'@integer(60, 100)',
      collect:'@integer(1, 100)'
    }
  ]
});

Mock.mock('/goodsList.json', function (options) {
  let data = JSON.parse(options.body);
  if (data.type == 'fashion') {
    return goodInfo1;
  } else if (data.type == 'newStyle') {
    return goodInfo2;
  } else if (data.type == 'sift') {
    return goodInfo3;
  }
});


Mock.mock('/login.json', 'post', {
  state: 200,
  message: '登录成功',
  user: {
    username: 'guzx123',
    password: '123'
  }
})


