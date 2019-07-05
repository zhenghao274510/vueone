<template>
  <div class="home">
   <Top>
          <div class="head-inp"  slot="home">
            <div class="inp" >
                 <i class="icon"><img src="../home/img/ic_group_search_small.png" alt=""></i>
                 <input type="text" placeholder="搜索">
                 <i class="icon"><img src="../home/img/ic_scan_gray.png" alt=""></i>
            </div>
              <div class="icon" >
              <img src="./../../pages/home/img/ic_chat_white.png" >

              </div>
      </div>
   </Top>
    <Banner :delay='time' type='bullets'>
       <swiper-slide slot="home_s"><img src="./img/01.jpg" ></swiper-slide>
       <swiper-slide slot="home_s"><img src="./img/02.jpg" ></swiper-slide>
       <swiper-slide slot="home_s"><img src="./img/03.jpg" ></swiper-slide>
      </Banner>
       <Homelist :homeData="homeData"></Homelist>








  </div>


</template>

<script>
import Top from '@/components/head/head'
import Banner from '@/components/banner/banner'
import Homelist from '@/components/homelist/homelist'


export default {
  data() {
      return {
          time:1000,
         homeData:""
      }
    },
  methods: {

  },
  components: {
   Top,Banner,Homelist
  },
  mounted () {
    this.axios.get('./static/data/homeData.json').then((res)=>{
      this.homeData=res.data.recommend_feeds;
    }).catch((err)=>{
       console.log(err);
    })
  }
}



</script>

<style scoped lang='less'>

.home{

}
</style>
