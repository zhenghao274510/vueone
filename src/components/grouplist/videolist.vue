<template>
      <div class="group_new" >
        <h3 v-text="videoData.title"></h3>
        <ul class="end">
          <li v-for="(item,index) in videoData.group_list" :key="index">
              <div class="info">
                <div class="fl-l">
                  <img v-lazy="item.img_url"> <span >{{item.group_name}}</span>
                </div>

               <span fl-r>{{item.group_member}}</span>
              </div>
              <p>{{item.topic_title}}</p>
          </li>
          <li>更多相关影视</li>
        </ul>

  </div>
</template>

<script>
export default {
  props: ['videoData'],
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
.group_new{
   padding-left: .2rem;
   h3{
     height: .35rem;
     line-height: .35rem;
     font-size: .18rem;
     text-align: left;
   }

   ul{
     overflow: hidden;
     margin-bottom: .5rem;
     li{
       padding: .15rem 0;
       border-bottom: .01rem solid #CCC;
       font-size: .14rem;
       &:last-child{
         border-bottom: none;
         color: #42BD56;
       }
       .info{
            display: flex;
            justify-content: space-between;
            .fl-l{
              font-size: 0;
              display: flex;
              justify-content: space-between;
                img{
              width: .39rem;
              height: .36rem;
              margin-right: .1rem;
                 }
            span{
              color: #000;
              font-size: .14rem;
              }
            }
            span{
              font-size: .14rem;
              color: #AAAAAA;
            }

       }
          p{
            line-height: .35rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
           font-size: .14rem;
           color: #AAAAAA;
        }
     }

   }
}
</style>
