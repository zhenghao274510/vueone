<template>
  <div class="homelist">
    <ul>
      <li v-for="(item,index) in homeData" :key="index">
        <a href="#">
           <div class="info">
         <p class="title">{{item.title}}</p>
         <span>{{item.target.desc}}</span>
         <p class="name">作者：{{item.target.author.name}}</p>
          </div>
        <div class="img"><img v-lazy="item.target.cover_url" ></div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['homeData'],
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  },mounted () {
    // console.log(this.homeData)
  }
}
</script>

<style scoped lang='less'>
.homelist{
  flex: 1;
  overflow-y: auto;

  margin-top: .1rem;
  ul{

    padding: 0 0 0 .1rem;
    margin-bottom: .5rem;
    li{
      padding: .1rem .1rem .15rem 0;
      height: 1.45rem;
      border-bottom: .01rem solid #CCC;
     &:last-child{
       border-bottom: none;
     }
      a{
        display: flex;
       font-size: .14rem;
      justify-content: space-between;
      align-items: center;
      text-align: left;

        .info{

          width: 1.9rem;
          .title{
            color: #494949;
            margin-bottom: .05rem;
          }
          span{

            -webkit-line-clamp:2;
            display: -webkit-box;
            -webkit-box-orient:vertical;
            overflow:hidden;
            text-overflow: ellipsis;
           color: #999999;
           height: .4rem;


          }
          .name{
            margin-top: .05rem;
            color:#CCCCCC;
          }

        }
        .img{
          width: 1rem;
          height: 1rem;
          margin-left: .05rem;
          img{
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
