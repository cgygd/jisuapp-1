// import Vue from 'Vue'
import util from '../util'
export default {
  changeWidgetSize ({commit}, d) {
    // 鼠标移动改变大小异步执行函数
    commit('changeWidgetSize', d)
  },
  changeStyle ({commit}, d) {
    // 输入框改变大小异步执行函数
    commit('changeStyle', d)
  },
  selectWidget ({state}, i) {
    state.currentSelectedId = i
  },
  setWidgetLocation ({commit}, d) {
    commit('setWidgetLocation', d)
  },
  deleteWidget ({state}, id) {
    typeof id === 'object' ? state.widget[id.parentId].child.splice(id.id, 1) : state.widget.splice(id, 1)
  },
  modifyPageName ({state}, d) {
    let s = state.pages
    typeof d.childId === 'number' ? s[d.childId].page[d.id].title = d.title : s[d.id].title = d.title
  },
  deletePage ({state}, d) {
    let s = state.pages
    typeof d.childId === 'number' ? s[d.childId].page.splice(d.id, 1) : s.splice(d.id, 1)
  },
  addMenu ({state}, d) {
    let s = state.pages
    let title = d.title || '新建空白页面'
    if (d.type) {
      let obj = util.extend(s[d.childId].page[d.id])
      s[d.childId].page.push(obj)
      let id = s[d.childId].page.length - 1
      s[d.childId].page[id].title += ' 的副本'

      state.pagesWidget.push(util.extend(state.pagesWidget[s[d.childId].page[id].widget]))
      s[d.childId].page[id].widget = state.pagesWidget.length - 1
    } else {
      if (typeof d.id === 'number') {
        state.pagesWidget.push([])
        s[d.id].page.push({
          title,
          path: 'home',
          widget: state.pagesWidget.length - 1
        })
      } else {
        s.push({
          title,
          page: []
        })
      }
    }
  },
  setWidgetContent ({state}, d) {
    state.currentSelectedId = null
    state.widget = state.pagesWidget[d]
    state.widgetId = d
  }
}
