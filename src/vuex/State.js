import componentsModul from './ComponentsModel'
import pagesWidget from './PagesWidget'
export default {
  widgetNav: {
    often: [
      {
        name: 'text',
        title: '文本',
        iconCss: 'icon-text',
        helpUrl: './texthelp.html',
        vipPower: 0,
        using: 1
      },
      {
        name: 'image',
        title: '图片',
        iconCss: 'icon-picture',
        helpUrl: './imagehelp.html',
        vipPower: 0,
        using: 1
      },
      {
        name: 'button',
        title: '按钮',
        iconCss: 'icon-button',
        helpUrl: './buttonhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'title-ele',
        title: '标题',
        iconCss: 'icon-title-ele',
        helpUrl: './titlehelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'banner',
        title: '轮播',
        iconCss: 'icon-carousel',
        helpUrl: './bannerhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'classify',
        title: '分类',
        iconCss: 'icon-classify',
        helpUrl: './classifyhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'album',
        title: '图片列表',
        iconCss: 'icon-album',
        helpUrl: './albumhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'list',
        title: '图文集',
        iconCss: 'icon-list',
        helpUrl: './listhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'video',
        title: '视频',
        iconCss: 'icon-video',
        helpUrl: './videohelp.html',
        vipPower: 0,
        using: 0
      }
    ],
    layout: [
      {
        name: 'layout',
        title: '双栏',
        iconCss: 'icon-layout-vessel',
        helpUrl: './layout-vesselhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'static',
        title: '面板',
        iconCss: 'icon-static-vessel',
        helpUrl: './static-vesselhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'free',
        title: '自由面板',
        iconCss: 'icon-free-vessel',
        helpUrl: './free-vesselhelp.html',
        vipPower: 0,
        using: 1
      },
      {
        name: 'top-nav',
        title: '顶部导航',
        iconCss: 'icon-top-nav',
        helpUrl: './top-navhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'bottom-nav',
        title: '底部导航',
        iconCss: 'icon-bottom-nav',
        helpUrl: './bottom-navhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'breakline',
        title: '分割线',
        iconCss: 'icon-breakline',
        helpUrl: './breaklinehelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'dynamic',
        title: '动态分类',
        iconCss: 'icon-dynamic-classify',
        helpUrl: './dynamic-classifyhelp.html',
        vipPower: 0,
        using: 0
      }
    ],
    senior: [
      {
        name: 'listVessel',
        title: '动态列表',
        iconCss: 'icon-list-vessel',
        helpUrl: './list-vesselhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'userCenter',
        title: '个人中心',
        iconCss: 'icon-user-center',
        helpUrl: './user-centerhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'formVessel',
        title: '动态表单',
        iconCss: 'icon-form-vessel',
        helpUrl: './form-vesselhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'bbs',
        title: '评论',
        iconCss: 'icon-bbs',
        helpUrl: './bbshelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'countEle',
        title: '计数',
        iconCss: 'icon-count-ele',
        helpUrl: './count-elehelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'goodsList',
        title: '商品列表',
        iconCss: 'icon-goods-list',
        helpUrl: './goods-listhelp.html',
        vipPower: 1,
        using: 0
      },
      {
        name: 'map',
        title: '地图',
        iconCss: 'icon-map',
        helpUrl: './maphelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'sort',
        title: '排序',
        iconCss: 'icon-sort',
        helpUrl: './sorthelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'search',
        title: '搜索',
        iconCss: 'icon-search',
        helpUrl: './searchhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'franchiseeList',
        title: '商家列表',
        iconCss: 'icon-franchisee-list',
        helpUrl: './franchisee-listhelp.html',
        vipPower: 2,
        using: 0
      },
      {
        name: 'tokeout',
        title: '外卖',
        iconCss: 'icon-tokeout',
        helpUrl: './tokeouthelp.html',
        vipPower: 2,
        using: 0
      },
      {
        name: 'tostore',
        title: '到店(公测中)',
        iconCss: 'icon-tostore',
        helpUrl: './tostorehelp.html',
        vipPower: 2,
        using: 0
      },
      {
        name: 'community',
        title: '社区',
        iconCss: 'icon-community',
        helpUrl: './communityhelp.html',
        vipPower: 2,
        using: 0
      },
      {
        name: 'citylocation',
        title: '城市定位',
        iconCss: 'icon-citylocation',
        helpUrl: './citylocationhelp.html',
        vipPower: 2,
        using: 0
      },
      {
        name: 'suspension',
        title: '悬浮窗',
        iconCss: 'icon-suspension',
        helpUrl: './suspensionhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'seckill',
        title: '秒杀',
        iconCss: 'icon-seckill',
        helpUrl: './seckillhelp.html',
        vipPower: 2,
        using: 1
      },
      {
        name: 'videoList',
        title: '视频列表',
        iconCss: 'icon-video-list',
        helpUrl: './video-listhelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'webview',
        title: 'web页面',
        iconCss: 'icon-webview',
        helpUrl: './webviewhelp.html',
        vipPower: 0,
        using: 0
      }
    ],
    oter: [
      {
        name: 'audio',
        title: '音频',
        iconCss: 'icon-audio',
        helpUrl: './audiohelp.html',
        vipPower: 0,
        using: 0
      },
      {
        name: 'dynamicVessel',
        title: '动态容器',
        iconCss: 'icon-dynamic-vessel',
        helpUrl: './dynamic-vesselhelp.html',
        vipPower: 0,
        using: 0
      }
    ]
  },
  widget: null,
  widgetId: null,
  currentSelected: null,
  currentSelectedId: null,
  changeView: {
    id: null,
    location: {
      top: '0',
      left: '0',
      height: '38px'
    },
    fictitiousDom: null,
    place: false
  },
  pages: [
    {
      title: '一级菜单',
      page: [
        {
          title: '页面一',
          path: 'home',
          widget: 0
        },
        {
          title: '页面二',
          path: 'home',
          widget: 1
        }
      ]
    },
    {
      title: '二级菜单',
      page: [
        {
          title: '页面四',
          path: 'home',
          widget: 2
        }
      ]
    }
  ],
  rightIsShow: null,
  rightTabIsActive: 0,
  componentsModul,
  pagesWidget
}
