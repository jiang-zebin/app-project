<template>
  <div class="app_down_nav" :class="isShow?'show':''">
    <router-link class="down_nav_item" :to="item.goto" v-for="item in isLogin?navlist:navlist_no" :key="item.id">
      <img :src="isActive==item.id?item.url_press:item.url">
      <span class="down_nav_label" :class="isActive==item.id?'active':''">{{item.title}}</span>
    </router-link>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        navlist:[
          {id:1,title:"资讯",url:"img/home/tab_icon_news_normal@2x.png",url_press:"img/home/tab_icon_news_press@2x.png",goto:"/info"},
          {id:2,title:"萌友",url:"img/home/tab_icon_friend_normal@2x.png",url_press:"img/home/tab_icon_friend_press@2x.png",goto:"/friends"},
          {id:3,title:"电视台",url:"img/home/tab_icon_quiz_normal@2x.png",url_press:"img/home/tab_icon_quiz_press@2x.png",goto:"/tv"},
          {id:4,title:"商城",url:"img/home/tab_icon_mobile_store_normal@2x.png",url_press:"img/home/tab_icon_mobile_store_press@2x.png",goto:"/shop"},
          {id:5,title:"战绩",url:"img/home/tab_icon_more_normal@2x.png",url_press:"img/home/tab_icon_more_press@2x.png",goto:"/gameinfo"}
        ],
        navlist_no:[
          {id:1,title:"资讯",url:"img/home/tab_icon_news_normal@2x.png",url_press:"img/home/tab_icon_news_press@2x.png",goto:"/info"},
          {id:2,title:"萌友",url:"img/home/tab_icon_friend_normal@2x.png",url_press:"img/home/tab_icon_friend_press@2x.png",goto:"/friends"},
          {id:4,title:"商城",url:"img/home/tab_icon_mobile_store_normal@2x.png",url_press:"img/home/tab_icon_mobile_store_press@2x.png",goto:"/shop"},
          {id:5,title:"战绩",url:"img/home/tab_icon_more_normal@2x.png",url_press:"img/home/tab_icon_more_press@2x.png",goto:"/gameinfo"}
        ],
        isLogin:true
      }
    },
    methods:{
      
    },
    created(){

    },
    props:["isActive","isShow"]
  }
</script>
<style>
  .app_down_nav{
    position:fixed;
    width:100%;
    height:53px;
    bottom:0;
    border-top:1px solid #ddd;
    display:flex;
    justify-content:space-around;
    background-color:#fff;
    z-index:5;
    transition:0.5s;
  }
  .app_down_nav.show{
    transform:translate3D(320px,0,0);
    position:fixed;
  }
  .app_down_nav .down_nav_item{
      text-align:center;
  }
  .app_down_nav .down_nav_item img{
      display:block;
      margin:0 auto;
      width:30px;
  }
  .app_down_nav .down_nav_item .down_nav_label{
      font-size:10px;
      color:#798A8C;
  }
  .app_down_nav .down_nav_item .down_nav_label.active{
      color:#BA9A6C;
  }
</style>