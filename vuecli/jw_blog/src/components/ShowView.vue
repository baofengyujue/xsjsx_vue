<template>
  <div class="showBox">
    <!--  key的值不能直接传到子组件中，会报错，所以定义了myKey，
      为的是观察一下值，没有其它用处-->
    <!--  这里key值要保证唯一性，且不能是对象  -->
    <BlogItem
      v-for="(item,idx) in listArr"
      :key="idx"
      :myKey="idx"
      :myItem="item"
    ></BlogItem>

    <div class="pageGroup">
      <div class="btn btnLeft" :class="pageNum==1?'disabled':''" @click="btnLeft">&lt; 上一页</div>
      <div class="btn btnRight" :class="rBtnDisabled?'disabled':''" @click="btnRight">下一页 &gt;</div>
    </div>
  </div>
</template>

<script>
import BlogItem from './BlogItem'
// import axios from 'axios';

export default {
  name: 'ShowView',
  data () {
    return {
      listArr: [],
      // 页码，第几页
      pageNum: 1,
      // 一页的项目条数，一页包含几条数据
      onePageNum: 5,
      // 下一页按钮是否禁用
      rBtnDisabled: false
    }
  },
  methods: {
    // 返回顶部方法
    scrTop () {
      // 这个回到顶部功能应该只给下一页使用，即使是下一页使用
      // 感觉对于调试来说好像很不友好
      // // 下一页回到顶部
      // // 判断浏览器支持性
      // if (document.body.scrollTop) {
      //   document.body.scrollTop = 0;
      // } else {
      //   document.documentElement.scrollTop = 0;
      // }
    },
    getData () {
      this.axios({
        url: 'https://ku.qingnian8.com/dataApi/blog/showBlog.php',
        params: {
          num: this.onePageNum,
          page: this.pageNum
        }
      }).then(res => {
        console.log(res)
        this.listArr = res.data
        // 一个简单的从前端判断是否还有数据的方法
        // 更合理的做法可能是从后端做判断
        // 可以改进的地方是怎么将获取的数据缓存在本地，如果有需要的话
        // 缓存多久失效怎么实现
        // 第二个可能需要改进的就是安全性，如果数据获取失败该怎么处理
        this.rBtnDisabled = this.listArr.length < this.onePageNum
      })
    },
    btnLeft () {
      if (this.pageNum == 1) {
        this.pageNum = 1
        return
      }
      this.pageNum--
      this.getData()
    },
    btnRight () {
      if (this.rBtnDisabled) {
        return
      }
      this.pageNum++
      this.getData()
    }
  },
  components: {
    BlogItem
  },
  created () {
    this.getData()
    if (this.listArr.length < this.onePageNum) {
      this.rBtnDisabled = true
    }
  }
}
</script>

<style scoped lang="scss">
.showBox {
  padding: 30px;
}

.pageGroup {
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn {
    border: solid 1px #42b983;
    padding: 10px 20px;
    font-size: 18px;
    margin: 0 10px;
    color: #42b983;
    transition: .3s;

    &:hover {
      background-color: #42b983;
      color: #fff;
      cursor: pointer;
    }

    &.disabled {
      cursor: no-drop;
      border: solid 1px #ddd;
      color: #aaa;
      background-color: #ddd;
    }
  }
}

</style>
