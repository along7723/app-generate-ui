<template>
  <div class="app-container">
    <el-row type="flex" class="row-bg">
      <el-col :span="6" style="margin-right: 10px;">
        <el-card class="box-card">
          <div slot="header" style="text-align: center;">
            <span>企业在职人数排名</span>
          </div>
          <div>
            <model1/>
          </div>
        </el-card>

        <el-card class="box-card" style="margin-top: 20px;">
          <div slot="header" style="text-align: center;">
            <span>单位数量变化趋势</span>
          </div>
          <div>
            <model2/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" style="margin-right: 10px;">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content">
              <div>单位总数</div>
              <div style="margin-top: 5px;">52</div>

            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div>国有企业数量</div>
              <div style="margin-top: 5px;">52</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div>政府单位数量</div>
              <div style="margin-top: 5px;">52</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div>民营企业数量</div>
              <div style="margin-top: 5px;">52</div>
            </div>
          </el-col>
        </el-row>
        <el-card class="box-card">
          <div slot="header" style="text-align: center;">
            <span>国有企业总览</span>
          </div>
          <div>
            <model4 style="float: left"/>
            <el-table
              :data="tableData"
              style="width: 60%">
              <el-table-column
                prop="name"
                label="单位名称"
                width="160">
              </el-table-column>
              <el-table-column
                prop="type"
                label="单位类别"
                width="100">
              </el-table-column>
              <el-table-column
                prop="state"
                label="状态">
              </el-table-column>
              <el-table-column
                prop="address"
                :show-overflow-tooltip='true'
                label="地址">
              </el-table-column>

            </el-table>

          </div>
        </el-card>
        <el-card class="box-card" style="margin-top: 5px;">
          <div slot="header" style="text-align: center;">
            <span>民营企业总览</span>
          </div>
          <div>
            <model5 style="float: left"/>
            <el-table
              :data="tableData2"
              style="width: 60%">
              <el-table-column
                prop="name"
                label="单位名称"
                width="160">
              </el-table-column>
              <el-table-column
                prop="type"
                label="单位类别"
                width="100">
              </el-table-column>
              <el-table-column
                prop="state"
                label="负责人">
              </el-table-column>
              <el-table-column
                prop="address"
                :show-overflow-tooltip='true'
                label="负责人电话">
              </el-table-column>

            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">

        <el-card class="box-card">
          <div slot="header" style="text-align: center;">
            <span>单位类型分布</span>
          </div>
          <div>
            <model3/>
          </div>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px;">
          <div slot="header" style="text-align: center;">
            <span>不良征信企业列表</span>
          </div>
          <div>
            <el-table
              :data="tableData3">
              <el-table-column
                prop="name"
                label="单位名称"
              >
              </el-table-column>
              <el-table-column
                prop="type"
                label="单位类别">
              </el-table-column>
              <el-table-column
                prop="state"
                label="负责人">
              </el-table-column>
              <el-table-column
                prop="address"
                :show-overflow-tooltip='true'
                label="负责人电话">
              </el-table-column>

            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>

</template>

<style>
  .el-row {
    margin-bottom: 5px;
  }

  .grid-content {
    background: #FFFFFF;
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
    padding: 10px 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
        tableData: [{
          name: '中关村供热厂',
          type: '国有企业',
          state: '在业',
          address: '北京市海淀区中关村北二条甲1号'
        }, {
          name: '中国银行',
          type: '国有企业',
          state: '在业',
          address: '北京市西城区复兴门内大街1号'
        }, {
          name: '中国石化',
          type: '国有企业',
          state: '在业',
          address: '中国北京市朝阳区朝阳门北大街22号'
        }, {
          name: '中关村开发实验室',
          type: '国有企业',
          state: '在业',
          address: '海淀区中关村保福寺100号'
        }, {
          name: '中关村开发实验室',
          type: '国有企业',
          state: '在业',
          address: '海淀区中关村保福寺100号'
        }],

        tableData2: [{
          name: '永辉生活',
          type: '民营企业',
          state: '张航',
          address: '136****3487'
        }, {
          name: '阿里巴巴',
          type: '民营企业',
          state: '马云',
          address: '135****7587'
        }, {
          name: '腾讯',
          type: '民营企业',
          state: '马化腾',
          address: '133****8887'
        }, {
          name: '网易',
          type: '民营企业',
          state: '丁磊',
          address: '138****7558'
        }, {
          name: '律动健身',
          type: '民营企业',
          state: '赵志航',
          address: '139****3777'
        }],

        tableData3: [{
          name: '鸿翔嘉山',
          type: '民营企业',
          state: '曾一鸣',
          address: '134****3487'
        }, {
          name: '维恩口腔',
          type: '民营企业',
          state: '邓志明',
          address: '134****7587'
        }, {
          name: '九方教育',
          type: '民营企业',
          state: '张翔',
          address: '134****8887'
        }, {
          name: '私家生活馆',
          type: '民营企业',
          state: '吴飞',
          address: '134****7558'
        }, {
          name: '吴家私房菜',
          type: '民营企业',
          state: '郝佳明',
          address: '134****3777'
        }]

      }
    },
    created() {
    },
    methods: {}
  }
</script>
