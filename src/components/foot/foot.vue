<template>
  <div class="foot">
     <ul>
       <li>
         <router-link to="/home">
             <img src="./img/ic_tab_home_normal.png" >
             <img src="./img/ic_tab_home_active.png" >
             <p>首页</p>
         </router-link>
       </li>
        <li>
         <router-link to="/video">
             <img src="./img/ic_tab_subject_normal.png" >
             <img src="./img/ic_tab_subject_active.png" >
             <p>书影音</p>
         </router-link>
       </li>
        <li>
         <router-link to="/borde">
             <img src="./img/ic_tab_group_normal.png" >
             <img src="./img/ic_tab_group_active.png" >
             <p>广播</p>
         </router-link>
       </li>
        <li>
         <router-link to="/group">
             <img src="./img/ic_tab_status_normal.png" >
             <img src="./img/ic_tab_status_active.png" >
             <p>小组</p>
         </router-link>
       </li>
        <li>
         <router-link to="/mine">
             <img src="./img/ic_tab_profile_normal.png" >
             <img src="./img/ic_tab_profile_active.png" >
             <p>我的</p>
         </router-link>
       </li>
     </ul>
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
.foot{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: .5rem;
  //  opacity: 1;
   background: #FFF;
  border-top: 1px solid #CCC;
  z-index: 9999;
  ul{
    display: flex;
    height: 100%;
    justify-content: center;
    li{
      flex: 1;



       a{
         display: flex;

         height: 100%;
         flex-direction: column;
         align-items: center;
         img{
           width: .26rem;
           height: .26rem;
           &:nth-child(1){
             display: block;
           }
            &:nth-child(2){
             display: none;
           }
         }
         p{
           color: #CCC;
           font-size: .12rem;
         }
       }

       .router-link-active{
         img:nth-child(1){
             display: none;
         }
          img:nth-child(2){
                display: block;
         }
         p{
           color: #42BD56;
         }
       }
    }
  }
}
</style>
