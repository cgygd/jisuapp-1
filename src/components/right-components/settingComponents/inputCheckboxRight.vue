<template>
  <div>
    <label for="set">{{info.title}}：</label>
    <input type="checkbox" id="set" v-model="check"/>
  </div>
</template>
<script>
export default {
  name: 'inputCheckboxRight',
  props: ['checkedData', 'info'],
  data () {
    return {
      check: this.checkedData
    }
  },
  watch: {
    check (v) {
      this.$emit('onshift', {
        type: this.info.vtype,
        value: this.check
      })
    }
  }
}
</script>
<style scoped>
input[type=checkbox] {
    border-radius: 50%;
}
</style>