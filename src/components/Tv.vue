<template>
  <div class="app_tv">
    <up-nav :navlist="navlist" @showLogin="showLogin" :isShow="isShow" :isActive="isActive"></up-nav>
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
        navlist:["推荐","我的"],
        isActive:3,
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
  .app_tv{
    height:100%;
    background-color:#fff;
  }
  .app_tv .app_upnav .info_list{
    width:300px;
    padding-left:50px;
  }
  .app_tv .app_upnav .info_list_item{
    margin:0 35px;
  }
  .app_tv .app_upnav .active_line{
    left:152px;
  }
</style>