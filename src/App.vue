<template>
  <div id="app">
<!--    <router-view/>-->
<!--    <Main/>-->
    <index/>
  </div>
</template>

<script>
  // import Main from "components/content/main/Main";
  import Index from "views/index"

  export default {
    name: 'App',
    components: {
      // Main
      Index
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
