<template>
  <div>
    <slot name="title"></slot>
    <select name="" id="" v-model="v" :style="vwidth?`width:${vwidth}`:''">
      <option v-for="(val,k,i) in sdata" :value="k" :key="i">{{val}}</option>
    </select>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'selectComponent',
  props: ['sdata', 'vtype', 'vwidth'],
  data () {
    return {
      v: 'none'
    }
  },
  watch: {
    v (v) {
      v === 'none' ? this.$emit('onshift', {type: 'style.Border.show', value: false}) : this.$emit('onshift', {type: this.vtype, value: v})
    }
  }
}
</script>
<style scoped>
select {
  height: 28px;
  width: 80px;
  vertical-align: middle;
  line-height: 14px;
  padding: 3px;
  background: #f6f6f6;
  border: 1px solid #d3d3d3;
  color: #666;
  outline: 0;
  text-indent: 3px;
  user-select: text;
}
</style>
