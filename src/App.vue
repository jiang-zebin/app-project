<template>
  <div class="app-container"> 
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        isLogin:true
      }
    },
    methods:{
      setHeight(){
        var h=screen.height;
        var app=document.getElementsByClassName("app-container")[0];
        app.style.height=h+"px";
      }
    },
    created(){},
    mounted(){
      this.setHeight()
    },
  }
</script>
<style>
  body{
    margin:0;
  }
  ul,li{
    margin:0;
    padding:0;
    list-style:none;
  }
  a{
    text-decoration:none;
  }
  .login_p{
    position:fixed;
    top:0;
    width:100%;
    height:100%;
    background-color:#000;
    opacity:0.5;
    z-index:-1;
    transition:all 0.5s;
  }
  .login_p.show{
    transform:translate3d(320px,0,0);
    z-index:100;
  }
</style>
