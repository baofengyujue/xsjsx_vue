<template>
  <div class="footer">
    <div>
      本博客系统由
      <a href="http://jack518.com" target="_blank">Jack518.com</a><sup>&copy;</sup>
      提供
      <span class="time">2020-12-12</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FtView'
}
</script>

<style scoped lang="scss">
.footer {
  height: 70px;
  background-color: #2d7c57;
  color: #fff;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    opacity: .8;

    a {
      color: #fff;

      &:hover {
        text-decoration: underline;
      }
    }

    .time {
      font-size: 16px;
    }
  }
}
</style>
