<template>
  <div >
      <Top>
          <div slot="mine" class="tit">
           <p >我的</p>
        <div class="icon" >

        <img src="../../pages/mine/img/ic_settings.png" >
      </div>
        </div>
         </Top>




    <div class="bg">
      <div>
 <i class="fa fa-lock" ></i>
 <p>密码管理</p>
      </div>
      <div>
 <i class="fa  fa-credit-card-alt"></i>
 <p>银行卡管理</p>
      </div>


    </div>
    <ul class="info">
<li><div class="left"><i class="fa fa-sticky-note"></i><span>风险承受评估</span></div><i class="fa fa-chevron-right"></i></li>
<li><div class="left"><i class="fa fa-sticky-note"></i><span>安全保障</span></div><i class="fa fa-chevron-right"></i></li>
<li><div class="left"><i class="fa fa-sticky-note"></i><span>我的关注</span></div><i class="fa fa-chevron-right"></i></li>
<li><div class="left"><i class="fa fa-sticky-note"></i><span>帮助中心</span></div><i class="fa fa-chevron-right"></i></li>
<li><div class="left"><i class="fa fa-sticky-note"></i><span>关于我们</span></div><i class="fa fa-chevron-right"></i></li>
<li><div class="left"><i class="fa fa-sticky-note"></i><span>检查更新</span></div><i class="fa fa-chevron-right"></i></li>
<li><div class="left"><i class="fa fa-sticky-note"></i><span>联系客服</span></div><i class="fa fa-chevron-right"></i></li>
    </ul>




  </div>
</template>

<script>
import Top from './../../components/head/head'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
Top
  }
}
</script>

<style scoped lang='less'>

.bg{
 margin-top: .45rem;
 padding: .15rem 0;
 display: flex;
 justify-content: space-around;
 div{
   font-size: 0;
     i{
       color: green;
       font-size: .32rem;
     }
     p{
       line-height: .3rem;
       font-size: .14rem;
     }
 }
}
.info{
  font-size: 0;
  border-top: 1px solid #CCC;
  li{
    height: .5rem;
    display: flex;
    align-items: center;
    padding:0 .1rem ;
    border-bottom: 1px solid #CCC;
    justify-content: space-between;
    .left{
     i{
      color: green;
      font-size: .2rem;
        }
    span{
      display: inline-block;
      font-size: .14rem;
      margin-left: .1rem;
       }
    }
    i{
      color: green;
      font-size: .2rem;
    }


  }
}
</style>
