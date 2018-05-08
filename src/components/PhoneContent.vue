<script>
import WidgetText from './phone-components/WidgetText'
import WidgetImage from './phone-components/WidgetImage'
import WidgetView from './phone-components/widgetView'
import moveHeadline from './phone-components/moveHeadline'
import widgetSeckill from './phone-components/widgetSeckill'
import widgetFree from './phone-components/widgetFree'
import {mapGetters, mapActions} from 'Vuex'
export default {
  name: 'phoneContent',
  render (h) {
    let widgetinfo = this.$store.state.widget
    let f = this.getChangeView('id')
    let widget = widgetinfo.map((v, i) => {
      return h('widget-view', {
        props: {
          datas: {
            id: i,
            name: v.name
          }
        },
        class: {
          change: this.getSelectActive === i
        }
      }, [
        h('move-headline', {
          props: {
            id: i
          }
        }),
        h('widget-' + v.name, {
          props: {
            widgetdata: {
              content: v.content,
              id: i,
              child: v.child
            }
          },
          class: {
            'select-border': false
          },
          style: this.getStyleStr(i, 'parentStyle')
        })
      ])
    })
    f && widget.push(
      h('div', {
        class: {
          'move-change': true
        },
        style: this.getChangeView()
      }, [h('move-headline'), '组件模板'])
    )
    return h('div', { 'class': { 'phone-content': true } }, widget)
  },
  data () {
    return {
      active: null
    }
  },
  methods: {
    ...mapActions([
      'selectWidget',
      'setWidgetContent'
    ])
  },
  computed: {
    ...mapGetters([
      'getStyleStr',
      'getChangeView',
      'getSelectActive'
    ])
  },
  components: {
    WidgetText,
    WidgetImage,
    WidgetView,
    moveHeadline,
    widgetSeckill,
    widgetFree
  }
}
</script>
<style scoped>
.phone-content {
  position: relative;
  height: calc(100% - 64px);
  width: 100%;
  background: #fff;
  border: 1px solid rgba(146, 146, 146, 0.5);
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.phone-content::-webkit-scrollbar {
  width: 2px;
  height: 12px;
  border-radius: 12px;
}
.phone-content::-webkit-scrollbar-thumb {
  background: #6B747A;
  border-radius: 12px;
}
.phone-content::-webkit-scrollbar-track {
  background: #f5f5f5;
}
</style>
