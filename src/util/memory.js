function changelocation (e) {
  e = e || window.Event
  e.preventDefault()
  let y = e.clientY
  let x = e.clientX
  let t = 0
  let tx = 0
  let domarr = document.querySelectorAll('.widget-view')
  const box = document.querySelector('.view-container')
  let ttop = box.offsetTop + 32
  let domtop = []
  let domHeight = []
  let currentId = this.id
  let _thisHeigt
  let _thisTop
  for (let i = 0; i < domarr.length; i++) {
    if (this.id === i) {
      _thisHeigt = +getComputedStyle(domarr[i], null).height.replace(/px$/g, '')
      domtop.push(domarr[i].offsetTop + ttop)
      _thisTop = domtop[this.id]
    } else if (i > this.id) {
      domtop.push(domarr[i].offsetTop + (38 - _thisHeigt) + ttop)
    } else {
      domtop.push(domarr[i].offsetTop + ttop)
    }
    domHeight.push(+getComputedStyle(domarr[i], null).height.replace(/px$/g, ''))
  }

  _thisHeigt = _thisHeigt < 38 ? 38 : _thisHeigt
  let topY = y - _thisTop
  let bottomY = _thisHeigt - topY
  this.setWidgetLocation(this.id)
  this.setWidgetLocation({
    type: 'move',
    currentId,
    style: {
      top: `${_thisTop}px`,
      height: _thisHeigt + 'px',
      opacity: '0.6',
      lineHeight: _thisHeigt + 'px',
      fontSize: '25px',
      left: '0'
    }
  })

  document.onmousemove = (e) => {
    e = e || window.Event
    let currentY = e.clientY
    let currentX = e.clientX
    t += currentY - y
    tx += currentX - x
    currentId = t < 0 ? domtop.findIndex((a, i) => (a + domHeight[i] / 2) > (currentY - topY)) : (domtop.findIndex((a, i) => (a + domHeight[i] / 2) > (currentY + bottomY)) + 1)
    currentId = currentId < 0 ? 0 : currentId
    this.setWidgetLocation({
      type: 'move',
      beforeId: this.id,
      style: {
        top: `${currentY - topY}px`,
        height: _thisHeigt + 'px',
        opacity: '0.6',
        lineHeight: _thisHeigt + 'px',
        fontSize: '25px',
        left: `${tx}px`,
        background: 'rgba(226, 223, 223, 0.7)'
      },
      currentId
    })
    y = currentY
    x = currentX
  }
  document.onmouseup = () => {
    document.onmousemove = null
    this.setWidgetLocation({
      type: 'stop',
      beforeId: this.id,
      top: y - topY,
      placeTopStart: domtop[currentId],
      placeTopEnd: domtop[currentId] + domHeight[currentId],
      currentId
    })
    this.setRoute(currentId)
    document.onmouseup = null
  }
}

function changelocation (e) {
  e = e || window.Event
  e.preventDefault()
  let y = e.clientY
  let x = e.clientX
  let t = 0
  let tx = 0
  let domarr = document.querySelectorAll('.widget-view')
  let domtop = []
  let domHeight = []
  let currentId = this.id
  for (let i = 0; i < domarr.length; i++) {
    domtop.push(domarr[i].offsetTop)
    domHeight.push(+getComputedStyle(domarr[i], null).height.replace(/px$/g, ''))
  }
  let _thisHeigt = domHeight.splice(this.id, 1)[0]
  let _thisTop = domtop[this.id]
  console.log(domtop, y)
  _thisHeigt = _thisHeigt < 38 ? 38 : _thisHeigt
  this.setWidgetLocation(this.id)
  this.setWidgetLocation({
    type: 'move',
    currentId,
    style: {
      top: `${_thisTop}px`,
      height: _thisHeigt + 'px',
      opacity: '0.6',
      lineHeight: _thisHeigt + 'px',
      fontSize: '25px',
      left: '0'
    }
  })
  // let speed = _thisHeigt < 38 ? _thisHeigt : 38
  domHeight.splice(this.id, 0, 38)

  document.onmousemove = (e) => {
    e = e || window.Event
    let currentY = e.clientY
    let currentX = e.clientX
    t += currentY - y
    tx += currentX - x
    currentId = t < 0 ? domtop.findIndex((a, i) => t + _thisTop < a) : domtop.findIndex((a, i) => t + _thisTop < a + domHeight[i] - domHeight[i - 1])
    currentId = currentId < 0 ? domtop.length - 1 : currentId
    this.setWidgetLocation({
      type: 'move',
      beforeId: this.id,
      style: {
        top: `${t + _thisTop}px`,
        height: _thisHeigt + 'px',
        opacity: '0.6',
        lineHeight: _thisHeigt + 'px',
        fontSize: '25px',
        left: `${tx}px`,
        background: 'rgba(226, 223, 223, 0.7)'
      },
      currentId
    })
    y = currentY
    x = currentX
  }
  document.onmouseup = () => {
    document.onmousemove = null
    this.setWidgetLocation({
      type: 'stop',
      beforeId: this.id,
      top: t + domtop[this.id],
      placeTopStart: domtop[currentId],
      placeTopEnd: domtop[currentId] + domHeight[currentId],
      currentId
    })
    document.onmouseup = null
  }
}
