<template>
  <div class="video">
    <Top>
        <div slot="video" class="tit">
           <p >书影音</p>
           <div class="icon" >
           <img src="./img/ic_actionbar_search_icon.png" >
            </div>
        <div class="icon" >

        <img src="./img/ic_chat_green.png" >
      </div>
        </div>
      </Top>
      <ul class="video_nav" @click="change($event)">
        <li><router-link to="/video/movie" :class="{active:flage}">电影</router-link></li>
        <li><router-link to="/video/read">读书</router-link></li>
        <li><router-link to="/video/tv">电视</router-link></li>
        <li><router-link to="/video/city">同城</router-link></li>
        <li><router-link to="/video/music">音乐</router-link></li>
      </ul>


      <div>

        <router-view></router-view>
      </div>


  </div>
</template>

<script>
import Top from '../../components/head/head'
export default {
  data() {
    return {
       flage:true
    }
  },
  methods: {
    change(e){
      this.flage=false;
      e.target.className='active';


    }
  },
  components: {
   Top
  }
}
</script>

<style scoped lang='less'>
.video_nav{
  position: absolute;
  top: .42rem;
  width: 100%;
  height: .45rem;
  display: flex;
  align-items: center;
  background: #FFF;
  border-bottom: .01rem solid #CCC;
  li{
    flex: 1;
    height: 100%;
     a{
       display: block;
       width: 100%;
       height: 100%;
       line-height: .45rem;
       color: #999999;
       font-size: .14rem;
       text-align: center;
     }
  }
  .active{
    background: #07D614;

      color: #FFF;


  }
}
</style>
