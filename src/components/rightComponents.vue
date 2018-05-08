<template>
  <div class="right-components" v-if="isRightActive">
    <div class="top-tab-nav">
      <span v-for="(v,i) in getTabNavName" :key="i" :class="i===tabNavActive?'active':''" @click="shiftTabNav(i)">{{v}}</span>
    </div>
    <router-view :key="getWidgetId"></router-view>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'rightCompoents',
  data () {
    return {
      tabNav: ['文本组件', '组件样式'],
      tabNavActive: 0
    }
  },
  computed: {
    ...mapGetters(['getTabNavName']),
    isRightActive () {
      return this.$store.state.currentSelectedId !== null
    },
    getWidgetId () {
      return this.$store.state.currentSelectedId
    }
  },
  methods: {
    shiftTabNav (i) {
      this.tabNavActive = i
      this.$store.state.rightTabIsActive = i
    }
  }
}
</script>
<style scoped>
.right-components {
  position: fixed;
  width: 320px;
  height: calc(100% - 55px);
  right: 0;
  top: 55px;
  background: #f6f6f6;
  box-shadow: -1px 1px 8px #c6c6c6;
}
.top-tab-nav {
  width: 100%;
  height: 50px;
  background: #f6f6f6;
  margin-top: -1px;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  font-size: 0;
  text-align: left;
}
.top-tab-nav span {
  width: 30%;
  height: 51px;
  display: inline-block;
  box-sizing: border-box;
  line-height: 51px;
  font-size: 14px;
  text-align: center;
  color: #858585;
  cursor: pointer;
}
span.active {
  border-bottom: 2px solid #EFBF1F;
  color: #EFBF1F;
}
.tab-content {
  position: absolute;
  top: 51px;
  left: 0;
  font-size: 14px;
  color: #666;
  width: 100%;
  height: calc(100% - 51px);
}
</style>
