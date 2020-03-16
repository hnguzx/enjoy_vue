import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

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

];

const router = new Router({
  routes,
  mode: 'history'
});

export default router
