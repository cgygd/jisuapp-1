<template>
  <div>
    <slot></slot>
    <input type="text" :value="textData"/>
  </div>
</template>
<script>
export default {
  name: 'inputText',
  props: ['textData']
}
</script>
<style scoped>
input[type=text] {
  height: 15px;
  line-height: 15px;
  padding: 6px;
  background: #f6f6f6;
  border: 1px solid #d3d3d3;
  color: #666;
  outline: 0;
  text-indent: 3px;
  user-select: text;
}
</style>
