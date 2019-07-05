<template>
  <div id="app">

    <router-view/>


    <Foot></Foot>
  </div>
</template>

<script>
import Foot from './components/foot/foot'

import SetFont from '../static/js/font'
export default {
  name: 'App',
  components: {
  Foot
  },
  mounted () {
    this.$router.push('/home');
    SetFont.setFont();
    window.onresize=SetFont.setFont;

  }
}
</script>

<style>
@import url('../static/css/common');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
