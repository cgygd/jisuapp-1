<template>
  <div class="header-complate">
    <ul class="nav-operation-wrap">
      <li><i class="icon-colorstyle"></i>风格</li>
      <li><i class="icon-config"></i>管理</li>
      <li><i class="icon-help"></i>帮助</li>
      <li><i class="icon-earphone"></i>客服</li>
      <li><i class="icon-history"></i>历史</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'jisuHeader',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
.header-complate{
  position: fixed;
  top: 0;
  height: 55px;
  width: 100%;
  z-index: 99;
  color: #000;
  background: #fff;
  box-shadow: 0 0 5px 0 #a5a5a5;
}
.nav-operation-wrap {
  margin: 0 auto;
  width: 600px;
  text-align: center;
  display: table;
}
li {
  display: inline-block;
  width: 96px;
  cursor: pointer;
  line-height: 55px;
}
li:hover {
  color: #EFBF1F;
}
i {
  font-size: 20px;
  margin-right: 8px;
  vertical-align: middle;
}
</style>

