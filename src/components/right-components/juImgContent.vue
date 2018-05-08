<template>
  <div>
    <div v-show="getTabActive===0">
      <div class="setting-row img-center">
        <img src="../../assets/0f.jpg" width="82" height="82" class="setting-inline-block-l10">
        <span class="setting-inline-block-l20 yellow-font">更换图片</span>
      </div>
      <!-- <headline h-title="点击事件">
        <click-respons></click-respons>
      </headline> -->
    </div>
    <div v-show="getTabActive===1">
      <headline h-title="组件设置">
        <div class="setting-row">
          <span class="setting-inline-block-r20">尺寸</span>
          <input-num :num-data='this.getStyleAge("style.width")' vtype='style.width' @onshift='this.changeStyle' class="setting-inline-block-l10">宽</input-num>
          <input-num :num-data='this.getStyleAge("style.height")' vtype='style.height' @onshift='this.changeStyle' class="setting-inline-block-l20">高</input-num>
        </div>
        <div class="setting-row">
          <span class="setting-inline-block-r20">间距</span>
          <input-num :num-data='this.getStyleAge("style.left")' vtype='style.left' @onshift='this.changeStyle' class="setting-inline-block-l10">左</input-num>
          <input-num :num-data='this.getStyleAge("style.top")' vtype='style.top' @onshift='this.changeStyle' class="setting-inline-block-l20">上</input-num>
        </div>
        <div class="setting-row">
          <span class="setting-inline-block-r20">位置</span>
          <select-button :but-data='{data:{left:"置左",center:"居中",right:"置右"},select:this.getStyleAge("parentStyle.textAlign")}' vtype='parentStyle.textAlign' @onshift='this.changeStyle' class="setting-inline-block"/>
        </div>
        <input-progress :num-data='this.getStyleAge("style.opacity")' vtype='style.opacity' @onshift='this.changeStyle' class="setting-row">透明度</input-progress>
        <div class="setting-row">
          <span class="setting-inline-block-r20">圆角</span>
          <input-num :num-data='getStyleAge("style.borderRadius")' vtype='style.borderRadius' @onshift='this.changeStyle' class="setting-inline-block-l10"/>
        </div>
      </headline>
      <border-set />
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
  name: 'ju-img-content',
  data () {
    return {
      d: ''
    }
  },
  computed: {
    ...mapGetters([
      'getStyleAge'
    ]),
    getTabActive () {
      return this.$store.state.rightTabIsActive
    }
  },
  methods: {
    ...mapActions([
      'changeStyle'
    ])
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
.img-center {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
</style>
