/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'Charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/common/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: '琴键图', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/common/charts/line'),
      name: 'LineChart',
      meta: { title: '拆线图', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/common/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Mix Chart', noCache: true }
    }
  ]
}

export default chartsRouter
