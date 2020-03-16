<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/main/home">
        <img slot="tabbar-icon" src="~assets/img/tabbar/home.svg">
        <img slot="tabbar-icon-active" src="~assets/img/tabbar/home_act.svg">
        <div slot="tabbar-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/main/file">
        <img slot="tabbar-icon" src="~assets/img/tabbar/file.svg">
        <img slot="tabbar-icon-active" src="~assets/img/tabbar/file_act.svg">
        <div slot="tabbar-text">文档</div>
      </tab-bar-item>
      <tab-bar-item path="/main/set">
        <img slot="tabbar-icon" src="~assets/img/tabbar/set.svg">
        <img slot="tabbar-icon-active" src="~assets/img/tabbar/set_act.svg">
        <div slot="tabbar-text">设置</div>
      </tab-bar-item>
      <tab-bar-item path="/main/profile">
        <img slot="tabbar-icon" src="~assets/img/tabbar/user.svg">
        <img slot="tabbar-icon-active" src="~assets/img/tabbar/user_act.svg">
        <div slot="tabbar-text">用户</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import {TabBar, TabBarItem} from "components/common/tabbar";

  export default {
    name: "Main",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
