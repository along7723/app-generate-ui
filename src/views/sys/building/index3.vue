<template>
  <el-container>
    <el-card class="box-card">
      <div>功能建设中...</div>
      <button @click="expExcel">
        测试导出
      </button>
      <a href='"/sys/generate/test/expData"' download="exd.xlsx">测试</a>
    </el-card>
  </el-container>
</template>
<script>
  import { fetchExportBill } from './api'
  import { fetchExportFile } from '@/utils/expfile'

  export default {
    data() {
      return {
        taskId: undefined
      }
    },
    created() {
    },
    methods: {
      expExcel() {
        fetchExportBill({ 'tableId': '3092' }).then(res => {
          fetchExportFile(res)
        }).catch(res => {
          console.log(res)
        })
      }

    }
  }


</script>
<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .el-container {
    text-align: center;
  }

  .box-card {
    width: 480px;
    margin: auto;
    margin-top: 200px;
    font-size: 20px;
  }
</style>
