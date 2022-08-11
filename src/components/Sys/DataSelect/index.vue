<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogFormVisible"
    :append-to-body="true"
    @close="handleCancle">
    <slot>选择列表未指定</slot>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleCancle">取 消</el-button>
      <el-button type="primary" @click="handleOk">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: 'DataSelect',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '选择数据'
      }
    },
    watch: {
      visible(val) {
        this.dialogFormVisible = val
      }
    },
    data() {
      return {
        dialogFormVisible: this.visible
      }
    },
    methods: {
      handleCancle() {
        this.dialogFormVisible = false
        this.$emit('update:visible', this.dialogFormVisible)
        this.$emit('cancle')
      },
      handleOk() {
        this.dialogFormVisible = false
        this.$emit('update:visible', this.dialogFormVisible)
        this.$emit('ok')
      }
    }
  }
</script>

<style scoped lang="scss">
  ::v-deep .el-dialog__body {
    padding: 0px;
  }
</style>
