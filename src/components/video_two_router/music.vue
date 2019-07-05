<template>
  <div>
      <div class="musiclist">
         <p>排行榜</p>
      </div>


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

  },
  mounted () {
    this.axios.get('https://api.apiopen.top/musicRankings').then((res)=>{
        // console.log(res);
    }).catch((err)=>{
       console.log(err)
    })
  }
}
</script>

<style scoped lang='less'>
.musiclist{
  margin-top: 1rem;
}
</style>
