<template>
  <div class="head" >
    <slot name="borde"></slot>
    <slot name="video"></slot>
     <slot name="group"></slot>
      <slot name="home"></slot>
      <slot name="mine"></slot>




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
 .head{
   position: absolute;
   top: 0;
   z-index: 999;

   width: 100%;
   height: .45rem;
   border-bottom: 1px solid #CCC;

   justify-content: space-between;
   align-items: center;

      }


    .head-inp{
      padding:0 .1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
     background: #42BD56;
    }




.icon{
  width: .23rem;
  height: auto;
  margin-right: .05rem;
}

 .inp{
      width: 2.67rem;
      height: .3rem;
      padding: 0  .15rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: .15rem;
       background: #FFF;
       input{
         flex: 1;
          padding: 0  .1rem;
          font-size: .12rem;
       }

     }
        .tit{
   height: 100%;
   padding: 0 .1rem;
  display: flex;
  background: #F7F7F7;
  align-items: center;
  p{
      flex: 1;
      font-size: .14rem;
  }
        }

</style>
