<template>
  <div class="widgets">
    <div class="often-tab">
      <widget v-for="(val,i) in this.widgetIconInfo" :key="i" :iconinfo='val'/>
    </div>
    <div class="top-tab-nav">
      <span v-for="(v,i) in tabNameTitle" :class="i===tabNameActive?'active':''" :key="i" @click="shiftTab(i)">{{v}}</span>
    </div>
    <div class="tab-content">
      <div v-for="(v,i) in this.tabContent" :key="i" class="tab-wrap" :class="i===tabNameActive?'active':''">
        <widget v-for="(val,n) in v" :key="n" :iconinfo='val'/>
      </div>
    </div>
  </div>
</template>
<script>
import Widget from './widget'
export default {
  name: 'widgets',
  props: ['widgetnav'],
  data () {
    return {
      tabNameKey: ['layout', 'senior', 'oter'],
      tabNameActive: 0,
      tabNameTitle: ['布局', '高级', '其它']
    }
  },
  components: {
    Widget
  },
  methods: {
    shiftTab (i) {
      this.tabNameActive = +i
    }
  },
  computed: {
    widgetIconInfo () {
      return this.widgetnav.often
    },
    tabContent () {
      let d = this.widgetnav
      return [d.layout, d.senior, d.oter]
    }
  }
}
</script>
<style scoped>
.widgets {
  background: #f5f5f5;
  height: calc(100% - 55px);
}
.often-tab {
  font-size: 0;
}
.top-tab-nav {
  width: 100%;
  height: 50px;
  background: #f6f6f6;
  margin-top: -1px;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  font-size: 0;
  text-align: center;
}
.top-tab-nav span {
  width: 33%;
  height: 51px;
  display: inline-block;
  box-sizing: border-box;
  line-height: 51px;
  font-size: 14px;
  color: #858585;
  cursor: pointer;
}
span.active {
  border-bottom: 2px solid #EFBF1F;
  color: #EFBF1F;
}
.tab-content {
  width: 100%;
  height:calc(100% - 338px);
  font-size: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
.tab-content::-webkit-scrollbar {
  width: 4px;
  height:12px;
  border-radius: 12px;
}
.tab-content::-webkit-scrollbar-thumb {
  background: #6B747A;
  border-radius: 12px;
}
.tab-content::-webkit-scrollbar-track {
  background: #f5f5f5;
}
.tab-wrap {
  display: none;
}
.tab-content .active {
  display: block;
}
</style>
