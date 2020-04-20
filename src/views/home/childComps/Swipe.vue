<template>
  <div class="block">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in imgData" :key="item.id">
        <a href="#">
          <img :src="item.imgUrl" alt="">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

  export default {
    name: "Swipe",
    props:{
      imgData:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
a img{
  width: 100%;
}

</style>
