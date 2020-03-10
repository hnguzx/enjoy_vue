<template>
  <div id="app">
    <router-view/>
    <Main/>
  </div>
</template>

<script>
  import Main from "components/content/main/Main";

  export default {
    name: 'App',
    components: {
      Main
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
