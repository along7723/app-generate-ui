<template>
  <div>
    <timeline :timeLineData="list"/>
  </div>
</template>

<script>
  import timeline from '@/components/TimeLine'

  export default {
    components: {
      timeline
    },
    data() {
      return {
        list: [{
          date: '2016-09-30',
          title: 'title',
          description: '描述',
          category: '类别',
          icon: 'code',
          color: 'white',
          thumbnail: '图片地址',
          isLast: false
        }, {
          date: '2016-09-30',
          title: '2016-09-30',
          description: '2016-09-30',
          category: '类别',
          icon: 'code',
          color: 'white',
          isLast: false
        }, {
          date: '2016-09-30',
          title: '2016-09-30',
          description: '2016-09-30',
          category: '类别',
          icon: 'code',
          color: 'white',
          isLast: false
        }, {
          date: '2016-12-30',
          title: '2016-12-30',
          description: '2016-12-30',
          category: '类别',
          icon: 'code',
          color: 'white',
          isLast: false
        }, {
          date: '2016-09-30',
          title: '2016-09-30',
          description: '描述',
          category: '类别',
          icon: 'code',
          color: 'white',
          isLast: true
        }]
      }
    },
    created() {
    },
    methods: {}
  }


</script>
<style scoped>

</style>
