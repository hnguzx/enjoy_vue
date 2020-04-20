/*
 * @Author: guzx 
 * @Date: 2020-03-16 15:22:10 
 * @Description:  总路由
 * @Last Modified by: guzx
 * @Last Modified time: 2020-03-16 16:29:26
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// 导入其它路由文件
import homeRouter from './homeRouter';

const Home = () => import('views/home/Home');
const Profile = () => import('views/profile/Profile');
const File = () => import('views/file/File');
const Set = () => import('views/set/Set');
const Main = () => import('components/content/main/Main')
const Index = () => import('views/Index')

const routes = [
  {
    path: '/',
    redirect: 'index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/main',
    component: Main,
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'set',
        component: Set
      },
      {
        path: 'file',
        component: File
      },
      {
        path: 'profile',
        component: Profile
      }
    ]
  },
  ...homeRouter
];

const router = new Router({
  routes,
  mode: 'history'
});

export default router
