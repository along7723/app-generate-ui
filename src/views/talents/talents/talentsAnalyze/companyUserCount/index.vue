<template>
  <div class="app-container">
    <el-row type="flex" class="row-bg" :style="conHeight">
      <el-col :span="8" style="margin-right: 10px;">
        <el-card class="box-card">
          <div slot="header" style="text-align: center;">
            <span>企业在职人数排名</span>
          </div>
          <model1 :defaultHeight="conHeight.height"/>
        </el-card>
      </el-col>
      <el-col :span="8" style="margin-right: 10px;">
        <el-card class="box-card">
          <div slot="header" style="text-align: center;">
            <span>单位数量变化趋势</span>
          </div>
          <div>
            <model2 :defaultHeight="conHeight.height"/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">

        <el-card class="box-card">
          <div slot="header" style="text-align: center;">
            <span>单位类型分布</span>
          </div>
          <div>
            <model3 :defaultHeight="conHeight.height"/>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>

</template>

<style scoped>
  .box-card {
    height: 100%;
  }

</style>

<script>
  import model1 from './model1'
  import model2 from './model2'
  import model3 from './model3'
  import model4 from './model4'
  import model5 from './model5'

  export default {
    name: 'leave',
    components: {
      model1, model2, model3, model4, model5
    },
    data() {
      return {
        conHeight: {
          height: ''
        }
      }
    },
    created() {
      this.setHi()
    },
    methods: {
      setHi() {
        this.conHeight.height = window.innerHeight - 200
      }
    }
  }
</script>
