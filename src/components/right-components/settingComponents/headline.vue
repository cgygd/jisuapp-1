<template>
  <div class="accordion-content">
    <div class="accordion-title" @click="isActive=!isActive">
      <span :class="isActive?'active':''">{{hTitle}}</span>
    </div>
    <div class="accordion-contents"  v-show="isActive">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'headline',
  props: ['hTitle'],
  data () {
    return {
      isActive: false
    }
  }
}
</script>
<style scoped>
.accordion-content {
  width: 100%;
  height: auto;
}
.accordion-title {
  height: 42px;
  margin-top: -1px;
  line-height: 42px;
  text-align: left;
  text-indent: 1em;
  border: 1px solid #dadada;
  background: #e5e5e5;
  color: #484848;
}
.accordion-contents {
  padding-bottom: 10px;
}
.accordion-title span {
  position: relative;
}
.accordion-title .active::before {
  transform-origin: 6px 6px;
  transform: rotate(90deg);
}
.accordion-title span::before {
  content: '';
  width: 0;
  height: 0;
  top: 3px;
  right: -20px;
  position: absolute;
  border-width: 5px;
  border-color: transparent;
  border-style: solid;
  border-left: 8px solid #666;
  transition: all linear 0.3s;
}
</style>
