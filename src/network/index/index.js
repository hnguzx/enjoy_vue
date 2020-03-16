import { ajaxRequest } from '../request'

// export function login(userInfo) {
//   return ajaxRequest({
//     // url: '/spring_boot/login',
//     method: 'POST',
//     data:{
//       userInfo
//     }
//   })
// }

export function login (userInfo) {
  return ajaxRequest({
    url: '/login.json',
    method: 'post',
    data: {
      userInfo
    }
  })
}

