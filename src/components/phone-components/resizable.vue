<template>
  <div>
    <div class="handle ui-resizable-l" @mousedown.stop="leftMove"></div>
    <div class="handle ui-resizable-t" @mousedown.stop="leftMove"></div>
    <div class="handle ui-resizable-r" @mousedown.stop="leftMove"></div>
    <div class="handle ui-resizable-b" @mousedown.stop="leftMove"></div>
    <div class="handle ui-resizable-lt" @mousedown.stop="leftMove"></div>
    <div class="handle ui-resizable-tr" @mousedown.stop="leftMove"></div>
    <div class="handle ui-resizable-rb" @mousedown.stop="leftMove"></div>
    <div class="handle ui-resizable-bl" @mousedown.stop="leftMove"></div>
  </div>
</template>
<script>
export default {
  name: 'resizable',
  data () {
    return {
      d: ''
    }
  },
  methods: {
    leftMove (e) {
      let elcs = e.target.className
      let el = ''
      let x = e.clientX
      let y = e.clientY
      if (/e-l$/g.test(elcs)) {
        el = 'l'
      } else if (/e-t$/g.test(elcs)) {
        el = 't'
      } else if (/e-r$/g.test(elcs)) {
        el = 'r'
      } else if (/e-b$/g.test(elcs)) {
        el = 'b'
      } else if (/e-lt$/g.test(elcs)) {
        el = 'lt'
      } else if (/e-tr$/g.test(elcs)) {
        el = 'tr'
      } else if (/e-rb$/g.test(elcs)) {
        el = 'rb'
      } else if (/e-bl$/g.test(elcs)) {
        el = 'bl'
      }
      document.onmousemove = (e) => {
        let currentX = e.clientX
        let currentY = e.clientY
        this.$emit('move', {
          el: el,
          x: currentX - x,
          y: currentY - y
        })
        x = currentX
        y = currentY
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>
<style scoped>
.handle {
  position: absolute;
  display: block;
  font-size: 0.1px;
}
.ui-resizable-l {
  height: 100%;
  width: 7px;
  left: -5px;
  top: 0;
  z-index: 90;
  cursor: e-resize;
}
.ui-resizable-lt {
  height: 12px;
  width: 12px;
  top: -5px;
  left: -5px;
  z-index: 91;
  cursor: nw-resize;
}
.ui-resizable-t {
  height: 7px;
  width: 100%;
  left: 0;
  top: -5px;
  z-index: 90;
  cursor: n-resize;
}
.ui-resizable-tr {
  height: 12px;
  width: 12px;
  top: -5px;
  right: -5px;
  z-index: 91;
  cursor: ne-resize;
}
.ui-resizable-r {
  height: 100%;
  width: 7px;
  right: -5px;
  top: 0;
  z-index: 90;
  cursor: ew-resize;
}
.ui-resizable-rb {
  height: 12px;
  width: 12px;
  right: -5px;
  bottom: -5px;
  z-index: 91;
  cursor: se-resize;
}
.ui-resizable-b {
  height: 7px;
  width: 100%;
  bottom: -5px;
  left: 0;
  z-index: 90;
  cursor: s-resize;
}
.ui-resizable-bl {
  height: 12px;
  width: 12px;
  left: -5px;
  bottom: -5px;
  z-index: 91;
  cursor: nesw-resize;
}
</style>
