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
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Swipe from "./childComps/Swipe";
  import Recommend from "./childComps/Recommend";

  import {getJokeInfo, getImage, getRecommend} from "network/home/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      Swipe,
      Recommend
    },
    data() {
      return {
        imgData: [],
        recommendData: []
      }
    },
    methods: {},
    created() {
      /*getJokeInfo(Date.parse(new Date()).toString().substr(0, 10))
        .then((data) => {
        this.jokeData = data.result.data;
          console.log(data)
      }).catch(err => {
      });*/
      getImage().then(data => {
        this.imgData = data.data;
      });
      getRecommend().then(data => {
        this.recommendData = data.data
      })
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
