<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    /*弹性布局*/
    display: flex;
    background-color: #f6f6f6;
    /*生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。*/
    /*元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。*/
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    /*水平偏移量，垂直偏移量，阴影高度，颜色*/
    box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.1);
  }


</style>
