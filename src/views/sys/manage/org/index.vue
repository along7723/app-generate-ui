<template>
  <el-row style="padding: 15px;" :gutter="15">
    <el-col :span="4">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>部门目录</span>
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
            :data="menuTree"
            node-key="id"
            default-expand-all
            draggable
            :filter-node-method="filterNode"
            @node-click="handleNodeClick"
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
      <el-card class="box-card" style="position: relative;">
        <div slot="header" class="clearfix">
          <span>部门信息</span>
        </div>
        <org :parentId="menuId" :single-data-mode="singleDataMode"></org>
      </el-card>

    </el-col>
  </el-row>

</template>

<script>
  import { queryTreeMenu } from './api'
  import CodeSelect from '@/components/Sys/CodeSelect'
  import org from './indexC'

  export default {
    name: 'SysMenu',
    components: {
      CodeSelect, org
    },
    data() {
      return {
        menuDetail: {},
        menuId: '0',
        singleDataMode: false,
        filterText: '',
        menuTree: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    computed: {
      scrollerHeight: function() {
        return (window.innerHeight - 210) + 'px'
      }
    },
    created() {
      // 初始化数据
      this.fetchAll()
    },
    watch: {
      filterText(val) {
        this.$refs.myTree.filter(val)
      }
    },
    methods: {
      //树形菜单条件过滤
      filterNode(value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      },
      fetchAll() {
        queryTreeMenu().then(response => {
          console.log('org response.data', response.data)
          this.menuTree = response.data
        })
      },
      handleNodeClick(node) {
        console.log('org node:', node)
        this.menuId = node.id
        this.singleDataMode = !node.hasChildren
      }
    }
  }
</script>

<style>
  .box-card .el-card__body {
    padding: 0px !important;
  }
</style>
