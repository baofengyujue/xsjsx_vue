<template>
  <div id="app">
    <HdView></HdView>
    <BannerView></BannerView>
    <MainView></MainView>
    <FooterView></FooterView>
  </div>
</template>

<script>
import HdView from "./components/HdView";
import BannerView from "./components/BannerView";
import MainView from "./components/MainView";
import FooterView from "./components/FooterView";

export default {
  components:{
    HdView,BannerView,MainView,FooterView
  }
}
</script>

<style lang="scss">
*{padding: 0;margin: 0;box-sizing: border-box}
</style>
