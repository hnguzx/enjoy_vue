<template>
  <div id="home">
    <nav-bar>
      <div slot="nav-left">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div slot="nav-center">首页</div>
      <div slot="nav-right">
        <i class="el-icon-setting"></i>
      </div>
    </nav-bar>
    <scroll class="content" ref="scrollRef"
            :probe-type="3"
            @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <swipe :imgData="imgData"/>
      <recommend :recommendData="recommendData"/>
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
      <GoodsList :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import TabControl from "components/content/tabControl/TabControl"
  import GoodsList from "components/content/goods/GoodsList";

  import Swipe from "./childComps/Swipe"
  import Recommend from "./childComps/Recommend"
  import Scroll from "components/common/scroll/Scroll"
  import BackTop from "components/content/backTop/BackTop";

  import {getImage, getRecommend, getGoodsList} from "network/home/home"

  export default {
    name: "Home",
    components: {
      BackTop,
      NavBar,
      TabControl,
      GoodsList,
      Swipe,
      Recommend,
      Scroll

    },
    data() {
      return {
        imgData: [],
        recommendData: [],
        goods: {
          'fashion': {
            page: 0,
            pageSize: 10,
            list: []
          },
          'newStyle': {
            page: 0,
            pageSize: 10,
            list: []
          },
          'sift': {
            page: 0,
            pageSize: 10,
            list: []
          }
        },
        currentType: 'fashion',
        isShow: false
      }
    },
    methods: {
      /**
       * 网络请求相关
       */
      getImage() {
        getImage().then(data => {
          this.imgData = data.data;
        });
      },
      getRecommend() {
        getRecommend().then(data => {
          this.recommendData = data.data
        });
      },
      getGoodsList(type) {
        let sendData = {};
        const pageNum = this.goods[type].page;
        const pageSize = this.goods[type].pageSize;
        sendData = {
          pageNum,
          pageSize,
          type
        };
        getGoodsList(sendData).then(data => {
          let result = data.list;
          // 1 循环单独push
          // 2 ...
          this.goods[type].list.push(...result);
          this.goods[type].page += 1;
          this.$refs.scrollRef.finishPullUp();
        }).catch(err => {
          console.log(err)
        });
      },

      /**
       * 页面逻辑相关
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'fashion';
            break;
          case 1:
            this.currentType = 'newStyle';
            break;
          case 2:
            this.currentType = 'sift';
            break;
          default:
            break;
        }
      },
      backClick() {
        this.$refs.scrollRef.scrollTop(0, 0);
      },
      contentScroll(position) {
        this.isShow = position.y < (-1000);
      },
      loadMore(){
        console.log('1111')
        this.getGoodsList(this.currentType);
        this.$refs.scrollRef.scroll.refresh();
      }

    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    created() {
      // 加载轮播图
      this.getImage();
      // 加载推荐商品
      this.getRecommend();
      // 加载商品列表
      this.getGoodsList('fashion');
      this.getGoodsList('newStyle');
      this.getGoodsList('sift');
    }
  }
</script>

<style scoped>
  .tab-control {
    position: sticky;
    top: 44px;
  }

  #home {
    height: 100vh;
    position: relative;
  }

  .content {
    height: calc(100% - 93px);
    overflow: hidden;
    position: absolute;
  }
</style>
