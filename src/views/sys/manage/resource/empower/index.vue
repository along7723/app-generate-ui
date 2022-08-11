<template>
  <el-row>
    <el-col>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>资源目录</span>
        </div>
        <div id="tree" :style="{'height':scrollerHeight,'overflow-y': 'scroll'}">
          <div style="padding: 10px">
            <el-input placeholder="输入关键字进行过滤" v-model="filterText">
            </el-input>
          </div>
          <el-tree ref="myTree" :data="menuTree" node-key="id" show-checkbox default-expand-all draggable accordion
                   @check="handleCheckClick" :filter-node-method="filterNode">
            <span slot-scope="{ node, data }" class="custom-tree-node">
              <template>
                <span> {{ node.label||'未命名' }} </span>
              </template>
            </span>
          </el-tree>
        </div>
      </el-card>
    </el-col>
  </el-row>

</template>

<script>
  import {
    queryTree
  } from './api'

  export default {
    name: 'SysMenu',
    data() {
      return {
        filterText: '',
        menuTree: []
      }
    },
    props: {
      checkMenu: {
        type: Array,
        default: () => [],
        required: false
      }
    },
    watch: {
      checkMenu(val) {
        this.$refs.myTree.setCheckedKeys([])
        val.forEach(item => this.$refs.myTree.setChecked(item, true))
      },
      filterText(val) {
        this.$refs.myTree.filter(val)
      }
    },
    computed: {
      scrollerHeight: function() {
        return (window.innerHeight - 210) + 'px'
      }
    },
    created() {
      this.fetchAll() // 初始化数据
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

      /**
       * 递归选中/取消的资源
       * @param {Object} arr 子集合
       * @param {Object} idArr id 集合
       */
      recursionResource(arr, idArr) {
        arr.forEach(item => {
          idArr.push(item.id)
          if (item.hasChildren) {
            this.recursionResource(item.children, idArr)
          }
        })
      },
      /**
       * 当复选框被点击的时候触发
       * @param {Object} data 传递给 data 属性的数组中该节点所对应的对象
       * @param {Object} checkNode 树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性
       */
      handleCheckClick(data, checkNode) {
        let idArr = []
        idArr.push(data.id)
        // 从第二级开始递归调用
        if (data.hasChildren) {
          this.recursionResource(data.children, idArr)
        }
        // 计算当前触发节点和树选中节点的交集，有交集（addArr长度大于零）说明是选中，调用新增菜单方法
        let addArr = idArr.filter(function(val) {
          return checkNode.checkedKeys.indexOf(val) > -1
        })
        if (addArr.length === 0) {
          this.$emit('resourceRowUnchecked', idArr)
        } else {
          this.$emit('resourceRowChecked', idArr)
        }
      }
    }
  }
</script>
