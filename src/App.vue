<template>
  <div id="app">
    <jisu-header/>
    <left-components/>
    <view-container v-if="getWidget"/>
    <right-components/>
  </div>
</template>

<script>
import jisuHeader from './components/header'
import leftComponents from './components/leftComponents'
import rightComponents from './components/rightComponents'
import viewContainer from './components/viewContainer'
export default {
  name: 'app',
  computed: {
    getWidget () {
      return typeof this.$store.state.widgetId === 'number'
    }
  },
  components: {
    jisuHeader,
    leftComponents,
    rightComponents,
    viewContainer
  }
}
</script>
<style>
@import url('./css/pc_icomoon.css');
body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td{margin:0;padding:0}html{color:#666;overflow-y:scroll;overflow:-moz-scrollbars}body,button,input,select,textarea{font:14px Arial,'微软雅黑','Microsoft Yahei'}h1,h2,h3,h4,h5,h6{font-size:100%}em{font-style:normal}small{font-size:12px}ul,ol{list-style:none}a{text-decoration:none}a:hover{text-decoration:none}legend{color:#000}fieldset,img{border:0}button,input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}img{-ms-interpolation-mode:bicubic}textarea{resize:vertical}
html {
  background: #dcdcdc;
}
html,body,#app {
  height: 100%;
  overflow-y: hidden;
}
#id {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.scroll {
  overflow-x: hidden;
  overflow-y: auto;
}
.scroll::-webkit-scrollbar {
  width: 4px;
  height: 12px;
  border-radius: 12px;
}
.scroll::-webkit-scrollbar-thumb {
  background: #6B747A;
  border-radius: 12px;
}
.scroll::-webkit-scrollbar-track {
  background: #f5f5f5;
}
.setting-row {
  padding: 0 15px;
  margin-top: 15px;
}
.setting-row,.setting-embed,.setting-inline-block {
  line-height: 29px;
}
.setting-embed {
  display: block;
  margin-top: 15px;
}
.setting-embed-l10 {
  margin-top: 10px;
  padding-left: 10px;
}
.setting-inline-block {
  display: inline-block;
}
.setting-inline-block-l10 {
  display: inline-block;
  margin-left: 10px;
}
.setting-inline-block-l20 {
  display: inline-block;
  margin-left: 20px;
}
.setting-inline-block-r20 {
  display: inline-block;
  margin-right: 20px;
}
.yellow-font {
  color: #efbf1f;
  cursor: pointer;
}
.text-warn {
  color: #E63A37;
}
.inner-content {
  display: block;
}
.move-change {
  display: block;
  width: 100%;
  text-align: center;
  position: absolute;
  outline: 1px dashed #2cb9fe;
  cursor: move;
  z-index: 99
}
.select-border {
  display: block;
  position: absolute;
  border:1px solid transparent;
  z-index: 999;
  cursor: move;
}
.select-border:hover {
  border: 1px dashed rgb(243, 3, 3);
}
.phone-content .active {
  border: 1px dashed rgb(243, 3, 3);
}
.modify input[type=text] {
  width: 240px;
  height: 31px;
  color: #666;
  background: transparent;
  border: none;
  outline: 0;
  border-bottom: 1px dashed #666;
}
.affirm {
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  top: 10px;
  line-height: 20px;
  text-indent: 4px;
  border: 1px dashed transparent;
  cursor: pointer;
}
.affirm:hover {
  border: 1px dashed #EFBF1F;
  color: #EFBF1F;
}
</style>
