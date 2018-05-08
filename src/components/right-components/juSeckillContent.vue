<template>
  <div>
    <div v-show="getTabActive===0">
      <input-txt class="setting-row" :text-data="'秒杀组件'"><span>组件名称：</span></input-txt>
      <input-checkbox-right @onshift='this.changeStyle' :checked-ata="this.getStyleAge('method.service')" :info='{title:"是否启用客服组件",vtype:"method.service"}' class="setting-row" />
      <input-checkbox-right @onshift='this.changeStyle' :checked-ata="this.getStyleAge('method.integral')" :info='{title:"是否启用限定为积分商品",vtype:"method.integral"}' class="setting-row" />
      <div class="setting-row">
        <span>绑定商品数据对象：</span>
        <select-component @onshift='this.changeStyle' vwidth="140px" :sdata='{ECommerce: "电商"}' vtype='method.goodsData' class="setting-inline-block" />
      </div>
      <div class="setting-row">
        <span>选择商品分类：</span>
        <select-component @onshift='this.changeStyle' vwidth="140px" :sdata='{all: "全部"}' vtype='method.goodsClassify' class="setting-inline-block" />
      </div>
    </div>
    <div v-show="getTabActive===1">
      <headline h-title="组件设置">
        <div class="setting-row">
          <span>样式</span>
          <ul class="layout-wrap">
            <li :class="active===0?'active':''" @click="selectClassify(0)">
              <div class="layout-item layout-one" title="单列">
                <p></p>
                <hr>
                <p></p>
              </div>
            </li>
            <li :class="active===1?'active':''" @click="selectClassify(1)">
              <div class="layout-item layout-sec" title="双列">
                <p></p>
                <p></p>
              </div>
            </li>
            <li :class="active===2?'active':''" @click="selectClassify(2)">
              <div class="layout-item layout-thrid" title="横向滚动">
                <p></p>
              </div>
            </li>
          </ul>
        </div>
        <div class="setting-row">
          <span class="setting-inline-block-r20">间距</span>
          <input-num :num-data='this.getStyleAge("parentStyle.marginTop")' vtype='parentStyle.marginTop' @onshift='this.changeStyle' class="setting-inline-block"><span>上</span></input-num>
        </div>
        <input-color :color-data='this.getStyleAge("parentStyle.background")' vtype='parentStyle.background' @onshift='this.changeStyle' class="setting-row"><span class="set-w">背景</span></input-color>
        <input-color :color-data='this.getStyleAge("style.background")' vtype='style.background' @onshift='this.changeStyle' class="setting-row"><span class="set-w">行背景</span></input-color>
        <input-progress :num-data='this.getStyleAge("parentStyle.opacity")' vtype='parentStyle.opacity' @onshift='this.changeStyle' class="setting-row">透明</input-progress>
      </headline>
      <headline h-title="图片设置">
        <div class="setting-row">
          <span class="setting-inline-block-r20">尺寸</span>
          <input-num :num-data='this.getStyleAge("imgStyle.width")' vtype='imgStyle.width' @onshift='this.changeStyle' class="setting-inline-block"><span>宽</span></input-num>
          <input-num :num-data='this.getStyleAge("imgStyle.height")' vtype='imgStyle.height' @onshift='this.changeStyle' class="setting-inline-block"><span>高</span></input-num>
        </div>
        <div class="setting-row">
          <span class="setting-inline-block-r20">每行</span>
          <input-num :num-data='this.getStyleAge("style.height")' vtype='style.height' @onshift='this.changeStyle' class="setting-inline-block"><span>高度</span></input-num>
          <input-num :num-data='this.getStyleAge("style.marginBottom")' vtype='style.marginBottom' @onshift='this.changeStyle' class="setting-inline-block"><span>间隔</span></input-num>
        </div>
      </headline>
      <headline h-title="文字设置">
        <div class="setting-row">
          <input-color :color-data='this.getStyleAge("titleStyle.color")' vtype='titleStyle.color' @onshift='this.changeStyle' class="setting-inline-block-r20"><span class="set-w">颜色</span></input-color>
          <input-num :num-data='this.getStyleAge("titleStyle.fontSize")' vtype='titleStyle.fontSize' @onshift='this.changeStyle' class="setting-inline-block-l20"><span>大小</span></input-num>
        </div>
      </headline>
    </div>
  </div>
</template>
<script>
import headline from './settingComponents/headline'
import inputTxt from './settingComponents/inputText'
import inputCheckbox from './settingComponents/inputCheckbox'
import selectComponent from './settingComponents/selectComponent'
import inputRadio from './settingComponents/inputRadio'
import inputNum from './settingComponents/inputNum'
import inputColor from './settingComponents/inputColor'
import inputProgress from './settingComponents/inputProgress'
import juTxtEntry from './settingComponents/juTextEntry'
import inputCheckboxRight from './settingComponents/inputCheckboxRight'
import clickRespons from './settingComponents/clickRespons'
import borderSet from './settingComponents/borderSet'
import selectButton from './settingComponents/selectButton'
import {mapGetters, mapActions} from 'Vuex'
export default {
  name: 'ju-seckill-content',
  props: ['shownav'],
  data () {
    return {
      classify: ['one-mode', 'sec-mode', 'thrid-mode']
    }
  },
  computed: {
    ...mapGetters([
      'getStyleAge'
    ]),
    active () {
      let mode = this.getStyleAge('css')
      return this.classify.indexOf(mode)
    },
    getTabActive () {
      return this.$store.state.rightTabIsActive
    }
  },
  methods: {
    ...mapActions([
      'changeStyle'
    ]),
    selectClassify (i) {
      if (i === 0) {
        this.changeStyle({type: 'imgStyle.height', value: 70})
        this.changeStyle({type: 'imgStyle.width', value: 70})
        this.changeStyle({type: 'style.height', value: 70})
        this.changeStyle({type: 'style.margin-Bottom', value: 2})
      } else if (i === 1) {
        this.changeStyle({type: 'imgStyle.height', value: 160})
        this.changeStyle({type: 'imgStyle.width', value: 160})
        this.changeStyle({type: 'style.height', value: 270})
        this.changeStyle({type: 'style.margin-Bottom', value: 0})
      } else {
        this.changeStyle({type: 'imgStyle.height', value: 140})
        this.changeStyle({type: 'imgStyle.width', value: 140})
        this.changeStyle({type: 'style.height', value: 250})
        this.changeStyle({type: 'style.margin-Bottom', value: 0})
      }
      this.changeStyle({type: 'css', value: this.classify[i]})
    }
  },
  components: {
    inputTxt,
    inputCheckbox,
    selectComponent,
    inputRadio,
    inputNum,
    inputColor,
    inputProgress,
    juTxtEntry,
    headline,
    inputCheckboxRight,
    clickRespons,
    borderSet,
    selectButton
  }
}
</script>
<style scoped>
.layout-wrap {
  display: flex;
}
.layout-wrap li {
  display: inline-block;
  padding: 2px 3px;
  margin-right: 10px;
  cursor: pointer;
  vertical-align: top;
}
.layout-wrap li.active {
  outline: 2px solid #3ebce5;
}
.layout-item {
  position: relative;
  width: 80px;
  height: 50px;
  border: 2px solid #747474;
  background: #f4f4f4
}
.layout-one hr {
  height: 0;
  border-top: 2px solid #747474;
}
.layout-one p {
  display: block;
  width: 20px;
  height: 20px;
  margin: 2px;
  margin-right: 58px;
  background: #c8c8c8;
}
.layout-sec p{
  display: block;
  width: 72px;
  height: 20px;
  margin: 3px;
  background: #c8c8c8;
}
.layout-sec::before {
  content: '';
  width: 2px;
  height: 50px;
  position: absolute;
  left: 37px;
  border-left: 2px solid #f4f4f4;
  border-right: 2px solid #f4f4f4;
  background: #747474;
  z-index: 99;
}
.layout-thrid p {
  display: block;
  width: 77px;
  height: 44px;
  margin: 3px;
  margin-right: 0;
  background: #c8c8c8;
}
.layout-thrid::after {
  content: '';
  width: 2px;
  height: 50px;
  position: absolute;
  left: 56px;
  top: 0;
  border-left: 2px solid #f4f4f4;
  border-right: 2px solid #f4f4f4;
  background: #747474;
  z-index: 99;
}
.layout-thrid::before {
  content: '';
  width: 2px;
  height: 50px;
  position: absolute;
  left: 26px;
  top: 0;
  border-left: 2px solid #f4f4f4;
  border-right: 2px solid #f4f4f4;
  background: #747474;
  z-index: 99;
}
</style>
