<template>
  <div class="header">
    <div class="logo" @click="clickLogo">
      <img src="@/assets/jack518.png" alt="logo">
      <div class="txt">
        <span>Jack518</span>
        博客空间
      </div>
    </div>
    <div class="nav">
      <router-link to="/show">博客列表</router-link>
      <router-link to="/add">添加博客</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HdView',
  methods: {
    clickLogo () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  background-color: #42b983;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  .logo {
    &:hover{
      opacity: .8;
    }
    cursor: pointer;
    display: flex;
    align-items: center;
    img{
      border-radius: .4em;
    }
    .txt{
      padding-left: 10px;
      color: #fff;
      font-size: 14px;
      span{
        display: block;
        font-size: 20px;
      }
    }
  }
  .nav{
    display: flex;
    a{
      display: block;
      border-radius: .4em;
      padding: 5px 15px;
      font-size: 18px;
      margin-left: 10px;
      color: #fff;
      &:hover,&.router-link-active{
        background-color: #fff;
        color: #42b983;
      }
    }
  }
}
</style>
