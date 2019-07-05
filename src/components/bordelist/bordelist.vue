<template>
  <div class="bordelist">
      <div class="fl-l">
       豆
       </div>
      <div class="fl-r">
         <p><span class="name">豆瓣</span> <span class="title">写了日记</span></p>
         <p class="time">2018-5-23 10:39:23</p>
         <div class="content">
           <p>5月23日 凌晨3:00~6:00豆瓣停机维护</p>
            <p class="main">因业务发展需要，豆瓣计划5月24日（星期四）凌晨3:00~6:00对服务器进行机房迁移，迁移期间豆瓣所有相关</p>
         </div>
         <div class="iconlist">
           <p><i class="fa fa-thumbs-o-up" ></i> <span>29</span></p>
      <p><i class="fa fa-commenting-o" ></i><span>14</span></p>
        <p><i class="fa fa-retweet" ></i><span>25</span></p>
        <i class="fa fa-ellipsis-h" ></i>
         </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.bordelist{
  padding: .2rem .25rem .2rem .15rem;
  overflow: hidden;
  display: flex;
  justify-content: baseline;
  .fl-l{
  //  float: left;
   margin-right: .1rem;
   width: .43rem;
   height: .43rem;
   line-height: .43rem;
   text-align: center;
   color: #FFF;
   border-radius: 50%;
   background: #05BF11;
   font-size: .32rem;
   vertical-align: top;

  }
  .fl-r{
    // float:right;
    width: 2.35rem;
    text-align: left;
    font-size: .14rem;



      .title{
        color: #CCC;
      }
      .time{
        font-size: .12rem;
        color: #B6B6B6;
      }
    }
    .content{
      padding: .2rem;
      background: #F9F9F9;

      .main{
        margin-top: .08rem;
        font-size: .12rem;
        color: #B5B5B5;
        display: -webkit-box;
      -webkit-box-orient: vertical;
     -webkit-line-clamp: 3;
       overflow: hidden;
      }

    }
     .iconlist{
        margin: .1rem;
         font-size: .16rem;
         color: #CCC;
         display: flex;
         align-items: center;
         justify-content: space-between;
      
      }

}
</style>
