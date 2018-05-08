<template>
  <div>
    <div v-show="getTabActive===0">
      <ju-txt-entry @onshift='this.changeStyle' :key="keyid" class="setting-row" :tdata='getTextData'/>
      <headline h-title='组件设置'>
          <slot></slot>
      </headline>
    </div>
    <div v-show="getTabActive===1">
      <headline h-title="组件设置">
        <div class="setting-row">
          <span style="margin-right:20px;">尺寸</span>
          <input-num :num-data='this.getStyleAge("style.width")' vtype='style.width' @onshift='this.changeStyle' class="setting-inline-block"><span>宽</span></input-num>
        </div>
        <div class="setting-row">
          <span style="margin-right:20px;">行高</span>
          <input-num :num-data='this.getStyleAge("style.lineHeight")' vtype='style.lineHeight' @onshift='this.changeStyle' class="setting-inline-block"></input-num>
        </div>
        <div class="setting-row">
          <span style="margin-right:20px;">间距</span>
          <input-num :num-data='this.getStyleAge("style.left")' vtype='style.left' @onshift='this.changeStyle' class="setting-inline-block"><span>左</span></input-num>
          <input-num :num-data='this.getStyleAge("style.top")' vtype='style.top' @onshift='this.changeStyle' class="setting-inline-block"><span>上</span></input-num>
        </div>
        <div class="setting-row">
          <span style="margin-right:20px">背景</span>
          <input-color class="setting-inline-block" :color-data='this.getStyleAge("style.background")' vtype='style.background' @onshift='this.changeStyle'/>
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
import borderSet from './settingComponents/borderSet'
import {mapGetters, mapActions} from 'Vuex'
export default {
  name: 'ju-text-content',
  props: ['shownav'],
  data () {
    return {
      d: ''
    }
  },
  computed: {
    ...mapGetters([
      'getStyleAge'
    ]),
    getTextData () {
      return {
        title: this.getStyleAge('content'),
        fontSize: this.getStyleAge('style.fontSize'),
        align: this.getStyleAge('style.textAlign'),
        color: this.getStyleAge('style.color'),
        bold: this.getStyleAge('style.fontWeight') === 'bolder',
        italic: this.getStyleAge('style.fontStyle') === 'italic',
        underline: this.getStyleAge('style.textDecoration') === 'underline'
      }
    },
    getTabActive () {
      return this.$store.state.rightTabIsActive
    },
    keyid () {
      return this.$store.state.currentSelectedId
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
    borderSet
  }
}
</script>
<style scoped>
</style>
