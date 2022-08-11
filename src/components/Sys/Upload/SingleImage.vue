<template>
  <div class="upload-container">
    <el-upload
      v-if="!readonly"
      :data="dataObj"
      :multiple="false"
      :show-file-list="false"
      :http-request="upload"
      :on-success="handleImageSuccess"
      class="image-uploader"
      drag
      :action="uploadAction"
    >
      <div>
        <i class="el-icon-upload"/>
        <div class="el-upload__text">
          将文件拖到此处，或<em>点击上传</em>
        </div>
      </div>
    </el-upload>
    <div class="image-preview">
      <div v-show="this.value" class="image-preview-wrapper">
        <el-image
          style="width: 100px; height: 100px"
          :src="imageUrl"
          :preview-src-list="[imageUrl]">
        </el-image>
        <i v-if="!readonly" class="el-icon-delete" @click="rmImage"/>
      </div>
      <div v-show="!this.value" class="image-preview-wrapper">
        <div class="image-preview-empty">
          暂无图片
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '@/store'
  import qs from 'qs'
  import { getToken } from '@/utils/auth'
  // http request拦截器 添加一个请求拦截器
  axios.interceptors.request.use(function(config) {
    // Do something before request is sent
    if (store.getters.token) {
      config.headers['token'] = getToken()
    }
    config.paramsSerializer = function(params) {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }
    return config
  }, function(error) {
    // Do something with request error
    return Promise.reject(error)
  })

  export default {
    name: 'SingleImageUpload',
    props: {
      value: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        uploadAction: process.env.VUE_APP_BASE_API + 'sys/manage/file/upload',
        downloadAction: process.env.VUE_APP_BASE_API + 'sys/manage/file/download',
        tempUrl: '',
        dataObj: { token: '', key: '' }
      }
    },
    computed: {
      imageUrl() {
        return this.downloadAction + '?path=' + this.value
      }
    },
    methods: {
      rmImage() {
        this.emitInput('')
      },
      emitInput(val) {
        console.log('emit input:', val)
        this.$emit('input', val)
      },
      handleImageSuccess(res, file) {
        console.log('上传结果：', res)
        if (res && res.code === 200) {
          this.emitInput(res.data)
        } else {
          if (res) {
            this.$message.error('图片上传失败:' + res.message)
          }
        }
      },
      upload(fileObj) {
        const self = this
        self.uploading = true
        // console.log('upload file:', fileObj)
        const formData = new FormData()
        formData.append('file', fileObj.file)
        formData.append('type', fileObj.file.type)

        self.percentage = 0
        self.uploadingFile = fileObj.file.name
        return axios.request({
          url: process.env.VUE_APP_BASE_API + 'sys/manage/file/upload',
          method: 'post',
          data: formData,
          timeout: 1000 * 60 * 60 // 这个就是重点
        }).then(function(res) {
          // console.log('res:', res)
          self.handleImageSuccess(res.data)
          self.uploading = false
        }).catch(response => {
          self.uploading = false
          console.log('上传失败', response)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";

  .upload-container {
    width: 100%;
    height: 100px;
    position: relative;
    @include clearfix;

    .image-uploader {
      width: 60%;
      height: 100px;
      float: left;
      margin-right: 50px;

      .el-icon-upload {
        font-size: 30px;
        line-height: 30px;
        margin: 15px 0px 0px 0px;
      }
    }

    .image-preview {
      width: 100px;
      height: 100px;
      position: relative;
      border: 1px dashed #d9d9d9;
      float: left;

      .image-preview-wrapper {
        position: relative;
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .image-preview-empty {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        cursor: default;
        text-align: center;
        color: #CCC;
        font-size: 16px;
        line-height: 100px;
      }

      .el-icon-delete {
        position: absolute;
        cursor: pointer;
        color: red;
        right: 0;
        top: 0;
        font-size: 16px;
        background-color: white;
        padding: 3px;
      }

      &:hover {
        .image-preview-action {
          opacity: 1;
        }
      }
    }
  }

  ::v-deep .el-upload-dragger {
    width: 100%;
    height: 102px !important;
  }
</style>
