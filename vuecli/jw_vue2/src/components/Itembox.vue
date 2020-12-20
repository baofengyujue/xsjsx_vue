<template>
  <div class="box">
    <h2>Jack518</h2>
    <p class="descr">hello</p>
  </div>
</template>

<script>
export default {
  name: "Itembox",
  data(){

  }
}
</script>

<!--虽然scoped能够将作用域进行限制
但其作用有限，选择器的权重和App.vue中的比较，
谁高谁渲染，只有在平级的情况下，scoped有效-->
<style lang="scss" scoped>
.box{
  border: solid 1px red;
}
.descr {
  border: solid 1px purple;
  font-size: 30px;
}

</style>
