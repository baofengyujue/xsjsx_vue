<template>
  <div id="app">
    <h2>hello vuecli</h2>
    <img src="@/assets/logo.png" alt="">
    <h2>++{{ name }}</h2>
    <hr>
    <itembox></itembox>
  </div>
</template>

<style lang="scss">
.descr {
  color: green;
  border: solid 1px yellow;
  font-size: 80px;
}

</style>
<script>
import Itembox from "@/components/Itembox"
export default {
  data () {
    return {
      name: 'jj ww'
    }
  },
  components: {
    itembox: Itembox
  }
}
</script>
