<template>
  <div>
    <slot></slot>
    <div class="progress-bar">
      <span @mousedown="moveicon" :style="`width:${spanWidth}px;`"></span>
    </div>
    <span>{{precent}}</span>
  </div>
</template>
<script>
export default {
  name: 'inputProgress',
  props: ['numData', 'vtype'],
  data () {
    return {
      spanWidth: this.numData * 150
    }
  },
  watch: {
    spanWidth (v) {
      let s = Math.round(v / 150 * 100) / 100
      this.$emit('onshift', {type: this.vtype, value: s.toString()})
    }
  },
  methods: {
    moveicon (e) {
      let x = e.clientX
      document.onmousemove = (e) => {
        let cureentX = e.clientX
        let num = cureentX - x
        this.spanWidth += num
        if (this.spanWidth <= 5) {
          this.spanWidth = 5
        } else if (this.spanWidth >= 150) {
          this.spanWidth = 150
        }
        x = cureentX
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  },
  computed: {
    precent () {
      return Math.round((this.spanWidth - 5) / 145 * 100) + '%'
    }
  }
}
</script>
<style scoped>
.progress-bar {
  display: inline-block;
  position: relative;
  margin-left: 20px;
  width: 150px;
  height: 4px;
  border: 1px solid #aaaaaa;
  border-radius: 4px;
}
.progress-bar span {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background: #2cb9fe;
}
.progress-bar span::before {
  content: '';
  display: block;
  position: absolute;
  width: 12px;
  height: 12px;
  top: -4px;
  right: -2px;
  border: 1px solid #c4c3c3;
  border-radius: 50%;
  cursor: pointer;
  background: #e6e6e6;
}
</style>
