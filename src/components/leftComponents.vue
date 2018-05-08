<template>
<div class="left-components">
  <div class="operate-navs">
    <span @click="SpanClick" :class="isPageActive?'active':''"><i class="icon-page"></i>页面管理</span>
    <span @click="SpanClick" :class="isComponentActive?'active':''"><i class="icon-conponent"></i>组件库</span>
  </div>
  <page v-show="isPageActive"/>
  <widgets v-show="isComponentActive" :widgetnav='this.widgetNav'/>
</div>
</template>
<script>
import Page from './left-components/page'
import Widgets from './left-components/widgets'
export default {
  name: 'leftComponents',
  data () {
    return {
      isPageActive: true,
      isComponentActive: false
    }
  },
  computed: {
    widgetNav () {
      return this.$store.state.widgetNav
    }
  },
  methods: {
    SpanClick () {
      this.isComponentActive = !this.isComponentActive
      this.isPageActive = !this.isPageActive
    }
  },
  components: {
    Page,
    Widgets
  }
}
</script>
<style scoped>
.left-components {
  position: fixed;
  width: 300px;
  height: 100%;
  left: 0;
  top: 0;
  text-align: left;
  z-index: 99;
}
.operate-navs {
  position: relative;
  width: 100%;
  height: 54px;
  line-height: 55px;
  border-bottom: 1px solid #c6c6c6;
  font-size: 0;
}
.operate-navs::before {
  content: '';
  position: absolute;
  right: -3px;
  top: 12px;
  width: 0;
  height: 32px;
  border-right: 1px solid #dcdcdc;
}
span {
  height: 54px;
  width: 50%;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  letter-spacing: normal;
}
i {
  display: inline-block;
  font-size: 25px;
  vertical-align: middle;
  margin-right: 3px;
}
.active {
  color: #EFBF1F;
  height: 55px;
  border-bottom: 2px solid #EFBF1F;
}
.active::before {
  content: '';
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px;
  border-color: transparent;
  bottom: -1px;
  left: 73px;
  border-bottom-color: #EFBF1F;
}
</style>

