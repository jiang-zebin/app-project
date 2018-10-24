<template>
  <div class="app_loginpage">
    <div class="login_page">
      <div class="user_detail">
        <div class="detail_inside">
          <div class="inside_bigborder">
            <img src="img/home/personal_content_main_head_bg@2x.png">
            <img src="img/home/left_scan_hl@2x.png">
            <img src="img/home/login_tourists_btn_arrow_press@2x.png">
            <img src="img/home/left_edit@2x.png">
            <img src="img/home/chat_room_push_news_default_header@2x.png">
            <div class="user_message">
              <span class="user_name">昵称</span>
              <span class="user_level">Lv3</span>
              <span class="user_sex">
                <img src="img/home/friend_cycle_sex_dark_male@2x.png">
              </span>
            </div>
            <hr>
            <div class="other_message">
              <ul class="message_list">
                <li class="message_list_item">
                  <p>0</p>
                  <p>关注</p>
                </li>
                <li class="message_list_item">
                  <p>0</p>
                  <p>粉丝</p>
                </li>
                  <li class="message_list_item">
                    <p>0</p>
                    <p>好友</p>
                  </li>
                  <li class="message_list_item">
                    <p>0</p>
                    <p>发表</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="inside_smallborder"></div>
          </div>
        </div>
      <div class="the_list">
        <a class="the_list_item">
          <img src="img/home/left_message@2x.png">
          <span>与我相关</span>
        </a>
        <a class="the_list_item">
          <img src="img/home/left_activity@2x.png">
          <span>活动中心</span>
        </a>
        <a class="the_list_item">
          <img src="img/home/left_order@2x.png">
          <span>我的订单</span>
        </a>
        <a class="the_list_item">
          <img src="img/home/left_mymission@2x.png">
          <span>我的任务</span>
        </a>
        <a class="the_list_item">
          <img src="img/home/left_collect@2x.png">
          <span>我的收藏</span>
        </a>
      </div>
      <div class="login_footer">
        <a class="login_footer_item">
          <img src="img/home/left_setting@2x.png">
          <span>设置</span>
        </a>
        <a class="login_footer_item">
          <img src="img/home/left_find@2x.png">
          <span>发现</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        
      }
    },
    methods:{
      
    },
    created(){},
  }
</script>
<style>
  .app_loginpage{
    position:fixed;
    width:320px;
    height:736px;
    top:0;
    z-index:-1;
  }
  .app_loginpage .login_page{
    position:absolute;
    top:0;
    width:320px;
    height:100%;
    background-image:url(../../public/img/home/left_bg.jpg);
    background-position:center center;
    background-size:320px 736px;
  }
  .app_loginpage .login_page .user_detail{
    width:100%;
    height:200px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder{
    width:280px;
    height:170px;
    border:1px solid #BA9A6C;
    background-color:rgba(0,0,0,.5);
    margin:65px auto;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder .user_message{
    position:absolute;
    top:100px;
    left:140px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder .user_message .user_name{
    color:white;
    margin-right:3px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder .user_message .user_level{
    background:#fff;
    color:#49A773;
    border-radius:3px;
    font-size:8px;
    padding:0px 3px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder .user_message .user_sex>img{
    position:absolute;
    margin:5px 0 0 3px;
    width:15px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder hr{
    width:80%;
    border:0;
    border-top:1px solid #3C3C3C;
    position:absolute;
    top:140px;
    left:32px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder .other_message .message_list{
    margin-top:100px;
    margin-left:18px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder .other_message .message_list_item{
    float:left;
    margin:0 18px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder .other_message .message_list_item>p:first-child{
    font-size:16px;
    font-weight:bold;
    color:#BA9A6C;
    text-align:center;
    margin-bottom:5px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder .other_message .message_list_item>p:last-child{
    color:#fff;
    font-size:12px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_smallborder{
    position:absolute;
    width:270px;
    height:3px;
    border:1px solid #997E59;
    top:234px;
    left:25px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder>img:first-child{
    width:50px;
    position:absolute;
    top:35px;
    left:139px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder>img:nth-child(2){
    width:20px;
    position:absolute;
    top:75px;
    left:30px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder>img:nth-child(3){
    width:10px;
    position:absolute;
    top:75px;
    left:280px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder>img:nth-child(4){
    width:12px;
    position:absolute;
    top:75px;
    left:140px;
  }
  .app_loginpage .login_page .user_detail .detail_inside .inside_bigborder>img:nth-child(5){
    position:absolute;
    width:40px;
    top:43px;
    left:144px;
    border-radius:50%;
  }
  .app_loginpage .login_page .the_list{
    margin-left:40px;
  }
  .app_loginpage .login_page .the_list_item{
    display:block;
    margin-bottom:20px;
    overflow:hidden;
  }
  .app_loginpage .login_page .the_list_item img{
    width:22px;
    float:left;
    margin-right:30px;
  }
  .app_loginpage .login_page .the_list_item span{
    color:#fff;
    font-size:14px;
    float:left;
    padding-top:1px;
  }
  .app_loginpage .login_page .login_footer{
    display:flex;
    justify-content:space-between;
    width:85%;
    margin-top:200px;
    margin-left:22px;
  }
  .app_loginpage .login_page .login_footer .login_footer_item{
    display:block;
    background:rgba(0,0,0,0.5);
    width:70px;
    height:35px;
    line-height:35px;
    text-align:center;
    border-radius:5px;
    overflow:hidden;
  }
  .app_loginpage .login_page .login_footer .login_footer_item img{
    width:20px;
    float:left;
    margin:8px;
  }
  .app_loginpage .login_page .login_footer .login_footer_item span{
    color:#fff;
    font-size:13px;
    float:left;
    padding-top:1px;
  }
</style>