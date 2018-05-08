<template>
  <div class="view-container">
    <div class="phone-wrap">
      <div class="phone-top"></div>
      <phone-content :key="getWidgetId"/>
      <div class="phone-bottom"></div>
    </div>
    <div class="operate-wrap">
      <span v-for="(v,i) in iconCss" :key="i">
        <i :class="v" :style="/(conponent|page)$/.test(v)?'font-size:22px':''"></i>
        前进
      </span>
    </div>
  </div>
</template>
<script>
import PhoneContent from './PhoneContent'
export default {
  name: 'viewContainer',
  data () {
    return {
      iconCss: ['icon-forward', 'icon-backward', 'icon-template', 'icon-conponent', 'icon-page', 'icon-heart']
    }
  },
  computed: {
    getWidgetId () {
      return this.$store.state.widgetId
    }
  },
  components: {
    PhoneContent
  }
}
</script>
<style scoped>
.view-container {
  position: absolute;
  top: calc((100% - 654px)/2 + 60px);
  left: calc((100% - 500px)/2);
  height: 585px;
  width: 322px;
  margin: 0 70px;
}
.phone-wrap {
  position: relative;
  height: 100%;
  width: 322px;
  text-align: left;
  border-radius: 25px;
  box-shadow: 0 0 5px #b3b3b3;
}
.phone-top {
  position: relative;
  height: 32px;
  width: 100%;
  background: #F4F4F4;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}
.phone-top::before {
  content: '';
  position: absolute;
  top: 13px;
  left: calc(50% - 40px);
  width: 76px;
  height: 8px;
  border: 1px solid #8F8C8C;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px rgb(223, 221, 221);
}
.phone-bottom {
  height: 32px;
  width: 100%;
  background: #F4F4F4;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}
.operate-wrap {
  position: absolute;
  top: 15px;
  right: -50px;
  text-align: center;
  font-size: 0;
  width: 34px;
}
.operate-wrap span {
  width: 32px;
  display: block;
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}
.operate-wrap span i {
  display: block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border: 1px solid #666;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
}
.operate-wrap span i:hover {
  color: #EFBF1F;
  border-color: #EFBF1F;
}
</style>
