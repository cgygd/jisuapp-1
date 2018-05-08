<template>
  <div>
    <div v-show="getTabActive===0">
    </div>
    <div v-show="getTabActive===1">
      <headline h-title="组件设置">
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
    borderSet
  }
}
</script>
<style scoped>
</style>
