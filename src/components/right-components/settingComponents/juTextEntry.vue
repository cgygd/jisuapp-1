<template>
  <div>
    <div class="setting-inline">
        <input type="number" class="in-number" id="number" v-model="fontSize" title="字体大小">
        <label for="number">px</label>
      <div class="block-inline">
        <span class="icon-fontStyle-bold" title="粗体" @click="boldActive=!boldActive" :class="boldActive?'active':''"></span>
        <span class="icon-fontStyle-italic" title="斜体" @click="italicActive=!italicActive" :class="italicActive?'active':''"></span>
        <span class="icon-fontStyle-underline" title="下划线" @click="underlineActive=!underlineActive" :class="underlineActive?'active':''"></span>
      </div>
      <input-color style="display:inline-block;vertical-align: middle;" :color-data='color' @onshift='callback' vtype='color' title="字体颜色"/>
      <div class="align-select"  title="对齐方式">
        <div class="select-current" @click="selectShow=!selectShow">
          <span :class="'icon-textAlign-'+align" :title="getTitle"></span>
        </div>
        <ul v-show="selectShow">
          <li class="icon-textAlign-left" @click="selectAlign" title="左对齐"></li>
          <li class="icon-textAlign-center" @click="selectAlign" title="居中对齐"></li>
          <li class="icon-textAlign-right" @click="selectAlign" title="右对齐"></li>
        </ul>
      </div>
    </div>
    <textarea v-model="title"></textarea>
  </div>
</template>
<script>
import inputColor from './inputColor'
export default {
  name: 'Entrytext',
  props: ['tdata'],
  data () {
    return {
      title: this.tdata.title,
      fontSize: this.tdata.fontSize,
      color: this.tdata.color,
      selectShow: false,
      align: this.tdata.align,
      boldActive: this.tdata.bold,
      italicActive: this.tdata.italic,
      underlineActive: this.tdata.underline
    }
  },
  methods: {
    selectAlign (e) {
      let elcss = e.target.className
      let eltitle = e.target.title
      this.align = elcss.match(/-(\w+)$/)[1]
      this.alignTitle = eltitle
      this.selectShow = false
    },
    callback (v) {
      this.color = v.value
    }
  },
  computed: {
    getTitle () {
      return this.tdata === 'left' ? '左对齐' : this.tdata === 'right' ? '右对齐' : '居中对齐'
    }
  },
  watch: {
    title (v) {
      this.$emit('onshift', {type: 'content', value: v})
    },
    fontSize (v) {
      this.$emit('onshift', {type: 'style.fontSize', value: +v})
      this.$emit('onshift', {type: 'style.lineHeight', value: +v + 4})
    },
    align (v) {
      this.$emit('onshift', {type: 'style.textAlign', value: v})
    },
    color (v) {
      this.$emit('onshift', {type: 'style.color', value: v})
    },
    boldActive (v) {
      v = v ? 'bolder' : 'normal'
      this.$emit('onshift', {type: 'style.fontWeight', value: v})
    },
    italicActive (v) {
      v = v ? 'italic' : 'normal'
      this.$emit('onshift', {type: 'style.fontStyle', value: v})
    },
    underlineActive (v) {
      v = v ? 'underline' : 'none'
      this.$emit('onshift', {type: 'style.textDecoration', value: v})
    }
  },
  components: {
    inputColor
  }
}
</script>
<style scoped>
.setting-inline {
  height: 28px;
  line-height: 28px;
  margin-bottom: 10px;
}
textarea {
  width: 100%;
  height: 150px;
  text-indent: 6px;
  color: #959595;
  border: 1px solid #d3d3d3;
}
input[type=number] {
  width: 70px;
  height: 26px;
  position: relative;
  padding-left: 10px;
  background: #f6f6f6;
  border-radius: 4px;
  outline: 0;
  border: 1px solid #d3d3d3;
  vertical-align: middle;
}
label {
  position: relative;
  margin-left: -40px;
  width: 16px;
  height: 19px;
  font-size: 16px;
}
.in-number::before {
  content: 'px';
  position: absolute;
  width: 16px;
  height: 19px;
  top: 4px;
  left: 40px;
  font-size: 16px;
  
}
.block-inline {
  display: inline-block;
  height: 28px;
  margin-left: 30px;
  margin-right: 5px;
  padding: 0 5px;
  border-left: 1px solid #959595;
  border-right: 1px solid #959595;
  vertical-align: middle;
}
.block-inline span {
  display: inline-block;
  width: 25px;
  height: 18px;
  line-height: 18px;
  padding: 4px 0;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
.block-inline span.active {
  background: #5fc8f7;
  color: #fff;
}
.align-select {
  display: inline-block;
  position: relative;
  margin-left: 20px;
  width: 28px;
  height: 28px;
  color: #959595;
  vertical-align: middle;
}
.select-current {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.select-current::before {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: 10px;
  right: 0px;
  border-width: 4px;
  border-color: transparent;
  border-style: solid;
  border-top: 5px solid #959595;
}
.align-select ul {
  display: block;
  position: absolute;
  top: 28px;
  width: 45px;
  border: 1px solid #959595;
  border-radius: 5px;
  overflow: hidden;
}
.align-select ul li {
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  padding: 0 10px;
  background: #fff;
  cursor: pointer;
}
.align-select ul li:hover {
  background: #5fc8f7;
}
</style>
