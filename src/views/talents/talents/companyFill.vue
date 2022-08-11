<template>
  <talents
    v-if="compId"
    :compId="compId"
    v-loading="listLoading"
    :forceQueryOrAddData="{createCompId:compId}"/>
  <div v-else>
    <el-alert
      :title="message"
      type="error">
    </el-alert>
  </div>
</template>

<script>
  import talents from '@/views/talents/talents'
  import {
    queryInfo
  } from '../company/api_my'

  export default {
    name: 'CompanyFill',
    components: {
      talents
    },
    data() {
      return {
        compId: null,
        listData: null,
        listLoading: false,
        message: '加载中...'
      }
    },
    created() {
      this.query()
    },
    methods: {
      query(info) {
        this.listLoading = true
        // 默认排序
        info = info || {}

        queryInfo(info).then(response => {
          this.listData = response.data
          console.log('this.listData: ', this.listData)
          this.listLoading = false
          if (this.listData.list && this.listData.list.length > 0) {
            this.compId = this.listData.list[0]['compId']
          } else {
            this.message = '未查询到企业信息，请先进行企业填报！'
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
