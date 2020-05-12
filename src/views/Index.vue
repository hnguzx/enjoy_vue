<template>
  <div>
    <router-view/>
    <Main/>
  </div>
</template>

<script>
  import Main from "components/content/main/Main";

  export default {
    name: 'index',
    components: {
      Main
    },
    data() {
      return {
        /*user: {
          username: 'guzx',
          password: '123'
        }*/
      }
    },
    methods: {
      /*login() {
        login(this.user)
            .then(data => {
              this.$router.replace('/main/home');
            })
            .catch(err => {
              console.log(err)
            })
      }*/
    }
  }
</script>
