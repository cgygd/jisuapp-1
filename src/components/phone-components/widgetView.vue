<template>
  <div class="widget-view" @click="active">
    <slot></slot>
  </div>
</template>
<script>
import { mapActions } from 'Vuex'
export default {
  name: 'widgetView',
  props: ['datas'],
  methods: {
    ...mapActions([
      'selectWidget'
    ]),
    active () {
      this.selectWidget(this.datas.id)
      this.$router.push(this.datas.name)
    }
  }
}
</script>
<style scoped>
.widget-view {
  display: block;
  width: 100%;
  height: auto;
  position: relative;
}
.change {
  outline: 1px solid #2cb9fe;
  z-index: 2;
}
</style>
