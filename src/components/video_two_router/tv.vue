<template>
  <div class="tvlist">
    <div class="tv_cont" v-for="(item,index) in tvlist" :key="index">
    <p class="title">{{item.title}}</p>
       <ul>
         <li v-for="(con,ind) in item.tvlist" :key="ind">
           <img v-lazy="con.poster">
           <p class="deatil">分类:{{con.genres}}</p>
           <p class="name">{{con.title}}</p>
         </li>
       </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
       tvlist:[]
    }
  },
  methods: {

  },
  components: {

  },
  mounted () {
     this.axios.get('./static/data/tvData.json').then((res)=>{
            // console.log(res)
            this.tvlist=res.data.result;
     }).catch((err)=>{

     })
  }

}
</script>

<style scoped lang='less'>
.tvlist{
    margin-top:.9rem;
  padding: .1rem 0 .5rem .1rem;
  .tv_cont{
    font-size: 0;
     .title{
    line-height: .3rem;
    font-size: .14rem;
    text-align: left;
    text-indent: .1rem;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    li{
      font-size: .14rem;
      width: 32%;
      padding: .1rem;


      .name{
        color: #999;

        overflow: hidden;
     text-overflow:ellipsis;
     white-space: nowrap;
      }
      .deatil{

        color:#CCC;
       overflow: hidden;
    text-overflow:ellipsis;
     white-space: nowrap;
      }


    }
  }
  }

}
</style>
