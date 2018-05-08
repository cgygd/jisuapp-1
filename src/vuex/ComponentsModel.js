export default [
  {
    name: 'text',
    title: '文本组件',
    content: '新建的文本组件',
    parentStyle: {
      top: 0,
      left: 0
    },
    style: {
      top: 0,
      left: 0,
      width: false,
      height: false,
      fontSize: 14,
      color: '#666666',
      lineHeight: 19,
      textAlign: 'center',
      background: '',
      fontWeight: '',
      textDecoration: '',
      fontStyle: '',
      BoxShadow: {
        show: false,
        name: 'box-shadow',
        style: {
          level: 0,
          vertical: 0,
          radius: 5,
          extension: 3,
          color: '#666666',
          inset: false
        }
      },
      Border: {
        show: false,
        name: 'border',
        style: {
          width: 1,
          style: 'solid',
          color: '#666666'
        }
      }
    }
  },
  {
    name: 'image',
    title: '图片组件',
    content: {
      src: 'data:image/jpeg;base64,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',
      title: '这才算东西'
    },
    parentStyle: {
      top: 30,
      left: 20,
      textAlign: 'center'
    },
    style: {
      height: 60,
      width: 50,
      left: 20,
      top: 30,
      borderRadius: 0,
      opacity: '1',
      Border: {
        name: 'border',
        show: false,
        style: {
          width: 1,
          style: 'solid',
          color: '#666666'
        }
      },
      BoxShadow: {
        show: false,
        name: 'box-shadow',
        style: {
          level: 0,
          vertical: 0,
          radius: 5,
          extension: 3,
          color: '#666666',
          inset: false
        }
      }
    }
  },
  {
    name: 'free',
    title: '自由面板组件',
    parentStyle: {
      height: 150,
      width: 320,
      background: '#ffffff',
      outline: {
        show: true,
        name: 'outline',
        style: {
          width: 1,
          style: 'dashed',
          color: '#dddddd'
        }
      }
    },
    child: []
  },
  {
    name: 'seckill',
    title: '秒杀组件',
    parentStyle: {
      marginTop: 8,
      opacity: '1',
      color: '',
      background: '#ffffff'
    },
    css: 'thrid-mode',
    style: {
      height: 250,
      marginBottom: 0,
      background: '#ffffff'
    },
    imgStyle: {
      height: 140,
      width: 140
    },
    titleStyle: {
      fontSize: 15,
      color: '#666666'
    },
    method: {
      service: false,
      integral: false,
      goodsData: 'ECommerce',
      goodsClassify: 'all'
    }
  }
]
