<template>
  <div>
    <slot class="set-w"></slot>
    <div class="color-wrap">
      <input type="color" v-model="color" :id="colorid">
      <label class="color-tray" :for="colorid"></label>
      <!-- <a v-if="url" :href="url" target="_black">教程</a> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'inputColor',
  props: ['colorData', 'vtype'],
  data () {
    return {
      colorid: '',
      color: this.colorData
    }
  },
  watch: {
    color () {
      this.$emit('onshift', {
        type: this.vtype,
        value: this.color
      })
    }
  },
  created () {
    this.colorid = (Math.random() * 10000).toString(32)
  }
}
</script>
<style scoped>
.color-wrap {
  display: inline-block;
  position: relative;
}
.set-w {
  display: inline-block;
  width: 50px;
}
input[type=color] {
  height: 27px;
  width: 30px;
  background: #f6f6f6;
  border: 1px solid #91765d;
  border-right-width: 0;
  color: #666;
  outline: 0;
  text-indent: 3px;
  box-sizing: border-box;
  user-select: text;
  cursor: pointer;
}
input[type=color]:hover {
  border-color: #EFBF1F;
}
input[type=color]:hover +.color-tray{
  border-color: #EFBF1F;
}
.color-tray {
  width: 15px;
  height: 27px;
  position: absolute;
  top: 0px;
  left: 30px;
  border: 1px solid #91765d;
  border-left-width: 0;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
}
.color-tray:hover {
  border-color: #EFBF1F;
}
.color-tray::before {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: 8px;
  left: 2px;
  border-width: 10px 5px;
  border-style: solid;
  border-color: transparent;
  border-top-color: rgb(75, 74, 74);
}
a {
    color: #EFBF1F;
    float: right;
    margin-right: 15px;
    font-size: 14px;
}
</style>
