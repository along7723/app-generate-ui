<template>
  <div class="page-notification">
    <page-header :show-back="false" :show-close="true" @close="onClose" title="通知详情"></page-header>
    <el-form v-model="formData">
      <div class="notification">
        <div class="title">
          <div>{{formData.title}}</div>
          <div class="author"><span>发布人：<code-select :key="formData.createTime" v-if="createUser" dic="SysUser"
                                                     v-model="createUser" translate-mode></code-select></span><span
            style="margin-left:20px">发布时间：{{formData.createTime}}</span></div>
        </div>
        <div class="content">
          <rich-text v-model="formData.content" readonly></rich-text>
        </div>
        <el-divider/>
        <div style="margin: 20px 0px;">附件下载:
          <single-file style="margin-top:10px" v-model="formData.attachment" readonly></single-file>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>

  import PageHeader from '@/components/Sys/PageHeader'
  import RichText from '@/components/Sys/RichText'

  export default {
    name: 'NotificationPage',
    components: {
      PageHeader, RichText
    },
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
      },
      detailData: {
        type: Object,
        default: () => {
        },
        required: false
      }
    },
    data() {
      return {
        formData: this.detailData || {},
        createUser: null
      }
    },
    created() {
      console.log(this.formData)
    },
    methods: {
      onClose() {
        console.log('onClose')
        this.$emit('onClose')
      }
    },
    watch: {
      detailData(val) {
        this.formData = val || {}
        console.log(this.formData)
        this.createUser = this.formData.createUser
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-notification > > > header.el-drawer__header {
    display: none !important;
    margin-bottom: 0px;
  }

  .notification {
    margin: 20px;
    margin-top: 40px;

    .title {
      line-height: 80px;
      text-align: center;
      font-size: 32px;
      border-bottom: 2px solid #efefef;

      .author {
        line-height: 32px;
        font-size: 14px;
        color: #999;
        margin-bottom: 10px;
        text-align: center;
      }
    }

    .content {
      padding-top: 15px;
      font-size: 18px;
      line-height: 2;
    }
  }
</style>
