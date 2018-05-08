<template>
  <div>
    <slot></slot>
    <input type="number" v-model="num">
  </div>
</template>
<script>
export default {
  name: 'inputNum',
  props: ['numData', 'vtype'],
  data () {
    return {
      num: this.numData
    }
  },
  updated () {
    this.num = this.numData
  },
  watch: {
    num (v) {
      this.$emit('onshift', {type: this.vtype, value: +v})
    }
  }
}
</script>
<style scoped>
input[type=number] {
  height: 25px;
  width: 60px;
  margin-left: 5px;
  line-height: 25px;
  background: #f6f6f6;
  border: 1px solid #d3d3d3;
  border-radius: 3px;
  color: #666;
  outline: 0;
  text-indent: 10px;
  user-select: text;
}
</style>
