<template>
  <div>
    <input type="checkbox" id="set"/>
    <label for="set">是否选中</label>
    <a v-if="url" :href="url" target="_black">教程</a>
  </div>
</template>
<script>
export default {
  name: 'inputCheckbox',
  props: ['url']
}
</script>
<style scoped>
input[type=checkbox] {
    border-radius: 50%;
}
a {
    color: #EFBF1F;
    float: right;
    margin-right: 15px;
    font-size: 14px;
}
</style>