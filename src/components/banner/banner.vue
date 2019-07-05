<template>
  <div class="banner">

     <swiper :options="swiperOption" >
    <!-- slides -->
      <slot name="home_s"></slot>

    <!-- Optional controls -->
         <!-- 分页器 -->
         <div class="swiper-pagination"  slot="pagination" ></div>

        </swiper>

  </div>
</template>

<script>
export default {
  props: {
      delay:{
        type:Number,
        default:1000
      },
      effect:{
        type:String,
        default:'slide'
      },
      type:{
        type:String,
        default:'bullets'
      }

  },
  data() {
    return {
    swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          autoplay:true,
          delay:this.delay,
          loop:true,
          effect:this.effect,

        pagination: {
          el: '.swiper-pagination',
          type: this.type

           },
        },



    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.banner{
  margin-top: .45rem;
}
.swiper-pagination{
  position: absolute;
  bottom: -20px;

  width: 95%;
  text-align: right;


    .swiper-pagination-bullet-active{
      opacity: 1;
      background: #FFF ;
    }

}

</style>
