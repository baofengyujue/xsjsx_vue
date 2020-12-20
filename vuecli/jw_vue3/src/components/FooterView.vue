<template>
  <div class="footer">
    <div class="ftCon">
      底部区域&copy;jack518.com 2020
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterView"
}
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  background-color: #ccc;
  .ftCon{
    width: 1200px;
    margin: 0 auto;
    height: 100px;
    line-height: 100px;
    font-size: 20px;
    text-align: center;
    background-color: orange;
  }

}

</style>
