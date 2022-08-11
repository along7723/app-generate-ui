<template>
  <div class="app-container">
    <el-row type="flex" class="row-bg">
      <el-col :span="6" style="margin-right: 10px;">
        <el-card class="box-card">
          <div slot="header" style="text-align: center;">
            <span>用户数据男女所占比例</span>
          </div>
          <div>
            <model1/>
          </div>
        </el-card>

        <el-card class="box-card" style="margin-top: 20px;">
          <div slot="header" style="text-align: center;">
            <span>年龄结构分析</span>
          </div>
          <div>
            <model2/>
          </div>
        </el-card>

      </el-col>
      <el-col :span="12" style="margin-right: 10px;">
        <el-card class="box-card">
          <div slot="header" style="text-align: center;">
            <span>来源地分析</span>
          </div>
          <div>
            <model5/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">

        <el-card class="box-card">
          <div slot="header" style="text-align: center;">
            <span>少数民族结构分析</span>
          </div>
          <div>
            <model3/>
          </div>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px;">
          <div slot="header" style="text-align: center;">
            <span>文化程度分析</span>
          </div>
          <div>
            <model4/>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>

</template>

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
      return {}
    },
    created() {
    },
    methods: {}
  }
</script>
