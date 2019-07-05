<template>
  <div class="group">
    <Top>
        <div slot="video" class="tit">
           <p >小组</p>
           <div class="icon" >
           <img src="../video/img/ic_actionbar_search_icon.png" >
            </div>
        <div class="icon" >

        <img src="../video/img/ic_chat_green.png" >
      </div>
        </div>
      </Top>
      <Newlist :groupData='groupData'></Newlist>
      <Hotlist :hotData='hotData'></Hotlist>
      <Videolist :videoData="videoData"></Videolist>


  </div>
</template>

<script>
import Top from '@/components/head/head'
import Newlist from '@/components/grouplist/newlist'
import Hotlist from '@/components/grouplist/hotlist'
import Videolist from '@/components/grouplist/videolist'

export default {

  data() {
    return {
groupData:"",
hotData:"",
videoData:""
    }
  },
  methods: {

  },
  components: {
   Top,Newlist,Hotlist,Videolist
  },
  mounted () {
   this.axios.get('./static/data/groupData.json').then((res)=>{

       this.groupData=res.data.group[0];
       this.hotData=res.data.group[1];
       this.videoData=res.data.group[2];


   }).catch((err)=>{
    console.log(err)
   })
  }


}
</script>

<style scoped lang='less'>

</style>
