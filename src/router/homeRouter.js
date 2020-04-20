/*
 * @Author: guzx 
 * @Date: 2020-03-16 15:20:59 
 * @Description:  home目录下的路由文件
 * @Last Modified by: guzx
 * @Last Modified time: 2020-03-16 16:06:26
 */


const Details = () => import('views/home/childComps/Details');

let routes = [
    {
        path: '/details',
        component: Details,
    }
]

export default routes;