<template>
  <div class="header">
    <div class="hdCon">
      <div class="logo">Jack518.com</div>
      <div class="phone-num">15870579952</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HdView"
}
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  width: 100%;
  background-color: #ccc;
  .hdCon{
    width: 1200px;
    height: 100%;
    background-color: green;
    color: #fff;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  .logo {
    font-size: 26px;
  }
}
</style>
