<template>
  <div>
    <h2>这是用户组件</h2>
    <div class="wrapper" ref="abc">
      <ul class="content">
        <li v-for="item in 300">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Profile",
    created() {
      // new BScroll('.wrapper',{})
    },
    mounted() {
      new BScroll('.wrapper',{})
      // new BScroll(this.$refs.abc,{})
    }
  }

</script>

<style scoped>
  .wrapper{
    height: 200px;
    background-color: red;
    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>
