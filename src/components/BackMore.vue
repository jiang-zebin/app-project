<template>
  <div class="app_backmore">
    <span class="btn_back" @click="goBack()">
      <img src="../../public/img/info/common_back_white_normal@2x.png">
    </span>
    <span class="btn_more">
      <img src="../../public/img/info/common_more_white_normal@2x.png">
    </span>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        nid:this.$route.params.nid
      }
    },
    methods:{
      goBack(){
        history.go(-1)
      }
    },
    created(){

    }
  }
</script>
<style>
  .app_backmore{
    position:fixed;
    width:100%;
    background-color:#fff;
    border-bottom:1px solid #ddd;
  }
  .app_backmore .btn_back{
    width:25px;
    height:25px;
    float:left;
    margin:10px 20px;
  }
  .app_backmore .btn_more{
    width:25px;
    height:25px;
    float:right;
    margin:10px 20px;
  }
  .app_backmore .btn_back img{
    height:25px;
  }
  .app_backmore .btn_more img{
    width:25px;
  }
</style>