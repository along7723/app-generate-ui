<template>
  <el-row style="padding: 15px;" :gutter="15">
    <el-col :span="4">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>资源目录</span>
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
            @node-click="handleNodeClick"
            :filter-node-method="filterNode"
          >
            <span slot-scope="{ node, data }" class="custom-tree-node">
              <template>
                <span> {{ node.label||'未命名' }} </span>
              </template>
            </span>
          </el-tree>
        </div>
      </el-card>
    </el-col>
    <el-col :span="20">
      <el-card class="box-card" style="position: relative">
        <div slot="header" class="clearfix">
          <span>资源信息</span>
        </div>
        <resourceList :parentId="resourceId"></resourceList>
      </el-card>
    </el-col>
  </el-row>

</template>

<script>
  import { queryTree } from './api'
  import CodeSelect from '@/components/Sys/CodeSelect'
  import resourceList from './indexC'

  export default {
    name: 'SysMenu',
    components: {
      CodeSelect, resourceList
    },
    data() {
      return {
        menuDetail: {},
        resourceId: '0',
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
        queryTree().then(response => {
          this.menuTree = response.data
        })
      },
      handleNodeClick(data) {
        this.resourceId = data.id
      }
    }
  }
</script>

<style scoped>
  .el-icon-delete-solid:hover {
    color: red;
  }

  .el-icon-s-order:hover {
    color: #1890ff;
  }
</style>
