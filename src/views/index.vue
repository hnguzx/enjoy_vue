<template>
  <div>
    <router-view/>
    <Main/>
    <!--<el-form>
      <el-form-item label="登录名" prop="username">
        <el-input v-model="user.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="username">
        <el-input type="password" v-model="user.username"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>-->
  </div>
</template>

<script>
  // import {login} from "../network/index/index";
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
              console.log(data);
              this.$router.replace('/set')
            })
            .catch(err => {
              console.log(err)
            })
      }*/
    }
  }
</script>
