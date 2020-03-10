import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Home = () => import('views/home/Home');
const Profile = () => import('views/profile/Profile');
const File = () => import('views/file/File');
const Set = () => import('views/set/Set');

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/set',
    component: Set
  },
  {
    path: '/file',
    component: File
  },
  {
    path: '/profile',
    component: Profile
  },
];

const router = new Router({
  routes,
  mode: 'history'
});

export default router
