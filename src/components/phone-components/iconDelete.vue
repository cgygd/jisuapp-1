<template>
  <div class="ui-delete" title="删除" @click="deleted">x</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'delicon',
  props: ['delete'],
  methods: {
    ...mapActions(['deleteWidget']),
    deleted () {
      this.deleteWidget(this.delete)
    }
  }
}
</script>
<style scoped>
.ui-delete {
  display: none;
  position: absolute;
  height: 12px;
  width: 12px;
  top: -1px;
  right: -1px;
  line-height: 10px;
  font-size: 14px;
  border: 1px solid #37a1ec;
  color: #37a1ec;
  border-radius: 2px;
  background: #fff;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  z-index: 99;
  cursor: pointer;
}
.inner-content:hover >.ui-delete {
  display: block;
}
</style>
