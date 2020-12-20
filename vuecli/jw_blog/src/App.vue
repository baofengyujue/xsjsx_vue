<template>
  <div id="app">
    <HdView></HdView>
    <div class="main">
      <router-view></router-view>
    </div>
    <FtView></FtView>
  </div>
</template>

<script>
import HdView from './components/HdView'
import FtView from './components/FtView'

export default {
  components: {
    HdView,
    FtView
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Microsoft YaHei', cursive
}

a {
  text-decoration: none
}

ul, ol {
  list-style: none
}

#app {
  width: 1000px;
  margin: 0 auto;
  border: solid 1px #42b983;
  box-shadow: 0 0 20px rgba(66,185,131,.5);
}

.main {
  min-height: 200px;
}

</style>
