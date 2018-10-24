<template>
  <div class="app_infodetails">
    <back-more></back-more>
    <p class="info_title">惊心动魄！RNG完美团战锁定小组头名</p>
    <p class="info_subtitle">
      <span>电竞虎-LOL</span>
      <span>10-15 15:51</span>
    </p>
    <p class="info_content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小组赛第五天的比赛是关乎到B组战队的出线，经过了一天的激烈较量最终RNG携手NA LCS赛区的C9战队成功锁定八强席位。然而对于RNG来说今天的比赛并不轻松，在第一轮全胜的情况下第二轮的比赛开始却遭遇了两连败，险些丢失出线名额。</p>
    <p class="info_img">
      <img src="../../public/img/info/info1/1.png">
    </p>
    <p class="info_content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RNG在小组赛第二轮开始，首先负于了EU LCS赛区的VIT战队，紧接着在面对C9的比赛中也没能调整状态，彼时出线形势一下变得严峻起来，这是让任何人没有预料到的情况。除此之外，更让人大跌眼镜的是Gen.G在小组赛第二轮的比赛中未拿一胜，作为上届世界赛冠军的他们最终以1-5的战绩结束了他们的S8之旅。</p>
    <p class="info_img">
      <img src="../../public/img/info/info1/2.png">
    </p>
    <p class="info_content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RNG的起伏、Gen.G的爆冷与之对应的是欧美两赛区的强势崛起。VIT作为首次进入世界赛的队伍，小组赛中战胜了赛前公认的两大强队，要知道他们队伍中的三名选手仅仅打职业不到一年的时间，进步之快让人惊叹。</p>
    <p class="info_img">
      <img src="../../public/img/info/info1/3.png">
    </p>
    <p class="info_content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而作为世界赛的老常客C9，在第二轮的比赛中三连胜状态大好，最终逼得RNG与其通过加赛来争夺小组头名出线的资格。</p>
    <p class="info_img">
      <img src="../../public/img/info/info1/4.png">
    </p>
    <p class="info_content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在加赛中，C9拿出招牌的时光体系来克制Mlxg的梦魇，在前中期使RNG的节奏大乱。比赛进入到后期以后，阵容和时光的存在等让RNG的局面变得不容乐观，然鹅就在大龙坑双方拉锯的时候，Ming的洛找到机会开到对方关键的时光，接下来队伍五人零换四完美团战逆转局势一波拿下了比赛。</p>
    <p class="info_img">
      <img src="../../public/img/info/info1/5.gif">
    </p>
    <p class="info_content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这场RNG和C9的头名之争可谓是惊心动魄，如果不是有一个完美的开团，这场比赛的结果或许就会反转。在后期时光大招快速转好的情况下，解说也称这个团战不知道RNG怎么样才能打赢，但是当最后一波团战结束后，RNG用实际行动告诉了我们。</p>
    <p class="info_content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最终，RNG以B组头名出线携手C9率先晋级到淘汰赛中。距离淘汰赛还有好几天的时间，希望RNG利用好休赛的几天好好总结小组赛的经验教训，认真准备给我们LPL带来更好的成绩。</p>
    <div class="info_like">
      <span class="like_btn">
        <img src="../../public/img/info/new_version_normal_like_image@2x.png">
      </span>
      <span class="unlike_btn">
        <img src="../../public/img/info/new_version_normal_unlike_image@2x.png">
      </span>
    </div>
    <div class="info_share">
      <span class="left_line"></span>
      <span class="share_text">分享</span>
      <span class="right_line"></span>
      <div class="share_btn">
        <span class="wechat_btn">
          <img src="../../public/img/info/share_btn_weixin_img_icon_normal@2x.png">
        </span>
        <span class="monents_btn">
          <img src="../../public/img/info/share_btn_friend_img_icon_normal@2x.png">
        </span>
        <span class="qq_btn">
          <img src="../../public/img/info/share_btn_qq_img_icon_normal@2x.png">
        </span>
      </div>
    </div>
    <comment></comment>
  </div>
</template>
<script>
  import BackMore from './BackMore';
  import Comment from './Comment';
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

    },
    components:{
      "backMore":BackMore,
      "comment":Comment
    }
  }
</script>
<style>
  p{
    margin:0;
  }
  .app_infodetails{
    width:100%;
    padding-bottom:60px;
  }
  .app_infodetails:before{
    display:table;
    content:'';
  }
  .app_infodetails .info_title{
    width:90%;
    font-size:25px;
    line-height:30px;
    color:#000;
    margin:61px auto 10px;
  }
  .app_infodetails .info_subtitle{
    width:90%;
    overflow:hidden;
    font-size:14px;
    color:#aaa;
    margin:10px auto;
  }
  .app_infodetails .info_subtitle span:first-child{
    float:left;
  }
  .app_infodetails .info_subtitle span:last-child{
    float:right;
  }
  .app_infodetails .info_content{
    width:90%;
    font-size:16px;
    color:#000;
    margin:20px auto 0;
  }
  .app_infodetails .info_img{
    width:90%;
    margin:20px auto 0;
  }
  .app_infodetails .info_img>img{
    width:100%;
  }

  .info_like{
    display:flex;
    justify-content:center;
  }
  .info_like span{
    text-align:center;
    margin:40px 20px 0;
  }
  .info_like span img{
    width:65%;
    border:1px solid #ddd;
    border-radius:50%;
  }
  .info_share{
    width:80%;
    overflow:hidden;
    margin:30px auto;
  }
  .info_share .left_line{
    width:10%;
    height:1px;
    background-color:#aaa;
    float:left;
    margin-top:8px;
    margin-left:105px;
  }
  .info_share .share_text{
    font-size:12px;
    color:#999;
    float:left;
    margin:0 15px;
  }
  .info_share .right_line{
    width:10%;
    height:1px;
    background-color:#aaa;
    float:left;
    margin-top:8px;
  }
  .info_share .share_btn{
    display:flex;
    justify-content:space-around;
    margin-top:20px;
  }
  .info_share .share_btn span img{
    width:60px;
  }
</style>