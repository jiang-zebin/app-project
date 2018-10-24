<template>
  <div class="app_upnav" :class="isShow?'show':''">
    <div class="login_friend">
      <span class="login_btn" @click="showLogin()">
          <img src="img/home/header_mark_white@2x.png">
          <img src="img/home/left_nologin@2x.png">
      </span>
      <div class="info_nav">
        <ul class="info_list">
          <li v-for="(item,i) in navlist" class="info_list_item" :class="navId==i+1?'active':''" @click="navActive(i+1)">{{item}}</li>
        </ul>
        <div :class="isActive<4?'active_line':''"></div>
      </div>
      <span class="friends_btn" @click="">
          <img src="img/home/common_button_message_noraml_light@2x.png">
      </span>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        navId:1
      }
    },
    methods:{
      navActive(x){
        var i=x-this.navId;
        this.navId=x;
        var l=document.getElementsByClassName("active_line")[0];
        var ul=document.getElementsByClassName("info_list")[0];
        var xx=document.getElementsByClassName("container_list")[0];
        xx.style.transition="0.5s";
        if(this.isActive==1){
          var w=60;
        }else if(this.isActive==2){
          var w=80;
        }else{
          var w=100;
        }
        if(x>=3&&x<7){
          ul.style.transform=`translate3D(-${(x-3)*w}px,0,0)`;
        }
        if(x==2){
          ul.style.transform="translate3D(0,0,0)";
        }
        if(x==7){
          ul.style.transform=`translate3D(-${3*w}px,0,0)`;
        }
        if(x<=3){
          l.style.transform=`translate3D(${(x-1)*w}px,0,0)`;
        }else if(x>=7){
          l.style.transform=`translate3D(${(x-4)*w}px,0,0)`;
        }else{
          l.style.transform=`translate3D(${2*w}px,0,0)`;
        }
        if(i<-1||i>1){
          xx.style.transition="";
        }
        xx.style.transform=`translate3d(-${(x-1)*414}px,0,0)`;
        i=this.navId;
      },
      showLogin(){
        this.$emit("showLogin")
      }
    },
    created(){},
    props:["navlist","isShow","isActive"]
  }
</script>
<style>
  .app_upnav{
    position:fixed;
    width:100%;
    transition:0.5s;
    z-index:5;
  }
  .app_upnav.show{
    transform:translate3D(320px,0,0);
    position:fixed;
  }
  .app_upnav .login_friend{
    position:fixed;
    width:100%;
    height:48px;
    z-index:3;
    top:0;
    background-color:#fff;
    border-bottom:1px solid #ddd;
    transition:0.5s;
  }
  .app_upnav .login_friend .login_btn{
    background-color:#fff;
    width:24px;
    height:40px;
    float:left;
    padding:4px 18px;
  }
  .app_upnav .login_friend .login_btn>img:first-child{
    position:absolute;
    width:35px;
    z-index:6;
  }
  .app_upnav .login_friend .login_btn>img:last-child{
    position:absolute;
    top:9px;
    left:20px;
    border-radius:50%;
    width:30px;
  }
  .app_upnav .login_friend .friends_btn{
    background-color:#fff;
    width:34px;
    height:22px;
    float:right;
    padding:13px 10px;
  }
  .app_upnav .login_friend .friends_btn>img{
    width:20px;
  }
  .app_upnav .info_nav{
    width:300px;
    background-color:#fff;
    float:left;
    overflow:hidden;
  }
  .app_upnav .info_list_item.active{
    color:#26A9A2;
  }
  .app_upnav .info_list{
    transition:0.5s;
    padding-top:12px;
  }
  .app_upnav .info_list_item{
    float:left;
    font-size:15px;
    color:#666;
  }
  .app_upnav .active_line{
    position:absolute;
    top:35px;
    width:15px;
    height:2px;
    border-radius:5px;
    background-color:#26A9A2;
    transition:all 0.5s;
    z-index:5;
  }
</style>