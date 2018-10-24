<template>
  <div class="app_comment">
    <input type="text" placeholder="我也来说两句">
    <span class="btn_comment" @click="">
      <img src="../../public/img/info/news_show_comment_btn_bg_hover@2x.png">
    </span>
    <span class="btn_collect" @click="">
      <img src="../../public/img/info/wall_paper_tab_enshrine_view_normal@2x.png">
    </span>
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
    created(){}
  }
</script>
<style>
  .app_comment{
    position:fixed;
    bottom:0;
    width:100%;
    background-color:#fff;
    border-top:1px solid #ddd;
    padding:5px;
  }
  .app_comment input{
    width:70%;
    height:25px;
    border-radius:3px;
    border:0;
    background-color:#eee;
    float:left;
    margin-right:30px;
    padding-left:10px;
  }
  .app_comment span{
    float:left;
    padding-top:3px;
  }
  .app_comment .btn_comment{
    margin-right:25px;
  }
  .app_comment .btn_comment img{
    width:21px;
  }
  .app_comment .btn_collect img{
    width:21px;
  }
</style>