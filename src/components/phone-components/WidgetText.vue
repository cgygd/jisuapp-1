<template>
  <div class="inner-content" @mousedown="widgetmove">
    <span :style="getStyle">{{widgetdata.content}}</span>
    <resizable @move='m'/>
    <icon-delete :delete="{id: widgetdata.id, parentId: widgetdata.parentId}"/>
  </div>
</template>
<script>
import resizable from './resizable'
import iconDelete from './iconDelete'
import {mapActions, mapGetters} from 'Vuex'
export default {
  name: 'Widgettext',
  props: ['widgetdata'],
  methods: {
    widgetmove (e) {
      let x = e.clientX
      let y = e.clientY
      document.onmousemove = (e) => {
        let currentX = e.clientX
        let currentY = e.clientY
        this.changeWidgetSize({
          id: this.widgetdata.id,
          el: 'move',
          x: currentX - x,
          y: currentY - y,
          parentId: this.widgetdata.parentId
        })
        x = currentX
        y = currentY
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    },
    m (d) {
      let dom = this.$el
      d.height = +window.getComputedStyle(dom, null).height.replace(/px/, '')
      d.width = +window.getComputedStyle(dom, null).width.replace(/px/, '')
      d.id = this.widgetdata.id
      d.parentId = this.widgetdata.parentId
      this.changeWidgetSize(d)
    },
    ...mapActions([
      'changeWidgetSize'
    ])
  },
  computed: {
    ...mapGetters([
      'getStyleStr'
    ]),
    getStyle () {
      let key = this.widgetdata.parentId !== undefined ? (this.widgetdata.parentId + '.child.' + this.widgetdata.id) : this.widgetdata.id
      return this.getStyleStr(key)
    }
  },
  components: {
    resizable,
    iconDelete
  }
}
</script>
<style scoped>
.inner-content span {
  display: block;
  user-select: none;
}
</style>
