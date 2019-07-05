<template>
  <div class="movielist" >
    <div class="item" v-for="(item,index) in movielist" :key="index">
      <p class="title">{{item.title}}</p>
        <ul class="movieinfo">
      <li v-for="(con,index) in item.movielist" :key="index">
          <img v-lazy="con.poster" :alt="con.plot_simple">
          <p>{{con.title}}</p>
          <span>评分:{{con.rating}}</span>
      </li>
    </ul>

    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
        movielist:[]
    }
  },
  methods: {

  },
  components: {

  },
  mounted () {
    this.axios.get('./static/data/movie.json').then((res)=>{
        // console.log(res.data.result)
        this.movielist=res.data.result;
    }).catch((err)=>{
     console.log(err)
    })
  }
}
</script>

<style scoped lang='less'>
.movielist{
  margin-top: .9rem;
  margin-bottom: .5rem;
  font-size: 0;
  overflow: hidden;
  .item{
    padding: .15rem 0;
    .title{
      font-size: .18rem;
      text-align: left;
      text-indent: .15rem;
      line-height: .3rem;
    }
    .movieinfo{
      display: flex;
      padding-left: .1rem;
      flex-flow: row wrap;
      li{
        width: 1rem;
        // height: 1.9rem;
        padding: .15rem 0;
        margin-right: .05rem;
        &:nth-child(3n){
          margin-right: 0;
        }
        img{
          width: 1rem;
          height: auto;
        }
        p{
          font-size: .14rem;
          line-height: .25rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        span{
          color: #CCC;
          font-size: .12rem;
        }
      }

    }
  }
}
</style>
