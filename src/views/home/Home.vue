<template>
  <div>
    <nav-bar>
      <div slot="nav-left">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div slot="nav-center">首页</div>
      <div slot="nav-right">
        <i class="el-icon-setting"></i>
      </div>
    </nav-bar>
    <swipe :imgData="imgData"/>
    <recommend :recommendData="recommendData"/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"/>
    <ul>
      <li v-for="(item,index) in goodsList">
        <div class="goods-item">
          <p>{{item.goodsName}}</p>
          <span>{{item.price}}</span>
          <span>{{item.collectNum}}</span>
          <img :src="item.imgUrl"/>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import TabControl from "components/content/tabControl/TabControl"

  import Swipe from "./childComps/Swipe"
  import Recommend from "./childComps/Recommend"

  import {getImage, getRecommend,getGoodsList} from "network/home/home"

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      Swipe,
      Recommend

    },
    data() {
      return {
        imgData: [],
        recommendData: [],
        goodsList:[]
      }
    },
    methods: {},
    created() {
      getImage().then(data => {
        this.imgData = data.data;
      });
      getRecommend().then(data => {
        this.recommendData = data.data
      });
      getGoodsList({"username":"guzhixiong"}).then(data =>{
        this.goodsList = data.data;
      }).catch(err=>{
        console.log(err)
      });
    }
  }
</script>

<style scoped>
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
