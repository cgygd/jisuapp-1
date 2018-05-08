<template>
  <span class="widget" :class='css' @click="subgroup" :title="iconinfo.using ? iconinfo.title : '此组件暂不支持使用'">
    <i :class="iconinfo.iconCss"></i>
    <p>{{iconinfo.title}}</p>
    <a :href="iconinfo.helpUrl" class="help" title="点击查看帮助">
      <b>?</b>
    </a>
  </span>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'widget',
  props: ['iconinfo'],
  data () {
    return {
      css: ''
    }
  },
  created () {
    this.css = this.iconinfo.vipPower ? (this.iconinfo.vipPower === 1 ? 'vip' : 'svip') : ''
    this.css += this.iconinfo.using ? ' using' : ' stop-using'
  },
  methods: {
    ...mapMutations([
      'addSubgroup'
    ]),
    subgroup () {
      let type = this.iconinfo.name
      this.addSubgroup(type)
    }
  }
}
</script>
<style scoped>
.widget {
  width: calc(33.3% - 1px);
  height: 94px;
  display: inline-block;
  position: relative;
  border-bottom: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
  cursor: pointer;
}
.stop-using {
  background: rgba(0,0,0,0.4);
  user-select: none;
}
.using:hover {
  background: #e8e8e8;
  transition: background 0.5s;
}
.vip::before {
  content: '';
  display: block;
  position: absolute;
  width: 36px;
  height: 36px;
  top: 0;
  right: 0;
  background: url('./../../assets/fonts/vip.svg') center no-repeat;
}
.svip::before {
  content: '';
  display: block;
  position: absolute;
  width: 36px;
  height: 36px;
  top: 0;
  right: 0;
  background: url('./../../assets/fonts/svip.svg') center no-repeat;
}
.using:hover >.help {
  display: block;
}
i {
  width: 100%;
  height: 48px;
  display: inline-block;
  padding-top: 10px;
  font-size: 40px;
  line-height: 58px;
  color: #666;
}
p {
  color: #666;
}
.help {
  width: 55px;
  height: 55px;
  display: none;
  position: absolute;
  top: -28px;
  right: -28px;
  transform: rotate(45deg);
  background: #b3b3b3;
  color: #858585;
}
.help:hover {
  background: #2cb9fe;
}
.help b {
  position: absolute;
  bottom: 1px;
  left: 24px;
  color: #fff;
  font-size: 16px;
  transform: rotate(-45deg);
}
</style>
