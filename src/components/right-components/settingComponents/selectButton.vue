<template>
  <div>
    <slot></slot>
    <div class="box">
      <span class="button" v-for="(v,k,i) in butData.data" :key="i" :class="sele===k?'active':''"  @click="selected(k)">{{v}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'selectButton',
  props: ['butData', 'vtype'],
  data () {
    return {
      sele: this.butData.select
    }
  },
  methods: {
    selected (k) {
      this.sele = k
      this.$emit('onshift', {type: this.vtype, value: k})
    }
  }
}
</script>
<style scoped>
.box {
  height: 28px;
  margin-left: 5px;
}
.button {
  display: inline-block;
  padding: 4px 12px;
  line-height: 18px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: #f6f6f6;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
}
span.active {
  color: #fff;
  background: #2cb9fe;
  border-color: #2cb9fe;
}
</style>
