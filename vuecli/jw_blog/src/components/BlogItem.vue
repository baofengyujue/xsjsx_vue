<template>
  <div class="item-box">
    <div class="top">
      <h2>{{myItem.title}},{{myKey}}</h2>
      <div class="time">{{changeTime(myItem.posttime,'Y-m-d H:i')}}</div>
    </div>
    <div class="middle">
      {{myItem.content}}
    </div>
    <div class="bottom">
      <div class="list">
        所属分类：
        <span>{{myItem.classify}}</span>
      </div>
      <div class="author">
        作者：
        <span>{{myItem.author}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import jwCommon from '../assets/js/jwCommon'

console.log(jwCommon.myGetStr('jack', 3))

export default {
  name: 'BlogItem',
  props: {
    myItem: {
      type: Object,
      // 注意：对象默认值要为函数形式
      default: function () { return {} }
    },
    // myTitle:{
    //   type: String,
    //   default: ''
    // },
    // myContent: String,
    myKey: Number
  },
  methods: {
    changeTime: jwCommon.changeTime
  }
}
</script>

<style scoped lang="scss">
.item-box {
  padding: 30px 0;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;

    h2 {
      font-size: 26px;
      color: #333;
      width: 750px;
      //为了不要文字溢出去，
      //研究一下这几个的区别和作用
      word-wrap: break-word;
      white-space: normal;
      word-break: break-all;
    }

    .time {
      font-size: 14px;
      color: #666;
    }
  }

  .middle {
    background-color: #eee;
    border-radius: .4em;
    padding: 15px 10px;
    font-size: 18px;
    color: #444;
    line-height: 1.8em;
    margin-bottom: 10px;
    word-wrap: break-word;
    white-space: normal;
    word-break: break-all;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #666;
  }
}
</style>
