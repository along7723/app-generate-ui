<template>
  <notification v-if="id" readonly-mode useCustomDetailView singleDataMode :id="id"
                :forceQueryOrAddData="{status: '2'}"/>
  <notification v-else-if="!id" readonly-mode useCustomDetailView :forceQueryOrAddData="{status: '2'}"/>
</template>

<script>
  import notification from '@/views/talents/notification'
  import { refresh } from '@/utils/comm-utils'

  export default {
    name: 'myNotification',
    components: {
      notification
    },
    data() {
      return {
        id: null
      }
    },
    created() {
      if (this.$route.query['id']) {
        this.id = this.$route.query.id
        console.log('this.id', this.id)
      } else {
        this.id = null
      }
    },
    // 监听路由参数变化
    beforeRouteUpdate(to, from, next) {
      if (to.query.id) {
        this.id = to.query.id
      } else {
        this.id = null
      }
      next()//一定不要忘记写
    }
  }
</script>

<style scoped>

</style>
