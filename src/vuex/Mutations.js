import util from '../util'
export default {
  changeWidgetSize (state, d) {
    // 鼠标移动改变大小
    let style = isNaN(d.id) ? state.currentSelected.style : state.widget[d.parentId].child[d.id].style
    let pStyle = isNaN(d.id) ? state.currentSelected.parentStyle : state.widget[d.parentId].child[d.id].parentStyle
    let freeH = state.widget[d.parentId].parentStyle.height
    let freeW = state.widget[d.parentId].parentStyle.width
    if (d.width && d.height) {
      style.height !== d.height && (style.height = d.height)
      style.width !== d.width && (style.width = d.width)
    }
    switch (d.el) {
      case 'l':
        style.width -= d.x
        pStyle.left += d.x
        break
      case 't':
        style.height -= d.y
        pStyle.top += d.y
        style.lineHeight = style.height
        break
      case 'r':
        style.width += d.x
        break
      case 'b':
        style.height += d.y
        style.lineHeight = style.height
        break
      case 'lt':
        style.width -= d.x
        pStyle.left += d.x
        style.height -= d.y
        pStyle.top += d.y
        style.lineHeight = style.height
        break
      case 'tr':
        style.height -= d.y
        pStyle.top += d.y
        style.width += d.x
        style.lineHeight = style.height
        break
      case 'rb':
        style.width += d.x
        style.height += d.y
        style.lineHeight = style.height
        break
      case 'bl':
        style.height += d.y
        style.width -= d.x
        pStyle.left += d.x
        style.lineHeight = style.height
        break
      case 'move':
        pStyle.top += d.y
        pStyle.left += d.x
    }
    freeH -= style.height + 4
    freeW -= style.width + 4
    pStyle.top <= 0 && (pStyle.top = 0)
    pStyle.left <= 0 && (pStyle.left = 0)
    pStyle.top >= freeH && (pStyle.top = freeH)
    pStyle.left >= freeW && (pStyle.left = freeW)
  },
  changeStyle (state, d) {
    // 输入框改变大小
    let v = /^\d$/.test(d.value) ? +d.value : d.value
    let typeArr = d.type.split('.')
    function setS (...rest) {
      let a = util.deep(state.widget, state.currentSelectedId)
      let arr = rest.slice(0, rest.length - 1)
      for (let k of arr) {
        a = a[k]
      }
      d.type === 'style.Border.style' && (util.deep(state.widget, state.currentSelectedId).style.Border.show = true)
      if (rest.length > 2 && rest[rest.length - 1] !== 'show') {
        a.style[rest[rest.length - 1]] = v
      } else {
        a[rest[rest.length - 1]] = v
      }
    }
    setS.apply(null, typeArr)
  },
  setWidgetLocation (state, d) {
    // 移动组件位置
    state.currentSelectedId = null
    let s = state.changeView
    let wid = state.widget
    const odiv = {
      name: 'text',
      content: '放这里',
      style: {
        textAlign: 'center',
        height: 30,
        width: '100%',
        display: 'block',
        background: 'pink',
        opacity: '0.6',
        lineHeight: 30,
        border: {
          show: true,
          name: 'border',
          style: {
            width: 1,
            style: 'dashed',
            color: 'red'
          }
        }
      }
    }
    if (typeof d === 'number') {
      s.id = d
      if (wid[s.id].name === 'image' || wid[s.id].name === 'text' || wid[s.id].name === 'button') {
        s.place = true
      } else {
        s.place = false
      }
      s.fictitiousDom = wid.splice(s.id, 1)
      wid.splice(s.id, 0, odiv)
    } else if (typeof d === 'object' && d != null) {
      if (d.type === 'move') {
        s.location = d.style
        wid.splice(s.id, 1)
        wid.splice(d.currentId, 0, odiv)
        s.id = d.currentId
      } else if (d.type === 'stop') {
        wid.splice(s.id, 1)

        let fireeId = s.id ? s.id - 1 : s.id
        let isFree = s.id ? wid[fireeId].name === 'free' : false
        if (s.place && isFree && d.top >= d.placeTopStart && d.top <= d.placeTopEnd) {
          wid[fireeId].child.push(s.fictitiousDom[0])
          state.currentSelectedId = (fireeId) + '.child.' + (wid[fireeId].child.length - 1)
        } else {
          wid.splice(s.id, 0, s.fictitiousDom[0])
          state.currentSelectedId = s.id
        }
        s.fictitiousDom = null
        s.id = null
      }
    }
  },
  addSubgroup (state, d) {
    const modul = state.componentsModul
    for (let i = 0; i < modul.length; i++) {
      if (modul[i].name === d) {
        state.widget.push(util.extend(modul[i]))
        break
      }
    }
  }
}
