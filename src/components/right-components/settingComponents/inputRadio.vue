<template>
  <div>
    <slot></slot>
    <input type="radio" :name="id" :id="id">
    <label :for="id">自定义</label>
    <slot name="content"></slot>
  </div>
</template>
<script>
export default {
  name: 'inputRadio',
  props: ['id']
}
</script>
<style scoped>
input[type=radio] {
  margin-left: 5px;
  margin-top: 10px;
}
</style>
