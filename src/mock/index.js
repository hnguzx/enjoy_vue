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

// 模板
/*Mock.mock('/url','get',{
  state:200,
  message:'获取资源成功',
  'data|4':[
    {
      id:'@increment(1)',
      imgUrl:'@dataImage("320x150","hello guzx")',
      url:'@url'
    }
  ]
})*/

Mock.mock('/swipe.json', 'get', {
  state: 200,
  message: '获取轮播图资源成功',
  'data|4': [
    {
      id: '@increment(1)',
      imgUrl: '@dataImage("320x150","hello guzx")',
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
      name:'@cword(2,5)'
    }
  ]
});

Mock.mock('/goodsList.json', 'get', {
  state: 200,
  message: '获取商品列表成功',
  'data|20': [
    {
      id: '@increment(1)',
      imgUrl: '@dataImage("68x68","hello guzx")',
      price:'@float(0,100)',
      goodsName:'@string(5,20)',
      collectNum:'@integer(0,500)'
    }
  ]
});

Mock.mock('/login.json', 'post', {
  state: 200,
  message: '登录成功',
  user:{
    username:'guzx123',
    password:'123'
  }
})


