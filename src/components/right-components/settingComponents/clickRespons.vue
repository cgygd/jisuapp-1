<template>
  <div class="click-respons">
    <div class="tab-nav">
      <span v-for="(v,i) in text" :key="i" :class="i===isActive?'active':''" @click="clickTabNav(i)">{{v}}</span>
    </div>
    <div v-show="isActive===0"></div>
    <div v-show="isActive===1">
      <div class="setting-embed">
        <span>链接至：</span>
        <select-component @onshift='this.changeStyle' :sdata='{solid:"真是的", dashed:"假是的喽",double:"么么哒哦"}' vtype='v' vwidth='140px' class="setting-inline-block"/>
      </div>
      <span class="text-warn setting-embed">*注：小程序不支持“自定义链接”和“微页”</span>
    </div>
    <div v-show="isActive===2">
      <div class="setting-embed">
        <span>调用功能：</span>
        <select-component @onshift='this.changeStyle' :sdata='{solid:"真是的", dashed:"假是的喽",double:"么么哒哦"}' vtype='v' vwidth='140px' class="setting-inline-block"/>
      </div>
    </div>
  </div>
</template>
<script>
import selectComponent from './selectComponent'
import inputTxt from './inputText'
export default {
  name: 'clickRespons',
  data () {
    return {
      text: ['无', '页面', '点击功能'],
      isActive: 0
    }
  },
  methods: {
    clickTabNav (i) {
      this.isActive = i
    }
  },
  components: {
    selectComponent,
    inputTxt
  }
}
</script>
<style scoped>
.click-respons {
  padding: 0 15px;
  margin-top: 10px;
}
.tab-nav {
  width: 290px;
  height: 32px;
  margin: 0 auto;
  background: #d6d6d6;
  display: flex;
  overflow: hidden;
  line-height: 32px;
  border-radius: 2px;
}
.tab-nav span {
  box-sizing: border-box;
  width: 33.3333%;
  height: 100%;
  text-align: center;
  cursor: pointer;
}
.active {
  background: #959595;
}
</style>
