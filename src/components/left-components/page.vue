<template>
  <div class="page">
    <ul class="group-page-container">
      <li v-for="(v,i) in this.getPages" :key="i" :pages-data="v" :keys="i" is='group-page'></li>
    </ul>
    <div class="new-page-wrap">
      <span @click="addpage"><i class="icon-addpage"></i>添加页面</span>
      <span @click="addfolder"><i class="icon-addfolder"></i>添加分组</span>
    </div>
    <transition name="fade">
      <div class="zhichi-content" v-show="addpagedialog">
        <ul>
          <li>{{title}}：<input type="text" v-model="titleName" placeholder="建议10个字以内"></li>
          <li v-show="sele">选择分组：<select v-model="folder">
              <option v-for="(v,i) in getPages" :key="i" :value="i">{{v.title}}</option>
            </select>
          </li>
        </ul>
        <div class="button-wrap">
          <span class="button" @click="addpagedialog=false">取消</span>
          <span class="button" @click="confirm">确定</span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import groupPage from './page-components/groupPage'
import {mapGetters, mapActions} from 'Vuex'
export default {
  name: 'page',
  data () {
    return {
      title: '页面名称',
      addpagedialog: false,
      sele: false,
      titleName: '',
      folder: 1
    }
  },
  methods: {
    ...mapActions([
      'addMenu'
    ]),
    addpage () {
      this.sele = true
      this.addpagedialog = true
      this.title = '页面名称'
    },
    addfolder () {
      this.sele = false
      this.addpagedialog = true
      this.title = '分组名称'
    },
    confirm () {
      console.log(this.folder)
      if (this.sele) {
        this.addMenu({
          id: +this.folder,
          title: this.titleName
        })
      } else {
        this.addMenu({
          title: this.titleName
        })
      }
      this.titleName = ''
      this.addpagedialog = false
    }
  },
  computed: {
    ...mapGetters([
      'getPages'
    ])
  },
  components: {
    groupPage
  }
}
</script>
<style scoped>
.zhichi-content {
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: 0;
  box-shadow: 0 -4px 8px rgb(230, 230, 230);
  background: #fff;
  color: #666;
  z-index: 999;
}
.zhichi-content ul {
  width: 100%;
  height: 72px;
  margin: 35px 0;
}
.zhichi-content ul li {
  padding-left: 42px;
}
.zhichi-content ul li:not(:first-child) {
  margin-top: 23px;
}
.zhichi-content input, .zhichi-content select {
  height: 26px;
  width: 165px;
  border-radius: 3px;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  text-indent: 6px;
  color: inherit;
  outline: 0;
}
.button-wrap {
  text-align: center;
  margin: 12px;
}
.button {
  display: inline-block;
  width: 117px;
  line-height: 34px;
  color: #fff;
  border-radius: 5px;
  background: #EFBF1F;
  cursor: pointer;
}
.button-wrap span:first-child {
  background: #e6e6e6;
  color: #000;
  margin-right: 22px;
}
.page {
  position: relative;
  height: calc( 100% - 57px);
  width: 100%;
  background-color: #f8f8f8;
  box-shadow: 1px 5px 8px #c6c6c6;
  color: #666;
}
.group-page-container {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 59px;
  line-height: 42px;
  text-indent: 28px;
  font-size: 15px;
  overflow-x: hidden;
  overflow-y: auto;
}
.new-page-wrap {
  position: absolute;
  bottom: 0;
  padding: 12px 0;
  width: 100%;
  text-align: center;
  line-height: 35px;
  color: #fff;
}
.new-page-wrap span {
  width: 40%;
  margin: 0 10px;
  display: inline-block;
  border-radius: 4px;
  background-color: #EFBF1F;
  cursor: pointer;
  transition: background .5s;
}
.new-page-wrap span:hover {
  background: #eaad00;
}
.fade-enter-active, .fade-leave-active {
  transition: bottom 0.5s;
}
.fade-enter, .fade-leave-to {
  bottom: -200px;
}
i {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>

