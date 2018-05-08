<template>
  <li @click="active" class="page-child">
    <span class="title" v-if="isEdit">{{pageData.title}}</span>
    <span v-else class="modify">
      <input type="text" :value="pageData.title" autofocus='autofocus' onfocus='this.select()'>
      <b class="affirm" style="right:35px" title="确认" @click="modifyFolderNameOk">√</b>
      <b class="affirm" style="right:10px" title="取消" @click="modifyFolderNameCancel">×</b>
    </span>
    <div class="icon-wrap" v-show="iconShow">
      <span class="icon-edit" @click="editClick" title="修改名称"></span>
      <span class="icon-collect" title="收藏"></span>
      <span class="icon-copy" @click="copyMenu" title="复制"></span>
      <span class="icon-delete" @click="deleteMenu" title="删除"></span>
    </div>
  </li>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'pagechild',
  props: ['pageData', 'keys'],
  data () {
    return {
      isEdit: true,
      iconShow: true
    }
  },
  methods: {
    ...mapActions(['setWidgetContent']),
    active (e) {
      let dom = document.querySelectorAll('.page-child')
      for (let i = 0; i < dom.length; i++) {
        dom[i].className = 'page-child'
      }
      this.$el.className += ' active'
      this.setWidgetContent(this.pageData.widget)
    },
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
      this.$emit('onmodify', {
        id: this.keys,
        title: v
      })
    },
    deleteMenu () {
      this.$emit('onmodify', {
        id: this.keys,
        type: 'delete'
      })
    },
    copyMenu () {
      this.$emit('onmodify', {
        id: this.keys,
        type: 'copy'
      })
    }
  }
}
</script>
<style scoped>
.page-child {
  position: relative;
  width: 298px;
  height: 44px;
  border-bottom: 1px solid #d3d3d3;
}
li.active {
  border: 1px solid #EFBF1F;
  background-color: #fff;
  z-index: 2;
}
li.active .icon-wrap {
  display: block;
}
li:hover {
  background-color: #fff;
}
li:hover >.icon-wrap {
  display: block;
}
.modify input[type=text] {
  width: 261px;
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
  padding: 5px;
  cursor: pointer;
}
</style>

