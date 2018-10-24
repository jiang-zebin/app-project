<template>
  <div class="app_shop">
    <up-nav @showLogin="showLogin" :isShow="isShow" :isActive="isActive"></up-nav>
    <div class="login_p" @click="showLogin()" :class="isShow?'show':''"></div>
    <down-nav :isActive="isActive" :isShow="isShow"></down-nav>
    <login-page></login-page>
  </div>
</template>
<script>
  import Nav from './Nav';
  import UpNav from './UpNav';
  import LoginPage from './LoginPage';
  export default{
    data(){
      return {
        isActive:4,
        isShow:false
      }
    },
    methods:{
      showLogin(){
        if(this.isShow===false){
          this.isShow=true
        }else{
          this.isShow=false
        }
      }
    },
    created(){

    },
    components:{
      "downNav":Nav,
      "upNav":UpNav,
      "loginPage":LoginPage
    }
  }
</script>
<style>
  .app_shop{
    height:100%;
    background-color:#fff;
  }
</style>