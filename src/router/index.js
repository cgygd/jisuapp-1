import Vue from 'vue'
import Router from 'vue-router'
import Text from '../components/right-components/juTxtContent'
import Image from '../components/right-components/juImgContent'
import Seckill from '../components/right-components/juSeckillContent'
import Free from '../components/right-components/juFreeContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/text',
      component: Text
    },
    {
      path: '/image',
      component: Image
    },
    {
      path: '/Seckill',
      component: Seckill
    },
    {
      path: '/free',
      component: Free
    }
  ]
})
