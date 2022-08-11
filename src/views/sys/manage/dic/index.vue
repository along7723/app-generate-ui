<template>
  <el-row style="padding: 15px;" :gutter="15">
    <el-col :span="4">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>字典管理</span>
        </div>
        <div id="tree" :style="{'height':scrollerHeight,'overflow-y': 'scroll'}">
          <div style="padding: 10px">
            <el-input
              placeholder="输入关键字进行过滤"
              v-model="filterText">
            </el-input>
          </div>
          <el-tree
            ref="myTree"
            :data="dataTree"
            node-key="id"
            default-expand-all
            @node-click="handleNodeClick"
            :filter-node-method="filterNode"
          >
            <span slot-scope="{ node, data }" class="custom-tree-node">
              <template v-if="data.icon != null">
                <template v-if="data.icon.includes('-')">
                  <span><i :class="data.icon"/>{{ node.label }}</span>
                </template>
                <template v-else>
                  <span><svg-icon icon-class="data.icon"/>{{ node.label }}</span>
                </template>
              </template>
              <template v-else>
                <span><i :class="data.icon"/>{{ node.label }}</span>
              </template>

            </span>
          </el-tree>
        </div>
      </el-card>

    </el-col>
    <el-col :span="20">
      <el-card class="box-card" style="position: relative; ">

        <div style="text-align:right; position:absolute; top:8px; right:20px;z-index: 3;">
          <el-button style="padding: 10px" type="success" @click="handleAddDic">添加字典</el-button>
        </div>

        <el-tabs v-model="activeTabName">
          <el-tab-pane label="字典信息" name="first">
            <el-alert
              title="填写说明"
              description="父菜单为空，表示创建一级菜单；菜单图标：可用Element-UI Icons 与 font-awesome 中的图标；组件名：为显示在地址栏的URL；组件路径：相对src/views/之后的路径"
              type="info"
              show-icon
              :closable="false"
              style="margin-bottom: 20px"
            />
            <el-form
              ref="detailForm"
              :model="dataDetail"
              :rules="rules"
              :inline="true"
              class="el-inline-form"
              label-width="132px"
            >
              <el-row>
                <el-col :span="12">
                  <el-form-item label="字典代码" prop="dicCode">
                    <el-input v-if="!update" v-model="dataDetail.dicCode" placeholder="字典的英文名"/>
                    <span v-else>{{dataDetail.dicCode}}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="字典名称" prop="dicName">
                    <el-input v-model="dataDetail.dicName" placeholder="字典的中文名称"/>
                  </el-form-item>
                </el-col>

                <el-col :span="24">
                  <el-form-item label="备注" prop="comment">
                    <el-input v-model="dataDetail.comment"/>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="字典分类" prop="standLevel">
                    <code-select :key="dataDetail.standLevel" v-model="dataDetail.standLevel" dic="DicType"/>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="前端缓存" prop="frontCache">
                    <code-select :key="dataDetail.dicCode" v-model="dataDetail.frontCache" dic="YesOrNo" type="radio"/>
                  </el-form-item>
                </el-col>
                <!--                <el-col :span="12">-->
                <!--                  <el-form-item label="组件样式" prop="selectorStyle">-->
                <!--                    <el-input v-model="dataDetail.selectorStyle" />-->
                <!--                  </el-form-item>-->
                <!--                </el-col>-->
                <el-col :span="12">
                  <el-form-item label="字典存储类型" prop="dicType">
                    <code-select :key="dataDetail.dicCode" v-model="dataDetail.dicType" dic="DicStoreType"
                                 type="radio"/>
                  </el-form-item>
                </el-col>
                <template v-if="dataDetail.dicType === 'MAPPING'">
                  <el-col :span="12">
                    <el-form-item label="映射表" prop="mapTable">
                      <el-input v-model="dataDetail.mapTable"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="映射代码字段" prop="mapCodeField">
                      <el-input v-model="dataDetail.mapCodeField"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="映射名称字段" prop="mapNameField">
                      <el-input v-model="dataDetail.mapNameField"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="映射拼音字段" prop="mapSpellField">
                      <el-input v-model="dataDetail.mapSpellField"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="映射父代码字段段" prop="mapParentCodeField">
                      <el-input v-model="dataDetail.mapParentCodeField"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="映射排序字段" prop="mapSortField">
                      <el-input v-model="dataDetail.mapSortField"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item label="映射条件语句" prop="mapWhereCase">
                      <el-input v-model="dataDetail.mapWhereCase"/>
                    </el-form-item>
                  </el-col>
                </template>
                <!--                <el-col :span="12">-->
                <!--                  <el-form-item label="字典项数量" prop="itemNum">-->
                <!--                    <el-input v-model="dataDetail.itemNum" />-->
                <!--                  </el-form-item>-->
                <!--                </el-col>-->
                <el-col :span="24">
                  <el-form-item label="是否启用" prop="enable">
                    <code-select key="dataDetail.enable" v-model="dataDetail.enable" dic="YesOrNo" type="radio"/>
                  </el-form-item>
                </el-col>
                <!--                <el-col :span="12">-->
                <!--                  <el-form-item label="创建时间" prop="createTime">-->
                <!--                    <el-input v-model="dataDetail.createTime" />-->
                <!--                  </el-form-item>-->
                <!--                </el-col>-->
                <!--                <el-col :span="12">-->
                <!--                  <el-form-item label="创建人" prop="createUser">-->
                <!--                    <el-input v-model="dataDetail.createUser" />-->
                <!--                  </el-form-item>-->
                <!--                </el-col>-->
                <el-col :span="24">
                  <el-form-item label=" ">
                    <el-button type="primary" @click="submitForm('detailForm')">提交</el-button>

                    <el-button type="danger" plain @click="handleDelMenu">删除</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="字典项" name="second">
            <dicItem :dic-code="dicCode" :dic-type="dicType"/>
          </el-tab-pane>
        </el-tabs>

      </el-card>

    </el-col>
  </el-row>

</template>

<script>
  import { getDicTree, getById, add, update, del } from '@/api/sys/manage/dic/dic'
  import codeSelect from '@/components/Sys/CodeSelect'
  import dicItem from '@/views/sys/manage/dic/dicItem'

  export default {
    components: {
      codeSelect,
      dicItem
    },
    data() {
      return {
        filterText: '',
        activeTabName: 'first',
        dataDetail: {
          dicType: 'INNER',
          standLevel: 'SYS',
          frontCache: '1'
        },
        dataTree: [],
        update: false,
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        dicItems: [],
        dicCode: 'null',
        dicType: undefined,
        rules: {
          dicCode: [
            { required: true, message: '请输入字典代码', trigger: 'blur' },
            { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
          ],
          dicName: [
            { required: true, message: '请输入字典名称', trigger: 'blur' },
            { min: 2, max: 20, message: '长度在 2 到 20 个字符，中间不能有/出现', trigger: 'blur' }
          ],
          dicType: [
            { required: true, message: '请选择字典类型', trigger: 'blur' }
          ], standLevel: [
            { required: true, message: '请选择字典分类', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      // 滚动区高度
      // (业务需求：手机屏幕高度减去头部标题和底部tabbar的高度，当然这2个高度也是可以动态获取的)
      scrollerHeight: function() {
        return (window.innerHeight - 210) + 'px'
      }
    },
    created() {
      // 初始化数据
      this.fetchAll()
    }, watch: {

      filterText(val) {
        this.$refs.myTree.filter(val)
      }
    },
    methods: {
      //树形菜单条件过滤
      filterNode(value, data, node) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      },
      fetchAll() {
        console.log('---------fetchAll:')
        getDicTree().then(response => {
          this.dataTree = response.data
          console.log('dataTree', this.dataTree)
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!')
            if (this.update) {
              update(this.dataDetail).then(response => {
                console.log('response:', response)
                this.$message({
                  message: '修改成功',
                  type: 'success'
                })
                this.fetchAll()
              })
            } else {
              add(this.dataDetail).then(response => {
                console.log('response:', response)
                this.$message({
                  message: '添加成功',
                  type: 'success'
                })
                this.fetchAll()
              })
            }
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      handleDelMenu() {
        if (!this.dataDetail.dicCode) {
          this.$message({
            message: '请先在左侧选择一个菜单',
            type: 'error'
          })
          return
        }

        const childrenData = this.$refs.myTree.getNode(this.dataDetail.id)
        if (childrenData) {
          const children = this.$refs.myTree.getNode(this.dataDetail.id).data.children
          if (children && children.length > 0) {
            this.$message({
              message: '该菜单包含子菜单，不能直接删除！请先删除子菜单！',
              type: 'error'
            })
            return
          }
        }

        this.$confirm('您正在进行删除操作, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          del(this.dataDetail.dicCode).then(response => {
            console.log('response:', response)
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.dataDetail = { dicType: 'INNER' }
            this.fetchAll()
          })
        })
      },
      handleAddDic() {
        this.update = false
        this.dataDetail = { dicType: 'INNER', standLevel: 'SYS' }
      },

      handleNodeClick(node) {
        console.log({ id: node.id })
        getById({ id: node.id }).then(response => {
          this.dataDetail = response.data
          this.dicCode = this.dataDetail.dicCode
          this.dicType = this.dataDetail.dicType
          console.log('this.dicCode', this.dicCode)
          console.log('this.dicCode', this.dicType)
          this.update = true
        })
      }

    }
  }
</script>

<style>
  #app .el-card__body {
    padding: 15px;
  }

</style>
