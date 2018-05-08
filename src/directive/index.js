export default {
  bred: {
    bind (el, b, v) {
    }
  },
  widgetmove: {
    bind (el, b) {
      el.onmousedown = (e) => {
        // e.preventDefault()
        let x = e.clientX
        let y = e.clientY
        document.onmousemove = (e) => {
          let currentX = e.clientX
          let currentY = e.clientY
          b.value.fn({
            id: b.value.id,
            el: 'move',
            x: currentX - x,
            y: currentY - y
          })
          x = currentX
          y = currentY
        }
        document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    }
  }
}
