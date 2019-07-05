<template>
  <div class="borde">
    <Top>
        <div slot="video" class="tit">
           <p >广播</p>
           <div class="icon" >
           <img src="./img/ic_status_search_user.png" >
            </div>
        <div class="icon" >

        <img src="../video/img/ic_chat_green.png" >
      </div>
        </div>
      </Top>
      <div class="loginsend">
          <span class="showimg">

            </span>
            <span class="info">
               登录发广播
            </span>
      </div>
      <Bordelist></Bordelist>
      <Bordelist></Bordelist>
      <Bordelist></Bordelist>
       <div class="end"></div>
       <router-view></router-view>
  </div>
</template>

<script>
import Top from '../../components/head/head'
import Bordelist from './../../components/bordelist/bordelist'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
Top,Bordelist
  }
}
</script>

<style scoped lang='less'>
.loginsend{
  font-size: 0;
  padding: .1rem 0 .1rem .2rem;
  margin-top: .45rem;
  border-bottom: .01rem solid #CCC;
  display: flex;
  align-items: center;

  .showimg{
    display: inline-block;
    margin-right: .1rem;
    vertical-align: middle;
    width: .43rem;
    height: .43rem;
    border-radius: 50%;
    background: url('./img/user_normal.jpg') center center no-repeat;
    background-size: 100% 100%;
  }
  .info{
    font-size: .14rem;
    color:#CCC;
  }

}
 .end{
     width: 0;
     height: .5rem;

  }
</style>
