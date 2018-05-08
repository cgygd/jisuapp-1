<template>
  <div class="control-wrap">
    <span class="move-headline" :class="this.id? '':'active'" @mousedown="changelocation">
      <i></i>
      <i></i>
      <i></i>
    </span>
    <span class="ele-delete" @click="deleted">×</span>
  </div>  
</template>
<script>
import {mapActions, mapGetters} from 'Vuex'
export default {
  name: 'moveHeadline',
  props: ['id'],
  computed: {
    ...mapGetters([
      'getRouteName'
    ])
  },
  methods: {
    ...mapActions([
      'setWidgetLocation',
      'deleteWidget'
    ]),
    deleted () {
      this.deleteWidget(this.id)
    },
    setRoute (id) {
      let name = this.getRouteName
      this.$router.push(name)
    },
    changelocation (e) {
      e = e || window.Event
      e.preventDefault()
      let y = e.clientY
      let x = e.clientX
      let domarr = document.querySelectorAll('.widget-view')
      const box = document.querySelector('.view-container')
      let ttop = box.offsetTop + 32
      let domtop = []
      let domHeight = []
      let currentId = this.id
      let _thisHeigt
      let _thisTop
      let tx = 0
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
      this.setWidgetLocation(this.id)
      this.setWidgetLocation({
        type: 'move',
        currentId,
        style: {
          top: `${_thisTop - ttop}px`,
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
        let t = currentY - y
        tx += currentX - x
        currentId = t < 0 ? domtop.findIndex((a, i) => (a + domHeight[i] / 2) > (currentY - topY)) : domtop.findIndex((a, i) => (a + domHeight[i]) > (currentY - topY + domHeight[i] / 2))
        currentId = currentId < 0 ? domtop.length - 1 : currentId
        this.setWidgetLocation({
          type: 'move',
          beforeId: this.id,
          style: {
            top: `${currentY - topY - ttop}px`,
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
          top: y - topY - ttop,
          placeTopStart: domtop[currentId] - ttop,
          placeTopEnd: domtop[currentId] - ttop + domHeight[currentId],
          currentId
        })
        this.setRoute(currentId)
        document.onmouseup = null
      }
    }
  }
}
</script>
<style scoped>
.control-wrap {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 99
}
.control-wrap:hover {
  border: 1px solid #37a1ec;
}
.control-wrap:hover >.move-headline {
  display: block;
}
.active {
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  width: 55px;
  height: 14px;
  margin-left: -28px;
  border: 1px solid #37a1ec;
  border-top: none;
  border-radius: 0 0 3px 3px;
  background: #fff;
  cursor: move;
}
.control-wrap:hover >.ele-delete {
  display: block;
}
.move-headline {
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  width: 55px;
  height: 14px;
  margin-left: -28px;
  border: 1px solid #37a1ec;
  border-top: none;
  border-radius: 0 0 3px 3px;
  background: #fff;
  cursor: move;
}
.move-headline i,.active i {
  display: block;
  width: 15px;
  margin-top: 2px;
  margin-left: auto;
  margin-right:auto;
  border-top: 1px solid #37a1ec;
}
.ele-delete {
  display: none;
  position: absolute;
  top: -1px;
  right: -1px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border: 1px solid #37a1ec;
  color: #37a1ec;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
}
</style>
