<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="nav-left"></slot>
    </div>
    <div class="center">
      <slot name="nav-center"></slot>
    </div>
    <div class="right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    position: fixed;
    left: 0;
    right: 0;
    top: 0px;
    background-color: #ffffff;
    display: flex;

    z-index: 10;

    text-align: center;
    /*状态栏20*/
    height: 44px;
    line-height: 44px;

    box-shadow: 0px 1px 1px rgba(100,100,100,.2);
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>
