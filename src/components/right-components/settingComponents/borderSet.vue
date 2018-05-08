<template>
  <headline h-title='边框设置'>
    <div class="setting-row">
      <span class="setting-inline-block-r20">样式</span>
      <select-component @onshift='this.changeStyle' :sdata='{none: "无",solid:"实线", dashed:"虚线",dotted:"点虚线"}' vtype='style.Border.style' class="setting-inline-block"></select-component>
      <input-num :num-data='this.getStyleAge("style.Border.width")' vtype='style.Border.width' @onshift='this.changeStyle' class="setting-inline-block-l20">粗细</input-num>
    </div>
    <div class="setting-row">
      <span class="setting-inline-block-r20">颜色</span>
      <input-color :color-data='this.getStyleAge("style.Border.color")' vtype='style.Border.color' @onshift='this.changeStyle' class="setting-inline-block"/>
    </div>
    <div class="setting-row">
      <input-checkbox-right @onshift='this.changeStyle' :checked-ata="this.getStyleAge('style.BoxShadow.show')" :info='{title:"是否设置阴影",vtype:"style.BoxShadow.show"}' class="setting-inline-block"/>
      <div class="setting-embed-l10" v-show="getStyleAge('style.BoxShadow.show')">
        <input-num :num-data='this.getStyleAge("style.BoxShadow.radius")' vtype='style.BoxShadow.radius' @onshift='this.changeStyle' class="setting-inline-block">模糊半径</input-num>
        <input-color @onshift='this.changeStyle' :color-ata="this.getStyleAge('style.BoxShadow.color')" vtype="style.BoxShadow.color" class="setting-inline-block-l10">背景</input-color>
        <div class="setting-embed">
          <input-num :num-data='this.getStyleAge("style.BoxShadow.level")' vtype='style.BoxShadow.level' @onshift='this.changeStyle' class="setting-inline-block">X轴偏移</input-num>
          <input-num :num-data='this.getStyleAge("style.BoxShadow.vertical")' vtype='style.BoxShadow.vertical' @onshift='this.changeStyle' class="setting-inline-block-l10">Y轴偏移</input-num>
        </div>
        <input-num class="setting-embed" :num-data='this.getStyleAge("style.BoxShadow.extension")' vtype='style.BoxShadow.extension' @onshift='this.changeStyle'>阴影外延值</input-num>
      </div>
    </div>
  </headline>
</template>
<script>
import headline from './headline'
import inputCheckbox from './inputCheckbox'
import selectComponent from './selectComponent'
import inputRadio from './inputRadio'
import inputNum from './inputNum'
import inputColor from './inputColor'
import inputCheckboxRight from './inputCheckboxRight'
import {mapGetters, mapActions} from 'Vuex'
export default {
  name: 'borderSet',
  computed: {
    ...mapGetters([
      'getStyleAge'
    ])
  },
  methods: {
    ...mapActions([
      'changeStyle'
    ])
  },
  components: {
    inputCheckbox,
    selectComponent,
    inputRadio,
    inputNum,
    inputColor,
    headline,
    inputCheckboxRight
  }
}
</script>
