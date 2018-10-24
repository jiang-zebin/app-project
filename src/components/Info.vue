<template>
  <div class="app_info">
    <up-nav :navlist="navlist" @showLogin="showLogin" :isShow="isShow" :isActive="isActive"></up-nav>
    <div class="app_info_container" :class="isShow?'show':''">
      <div class="info_input">
        <input type="text" class="header_input" placeholder="搜索你想了解的资讯">
      </div>
      <div class="container_box">
        <ul class="container_list">
          <li class="container_item">
            <div class="info_swipe_box">
              <ul class="info_swipe">
                <li v-for="item in swipelist" class="info_swipe_item">
                  <img :src="item">
                </li>
              </ul>
              <div class="swipe_indicators">
                <span class="indicators_outer active"></span>
                <span class="indicators_outer"></span>
                <span class="indicators_outer"></span>
                <span class="indicators_outer"></span>
                <span class="indicators_outer"></span>
                <span class="indicators_outer"></span>
                <span class="indicators_inner"></span>
              </div>
            </div>
            <div class="info_news">
              <ul class="news_list">
                <li v-for="item in newslist" class="news_list_item" :key="item.nid">
                  <router-link :to="'/info/infodetails/'+item.nid">
                    <div class="new_list_item_title">
                      <p class="news_title">{{item.title}}</p>
                      <p class="news_subtitle">
                        <span class="news_author">{{item.author}}</span>
                        <span class="news_comment">{{item.comment}}评论</span>
                      </p>
                    </div>
                    <img :src="item.img_src">
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="container_item">
            <p>赛事</p>
          </li>
          <li class="container_item">
            <p>专栏</p>
          </li>
          <li class="container_item">
            <p>热点</p>
          </li>
          <li class="container_item">
            <p>视频</p>
          </li>
          <li class="container_item">
            <p>版本</p>
          </li>
          <li class="container_item">
            <p>官方</p>
          </li>
          <li class="container_item">
            <p>英雄</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="login_p" @click="showLogin()" :class="isShow?'show':''"></div>
    <down-nav :isActive="isActive" :isShow="isShow"></down-nav>
    <login-page></login-page>
  </div>
</template>
<script>
  import Nav from './Nav';
  import UpNav from './UpNav';
  import LoginPage from './LoginPage';
  var t=null;
  export default{
    data(){
      return {
        navlist:["推荐","赛事","专栏","热点","视频","版本","官方","英雄"],
        swipelist:[
          "img/info/big92016.jpg",
          "img/info/big92018.jpg",
          "img/info/big92003.jpg",
          "img/info/big92004.jpg",
          "img/info/big92005.jpg",
          "img/info/big92006.jpg",
          "img/info/big92016.jpg",
          "img/info/big92018.jpg",
          "img/info/big92003.jpg",
          "img/info/big92004.jpg"
        ],
        newslist:[
          {nid:1,title:"惊心动魄！RNG完美团战锁定小组头名",author:"电竞虎-LOL",comment:"",img_src:"img/info/pic-news.jpg"},
          {nid:2,title:"赛恩开车直达胜利 RNG一波结束比赛击败GEN",author:"赛后战报@特玩",comment:"5747",img_src:"img/info/pic-news2.jpg"},
          {nid:3,title:"#S8小组赛话题#你觉得letme到底是世界第几上单",author:"掌盟",comment:"2081",img_src:"img/info/pic-news9.jpg"},
          {nid:4,title:"8.20版本更新公告: 新版伊泽瑞尔登场 驯龙新皮肤上线",author:"官方",comment:"",img_src:"img/info/pic-news10.jpg"},
          {nid:5,title:"赛恩开车直达胜利 RNG一波结束比赛击败GEN",author:"赛后战报@特玩",comment:"5747",img_src:"img/info/pic-news2.jpg"},
          {nid:6,title:"#S8小组赛话题#你觉得letme到底是世界第几上单",author:"掌盟",comment:"2081",img_src:"img/info/pic-news9.jpg"}
        ],
        isShow:false,
        isActive:1
      }
    },
    methods:{
      //轮播图
      infoSwipe(){
        var u=document.getElementsByClassName("info_swipe")[0];
        var ss=document.getElementsByClassName("indicators_outer");
        var s_in=document.getElementsByClassName("indicators_inner")[0];
        var move=0;
        function swipe(){
          u.style.transition="0.5s";
          move-=330;
          u.style.transform="translate3d("+move+"px,0,0)";
          for(var s of ss){
            s.className="indicators_outer";
          }
          var i;
          if(move==-1980){
            setTimeout(function(){
              u.style.transition="";
              u.style.transform="translate3d(0,0,0)";
              move=0;
            },500);
            ss[0].className="indicators_outer active";
            s_in.style.transform="translate3d(0,0,0) rotate(45deg)";
          }else{
            i=move/-330;
            ss[i].className="indicators_outer active";
            s_in.style.transform="translate3d("+i*18+"px,0,0) rotate(45deg)";
          }
        }
        t=setInterval(swipe,4000);
      },
      showLogin(){
        if(this.isShow===false){
          this.isShow=true
        }else{
          this.isShow=false
        }
      },
      stopSwipe(){
        clearInterval(t);
        t=null;
      }
    },
    created(){
      this.stopSwipe();
    },
    mounted(){
      this.infoSwipe();
    },
    destroyed(){
      this.stopSwipe();
    },
    components:{
      "downNav":Nav,
      "upNav":UpNav,
      "loginPage":LoginPage
    }
  }
</script>
<style>
  .app_info{
    overflow:hidden;
  }
  .app_info_container{
    height:100%;
    transition:0.5s;
  }
  .app_info_container.show{
    transform:translate3D(320px,0,0);
  }
  .app_info .info_input{
    width:100%;
    padding-top:55px;
    text-align:center;
    background-color:#fff;
  }
  .app_info .info_input .header_input{
    width:90%;
    height:28px;
    text-align:center;
    margin-bottom:8px;
    border:0;
    border-radius:5px;
    font-size:12px;
    background:#ddd url(../../public/img/info/search_icon@2x.png) no-repeat;
    background-size:15px;
    background-position:110px 7px;
  }
  .app_info .info_swipe_box{
    height:150px;
    overflow:hidden;
    background-color:#fff;
  }
  .app_info .info_swipe_box .info_swipe{
    width:3300px;
    height:100%;
    margin:0 0 0 -620px;
  }
  .app_info .info_swipe .info_swipe_item{
    float:left;
    margin:0 5px;
  }
  .app_info .info_swipe .info_swipe_item>img{
    width:320px;
  }
  .app_info .swipe_indicators{
    position:absolute;
    top:130px;
    left:50%;
    margin-left:-48px;
  }
  .app_info .swipe_indicators span.indicators_outer{
    display:block;
    width:8px;
    height:8px;
    border:1px solid #CCA45A;
    transform:rotate(45deg);
    float:left;
    margin:0 4px;
  }
  .app_info .swipe_indicators span.indicators_outer.active{
    transform:rotate(45deg) scale(1.3);
  }
  .app_info .swipe_indicators span.indicators_inner{
    position:absolute;
    width:6px;
    height:6px;
    background-color:#CCA45A;
    transform:rotate(45deg);
    top:2px;
    left:6px;
  }
  .app_info .info_news{
    background-color:#fff;
    margin-bottom:53px;
  }
  .app_info .info_news .news_list{
    margin:0;
  }
  .app_info .info_news .news_list .news_list_item{
    overflow:hidden;
    border-bottom:1px solid #ddd;
  }
  .app_info .info_news .news_list .news_list_item .new_list_item_title{
    width:230px;
    float:left;
    padding:15px;
  }
  .app_info .info_news .news_list .news_list_item .new_list_item_title .news_title{
    font-size:16px;
    color:#666;
  }
  .app_info .info_news .news_list .news_list_item .new_list_item_title .news_subtitle{
    font-size:10px;
    color:#aaa;
  }
  .app_info .info_news .news_list .news_list_item .new_list_item_title .news_subtitle .news_author{
    margin-right:10px;
  }
  .app_info .info_news .news_list .news_list_item img{
    width:120px;
    float:right;
    margin:17px;
    border-radius:5px;
  }
  .app_info .app_upnav .info_list{
    width:700px;
  }
  .app_info .app_upnav .info_list_item{
    margin:0 15px;
  }
  .app_info .app_upnav .active_line{
    left:82px;
  }

  .container_box{
    width:100%;
    overflow:hidden;
  }
  .container_list{
    width:800%;
    overflow:hidden;
    background-color:#fff;
  }
  .container_item{
    position:relative;
    width:414px;
    float:left;
  }
</style>