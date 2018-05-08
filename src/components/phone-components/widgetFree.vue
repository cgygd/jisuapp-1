<script>
import WidgetText from './WidgetText'
import WidgetImage from './WidgetImage'
import {mapGetters, mapActions} from 'Vuex'
export default {
  name: 'free',
  props: ['widgetdata'],
  data () {
    return {
      active: null
    }
  },
  render (h) {
    let d = this.widgetdata.child
    let widget = d.map((v, i) => {
      return h('widget-' + v.name, {
        props: {
          widgetdata: {
            content: v.content,
            id: i,
            parentId: this.widgetdata.id
          }
        },
        nativeOn: {
          click: (e) => {
            e.stopPropagation()
            this.$router.push(v.name)
            this.selectWidget(this.widgetdata.id + '.child.' + i)
          }
        },
        class: {
          'select-border': true,
          active: this.isActive(i)
        },
        style: this.getStyleStr(this.widgetdata.id + '.child.' + i, 'parentStyle')
      })
    })
    return h('div', {
      'class': {
        free: true
      },
      style: this.getStyleStr(this.widgetdata.id, 'parentStyle')
    }, widget)
  },
  computed: {
    ...mapGetters([
      'getStyleStr',
      'getSelectActive'
    ]),
    isActive () {
      return (i) => {
        const arr = this.getSelectActive
        if (Array.isArray(arr)) {
          return +arr[0] === this.widgetdata.id && +arr[1] === i
        }
      }
    }
  },
  methods: {
    ...mapActions([
      'selectWidget'
    ])
  },
  components: {
    WidgetText,
    WidgetImage
  }
}
</script>
<style scoped>
.free {
  position: relative;
  max-width: 100%;
}
</style>
