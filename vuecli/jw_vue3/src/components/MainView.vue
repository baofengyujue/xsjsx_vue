<template>
  <div class="main">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>
</template>

<script>
export default {
name: "MainView"
}
</script>

<style scoped lang="scss">
.main{
  width: 1200px;
  margin: 10px auto;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  .box {
    width: 30%;
    height: 300px;
    background-color: #42b983;
  }
}
</style>
