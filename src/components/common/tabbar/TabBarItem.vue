<template>
  <div class="tab-bar-item" @click="ItemClick">
    <div v-if="!isActive">
      <slot name="tabbar-icon"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tabbar-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      actColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {}
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.actColor} : {}
      }
    },
    methods: {
      ItemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item {
    /*让所有弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容*/
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;

    vertical-align: middle;

    margin-bottom: 2px;
  }
</style>
