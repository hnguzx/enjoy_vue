<template>
  <div class="recommend">
    <div v-for="item in recommendData" :key="item.id" class="recommend-item">
      <a :href="item.url">
        <img :src="item.imgUrl" alt="">
        <div>{{item.name}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      recommendData: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 15px;
    border-bottom: 8px solid #eee;
  }

  .recommend-item{
    flex: 1;

  }

  .recommend-item img{
    /*margin-top: 5px;*/
    margin-bottom: 5px;
  }
</style>
