<template>
  <el-row style="padding: 15px;" :gutter="15">
    <el-col :span="4">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>菜单管理</span>
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
            :allow-drop="allowDrop"
            :allow-drag="allowDrag"
            @node-click="handleNodeClick"
            @node-drag-start="handleDragStart"
            @node-drag-enter="handleDragEnter"
            @node-drag-leave="handleDragLeave"
            @node-drag-over="handleDragOver"
            @node-drag-end="handleDragEnd"
            @node-drop="handleDrop"
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
      <el-card class="box-card" style="position: relative">
        <div slot="header" class="clearfix">
          <span>菜单信息</span>
          <div style="text-align:right; position:absolute; top:8px; right:20px;">
            <el-button style="padding: 10px" type="success" plain @click="handleAddRootMenu">添加根菜单</el-button>
            <el-button style="padding: 10px" type="success" plain @click="handleAddSubMenu">添加子菜单</el-button>
          </div>
        </div>
        <el-alert
          title="填写说明"
          description="父菜单为空，表示创建一级菜单；菜单图标：可用Element-UI Icons 与 font-awesome 中的图标；组件名：为显示在地址栏的URL；组件路径：相对src/views/之后的路径"
          type="info"
          show-icon
          :closable="false"
          style="margin-bottom: 20px"
        />
        <el-form ref="detailForm" :model="menuDetail" :rules="rules" label-width="100px" style="width:500px">
          <el-form-item label="父菜单" prop="parent_id">
            <code-select :key="menuDetail.id" v-model="menuDetail.parentId" placeholder="请选择父菜单" :use-cache="false"
                         dic="SysMenu" type="tree"/>
          </el-form-item>
          <el-form-item label="菜单名称" prop="title">
            <el-input v-model="menuDetail.title"/>
          </el-form-item>
          <el-form-item label="菜单图标" prop="icon" style="position:relative">
            <el-input v-model="menuDetail.icon" placeholder="请输入图标的className"/>
            <i :class="menuDetail.icon" style="position:absolute;right:-30px;top:8px;"/>
          </el-form-item>
          <el-form-item label="路由地址" prop="path">
            <el-input v-model="menuDetail.path" placeholder="一级菜单以_blank结尾可在新窗口打开"/>
          </el-form-item>
          <el-form-item label="菜单地址">
            {{ menuPath }}
          </el-form-item>
          <el-form-item label="组件名称" prop="name">
            <el-input v-model="menuDetail.name" placeholder="组件名称：export default 中的name属性"/>
          </el-form-item>
          <el-form-item label="组件路径" prop="component">
            <el-input v-model="menuDetail.component" placeholder="组件的全路径，相对src/views/之后的路径"/>
          </el-form-item>
          <el-form-item label="高亮菜单" prop="activeMenuPath">
            <el-input v-model.trim="menuDetail.activeMenuPath" placeholder="如：详情页高亮列表菜单，填写路由全地址"/>
          </el-form-item>
          <el-form-item label="顺序" prop="sort">
            <el-input v-model="menuDetail.sort" placeholder="同级菜单排序"/>
          </el-form-item>
          <el-form-item label="禁用缓存" prop="noKeepAlive" style="width: 160px;float: left">
            <code-select :key="menuDetail.id+'noKeepAlive'" v-model="menuDetail.noKeepAlive" dic="YesOrNo"
                         type="switch"/>
          </el-form-item>
          <el-form-item label="是否固定" prop="affix" style="width: 160px;float: left">
            <code-select :key="menuDetail.id+'affix'" v-model="menuDetail.affix" dic="YesOrNo" type="switch"/>
          </el-form-item>
          <el-form-item label="是否隐藏" prop="isHidden" style="width: 160px;float: left">
            <code-select :key="menuDetail.id+'isHidden'" v-model="menuDetail.isHidden" dic="YesOrNo" type="switch"/>
          </el-form-item>
          <el-form-item style="clear: both">
            <el-button type="primary" @click="submitForm('detailForm')">提交</el-button>
            <el-button @click="resetForm('detailForm')">重置</el-button>
            <el-button type="danger" plain @click="handleDelMenu">删除</el-button>
          </el-form-item>
        </el-form>
      </el-card>

    </el-col>
  </el-row>

</template>

<script>
  import { queryMenuTree, getById, add, update, del, moveIndex } from '@/api/sys/manage/menu/menu'
  import CodeSelect from '@/components/Sys/CodeSelect'

  export default {
    name: 'SysMenu',
    components: {
      CodeSelect
    },
    data() {
      return {
        menuDetail: {},
        menuTree: [],
        filterText: '',
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        rules: {
          title: [
            { required: true, message: '请输入菜单名称', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          path: [
            { required: true, message: '请输入路由名称', trigger: 'blur' },
            { min: 1, max: 100, message: '长度在 2 到 100 个字符，中间不能有/出现', trigger: 'blur' }
          ],
          component: [
            { required: true, message: '请输入组件路径', trigger: 'blur' },
            { min: 1, max: 100, message: '长度在 2 到 100 个字符', trigger: 'blur' }
          ],
          sort: [
            { required: true, message: '请输序号', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      menuPath() {
        console.log('menuPath')
        if (this.menuDetail.id) {
          return this.createMenuPath(this.menuDetail.id)
        } else if (this.menuDetail.parentId) {
          return this.createMenuPath(this.menuDetail.parentId) + '/' + (this.menuDetail.path || '')
        } else {
          return null
        }
      },
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
      filterNode(value, data) {
        console.log(data, '---------->')
        if (!value) return true
        return data.label.indexOf(value) !== -1
      },
      createMenuPath(menuId) {
        const node = this.$refs.myTree.getNode(menuId)
        if (node.data.parentId) {
          return this.createMenuPath(node.data.parentId) + '/' + node.data.path
        } else {
          return '/' + node.data.path
        }
      },
      fetchAll() {
        queryMenuTree().then(response => {
          this.menuTree = response.data
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!')
            if (this.menuDetail.id) {
              delete this.menuDetail.children
              console.log('menuDetail:', this.menuDetail)
              update(this.menuDetail).then(response => {
                console.log('response:', response)
                this.$message({
                  message: '修改成功',
                  type: 'success'
                })
                this.fetchAll()
              })
            } else {
              add(this.menuDetail).then(response => {
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
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      handleDelMenu() {
        if (!this.menuDetail.id) {
          this.$message({
            message: '请先在左侧选择一个菜单',
            type: 'error'
          })
          return
        }

        const children = this.$refs.myTree.getNode(this.menuDetail.id).data.children
        if (children && children.length > 0) {
          this.$message({
            message: '该菜单包含子菜单，不能直接删除！请先删除子菜单！',
            type: 'error'
          })
          return
        }

        this.$confirm('您正在进行删除操作, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          del(this.menuDetail.id).then(response => {
            console.log('response:', response)
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.menuDetail = {}
            this.fetchAll()
          })
        })
      },
      handleAddRootMenu() {
        this.menuDetail = {}
      },
      handleAddSubMenu() {
        if (!this.menuDetail.id) {
          this.$message({
            message: '请先在左侧选择一个菜单',
            type: 'error'
          })
          return
        }
        const tmpPId = this.menuDetail.id
        const tmpPTitle = this.menuDetail.title + ' - ParentId:' + this.menuDetail.id
        this.menuDetail = {}
        this.menuDetail = { parentId: tmpPId, parentTitle: tmpPTitle }
      },
      handleNodeClick(node) {
        getById({ id: node.id }).then(response => {
          this.menuDetail = response.data
          if (this.menuDetail.parentId) {
            const parentNode = this.$refs.myTree.getNode(this.menuDetail.parentId)
            this.menuDetail.parentTitle = parentNode.data.label + ' - ParentId:' + parentNode.data.id
          }
        })
      },
      handleDragStart(node, ev) {
        console.log('drag start', node)
      },
      handleDragEnter(draggingNode, dropNode, ev) {
        console.log('tree drag enter: ', dropNode.label)
      },
      handleDragLeave(draggingNode, dropNode, ev) {
        console.log('tree drag leave: ', dropNode.label)
      },
      handleDragOver(draggingNode, dropNode, ev) {
        console.log('开始拖动节点： ', dropNode.label)
      },
      handleDragEnd(draggingNode, dropNode, dropType, ev) {
        console.log('结束拖动节点: ', dropNode && dropNode.label, dropType)
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {
        console.log('draggingNode', draggingNode)
        console.log('dropNode', dropNode)
        console.log('dropType', dropType)
        switch (dropType) {
          case 'inner':
            console.log('结束拖动节点并移动到某个节点的内部: ', dropNode.label, dropType)
            break
          case 'before':
            console.log('移动到某个节点的前面: ', dropNode.label, dropType)
            break
          case 'after':
            console.log('移动到某个节点的后面: ', dropNode.label, dropType)
            break
        }

        moveIndex({ id: draggingNode.data.id, relevantId: dropNode.data.id, type: dropType }).then(response => {
          console.log(response)
        })
      },
      allowDrop(draggingNode, dropNode, type) {
        if (dropNode.data.label === '二级 3-1') {
          return type !== 'inner'
        } else {
          return true
        }
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('三级 3-2-2') === -1
      }
    }
  }
</script>

<style>

</style>
