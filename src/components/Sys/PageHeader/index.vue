<template>
  <div class="page-header">
    <span class="btns">
      <i v-if="showBack" class="back el-icon-back" @click="$router.back()" title="后退"/>
      <i v-if="showClose" class="close el-icon-close" @click="closeHandler" title="关闭"/>
      <i v-if="showRefresh" class="refresh el-icon-refresh" @click="refreshHandler" title="刷新"/>
    </span>
    <el-divider direction="vertical"></el-divider>
    <span class="title">{{title}}</span>
  </div>
</template>

<script>

  import { refresh } from '@/utils/comm-utils'

  export default {
    name: 'PageHeader',
    props: {
      title: {
        type: String,
        default: '页面标题',
        required: false
      },
      showBack: {
        type: Boolean,
        default: true,
        required: false
      },
      showClose: {
        type: Boolean,
        default: false,
        required: false
      },
      showRefresh: {
        type: Boolean,
        default: true,
        required: false
      }
    },
    methods: {
      closeHandler() {
        this.$emit('close')
      },
      refreshHandler() {
        refresh(this.$router)
      }
    }
  }
</script>

<style scoped>
  .page-header {
    border-bottom: 1px solid #efefef;
    padding-bottom: 15px;
    padding-top: 20px;
  }

  .page-header .btns {
    margin-left: 20px;
  }

  .page-header .btns i {
    margin-right: 15px;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    color: black;
  }

  .page-header .btns i.back:hover {
    background-color: gray;
    color: white;
  }

  .page-header .btns i.close:hover {
    background-color: red;
    color: white;
  }

  .page-header .btns i.refresh:hover {
    background-color: green;
    color: white;
  }

  .page-header .title {
    margin-left: 15px;
    font-size: 16px;
  }
</style>
