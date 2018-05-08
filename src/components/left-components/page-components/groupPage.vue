<template>
  <li>
    <div class="group-nav" :class="navActive?'active':''" @click="navClick">
      <span v-if="isEdit"><i class="icon-folder"></i>{{pagesData.title}}</span>
      <span v-else class="modify"><i class="icon-folder"></i>
        <input type="text" :value="pagesData.title" autofocus='autofocus' onfocus='this.select()'>
        <b class="affirm" style="right:35px" title="确认" @click="modifyFolderNameOk">√</b>
        <b class="affirm" style="right:10px" title="取消" @click="modifyFolderNameCancel">×</b>
      </span>
      <div class="icon-wrap" v-show="iconShow">
        <span class="icon-addpage" @click="addPage" title="添加页面"></span>
        <span class="icon-edit" @click="editClick" title="修改组名"></span>
        <span class="icon-delete" @click="deleteMenu" title="删除"></span>
      </div>
    </div>
    <ul v-show="navActive">
      <li v-for="(v,i) in pagesData.page" :key="i" :page-data="v" @onmodify="titleModify" :keys="i" is='page-child'></li>
    </ul>
  </li>
</template>
<script>
import pageChild from './pageChild'
import {mapActions} from 'Vuex'
export default {
  name: 'groupPage',
  props: ['pagesData', 'keys'],
  data () {
    return {
      navActive: true,
      isEdit: true,
      iconShow: true
    }
  },
  methods: {
    navClick (e) {
      let el = e.target
      if ((el.nodeName === 'SPAN' && /icon-/.test(el.className)) || el.parentNode.className === 'modify') {
        console.log('')
      } else {
        this.navActive = !this.navActive
      }
    },
    ...mapActions([
      'modifyPageName',
      'deletePage',
      'addMenu'
    ]),
    editClick () {
      this.isEdit = !this.isEdit
      this.iconShow = false
    },
    modifyFolderNameCancel () {
      this.isEdit = !this.isEdit
      this.iconShow = true
    },
    modifyFolderNameOk (e) {
      let v = e.target.previousElementSibling.value
      this.isEdit = !this.isEdit
      this.iconShow = true
      this.modifyPageName({
        id: this.keys,
        title: v
      })
    },
    titleModify (d) {
      d.childId = this.keys
      d.type ? d.type === 'delete' ? this.deletePage(d) : this.addMenu(d) : this.modifyPageName(d)
    },
    deleteMenu () {
      this.deletePage({
        id: this.keys
      })
    },
    addPage () {
      this.addMenu({
        id: this.keys
      })
    }
  },
  components: {
    pageChild
  }
}
</script>
<style scoped>
.group-nav {
  position: relative;
  height: 42px;
  background-color: #fff;
  cursor: pointer;
  border-bottom: 1px solid #d6d6d6;
  z-index: 1;
}
.group-nav::before {
  content: '';
  position: absolute;
  top: 16px;
  left: 11px;
  border-style: solid;
  border-color: transparent;
  border-width: 5px;
  border-left: 8px solid #666;
  transition: all linear .3s;
}
div.active {
  box-shadow: 0 0 7px #c7c5c5;
  border-bottom: none;
}
.active::before {
  transform-origin: 6px 6px;
  transform: rotate(90deg);
}
i {
  margin-right: 5px;
}
.group-nav:hover >.icon-wrap {
  display: block;
}
.icon-wrap {
  display: none;
  position: absolute;
  right: 5px;
  top: 0;
  bottom: 0;
  line-height: 42px;
}
.icon-wrap span {
  padding: 3px;
  cursor: pointer;
}
</style>

