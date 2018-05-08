import util from '../util'
export default {
  getStyleStr (state) {
    // 获取生成的组件样式
    return (d, type = 'style') => {
      try {
        let s = util.deep(state.widget, d)[type]
        let str = ''
        for (let key in s) {
          let b = ''
          if (typeof s[key] === 'object') {
            // 组合样式渲染,可关闭的样式
            let da = s[key]
            let showStye = da.name + ':'
            if (da.show) {
              let o = da.style
              for (let k in o) {
                showStye += ` ${typeof o[k] === 'boolean' ? (o[k] ? k : '') : (isNaN(o[k]) ? o[k] : o[k] + 'px')}`
              }
              str += showStye + ';'
            }
          } else {
            // 渲染基本样式
            if (/[A-Z]/.test(key)) {
              b = key.replace(/[A-Z]/g, (a) => '-' + a.toLowerCase())
            } else if (!s[key]) {
              b = ''
            } else {
              b = key
            }
            str += b ? `${b}:${typeof s[key] !== 'number' ? s[key] : s[key] + 'px'};` : ''
          }
        }
        return str
      } catch (error) {
        console.log(error)
        debugger
      }
    }
  },
  getStyleAge (state) {
    // 获取组件样式可更改的信息
    var ret
    return (id) => {
      const s = util.deep(state.widget, state.currentSelectedId)
      let typeArr = id.split('.')
      ret = function (...rest) {
        let d = s
        let arr = rest.slice(0, rest.length - 1)
        for (let k of arr) {
          d = d[k]
        }
        d = rest.length > 2 && rest[rest.length - 1] !== 'show' ? d.style[rest[rest.length - 1]] : d[rest[rest.length - 1]]
        return d
      }
      return ret.apply(null, typeArr)
    }
  },
  getChangeView (state) {
    let s = state.changeView
    return (v) => {
      return v !== undefined ? s[v] : s.location
    }
  },
  getContent (state) {
    // 获取组件内容
    return (i, t) => {
      let s = state.widget[i]
      let arr = t.split('.')
      function ret (...rest) {
        let d = s
        for (let k of rest) {
          d = d[k]
        }
        return d
      }
      return ret.apply(null, arr)
    }
  },
  getPages (state) {
    // 获取组件页面标签
    return state.pages
  },
  getTabNavName (state) {
    // 获取右边编辑框的标题（组件标题）
    return [util.deep(state.widget, state.currentSelectedId).title, '组件样式']
  },
  getRouteName (state) {
    return util.deep(state.widget, state.currentSelectedId).name
  },
  getSelectActive (state) {
    return state.currentSelectedId && (typeof state.currentSelectedId === 'number' ? state.currentSelectedId : state.currentSelectedId.split('.').filter((o) => !isNaN(+o)))
  }
}
