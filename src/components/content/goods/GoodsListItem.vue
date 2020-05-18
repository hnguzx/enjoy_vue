<template>
  <div class="goods_list_item">
    <img :src="goodItem.imageURL" alt="">
    <div class="goods-info">
      <p>{{goodItem.title}}</p>
      <span class="price">{{goodItem.price}}</span>
      <span class="collect">{{goodItem.collect}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goodItem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods_list_item{
    padding-bottom: 40px;
    position: relative;
    width: 150px;
  }

  .goods_list_item img{
    width: 100%;
    border-radius: 5px;
  }

  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price{
    color: red;
    margin-right: 20px;
  }

  .goods-info .collect{
    position: relative;
  }

  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/coll.svg") 0 0/14px 14px;
  }


</style>
