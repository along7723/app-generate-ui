<template>
<span>

    <div
      v-if="!readonly"
      class="upload-container">
        <el-upload
          :data="dataObj"
          :multiple="false"
          :http-request="upload"
          :show-file-list="false"
          :on-success="handleImageSuccess"
          class="image-uploader"
          :action="uploadAction"
          :accept="accept"
          :auto-upload="true"
          :before-upload="beforeUpload"
          :disabled="uploading">
            <el-button
              :icon="uploading?'fa fa-spinner fa-pulse':'el-icon-upload'"
              type="primary">
                {{uploading?'正在上传':'点击上传'}}
            </el-button>
        </el-upload>
        <span class="image-preview">
            <span v-if="!uploading">
                <span v-show="this.value" class="image-preview-wrapper">
                    <el-link
                      type="primary"
                      :underline="false"
                      :href="imageUrl"
                      target="_blank">{{fileName}}</el-link>
                    <span v-if="isIamge || isPdf" @click="preview" title="预览" class="preview-icon"><i
                      class="fa fa-eye"></i></span>
                    <i v-if="!readonly" class="el-icon-delete" style="cursor: pointer;color: red;margin-left:5px;"
                       @click="rmImage"/>
                </span>
                <span v-show="!this.value" class="image-preview-wrapper">
                    <span style="color: #999;line-height: 1.5">未上传文件</span>
                </span>
                <span style="margin-left:8px;color:#CCC">（{{typeLimit}}，{{sizeLimit}}）</span>
            </span>
            <div v-else>
                <div>正在上传：{{uploadingFile}}</div>
            </div>

        </span>
    </div>
    <span v-else>
        <span class="image-preview">
            <el-link
              type="primary"
              :underline="false"
              :href="imageUrl"
              target="_blank">{{fileName}}</el-link>
            <span v-if="isIamge || isPdf" @click="preview" title="预览" class="preview-icon"><i
              class="fa fa-eye"></i></span>
        </span>

    </span>

    <el-dialog
      title="文件预览"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      :fullscreen="true"
      center>
        <img v-if="isIamge" :src="imageUrl" style="margin:auto"/>
        <div
          v-else-if="isPdf"
          style="width:80%;margin:auto">
            <pdf :src="imageUrl"></pdf>
        </div>

    </el-dialog>
</span>
</template>

<script>
  import axios from 'axios'
  import store from '@/store'
  import qs from 'qs'
  import {
    getToken
  } from '@/utils/auth'
  import pdf from 'vue-pdf'
  import fileTypeUtil from '@/utils/fileTypeUtil'

  // http request拦截器 添加一个请求拦截器
  axios.interceptors.request.use(function(config) {
    // Do something before request is sent
    if (store.getters.token) {
      config.headers['token'] = getToken()
    }
    config.paramsSerializer = function(params) {
      return qs.stringify(params, {
        arrayFormat: 'repeat'
      })
    }
    return config
  }, function(error) {
    // Do something with request error
    return Promise.reject(error)
  })

  export default {
    name: 'SingleImageUpload',
    components: {
      pdf
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      },
      accept: {
        type: String,
        default: '',
        require: false
      },
      fileMaxSize: {
        type: Number,
        default: 0,
        require: false
      }
    },
    data() {
      return {
        uploadAction: process.env.VUE_APP_BASE_API + 'sys/manage/file/upload',
        downloadAction: process.env.VUE_APP_BASE_API + 'sys/manage/file/download',
        tempUrl: '',
        dataObj: {
          token: '',
          key: ''
        },
        percentage: 0,
        uploadingFile: null,
        uploading: false,
        dialogVisible: false
      }
    },
    computed: {
      imageUrl() {
        return this.downloadAction + '?path=' + this.value
      },
      fileName() {
        const fileName = this.value.substr(this.value.lastIndexOf('/') + 1)
        return fileName
      },
      isIamge() {
        return fileTypeUtil.matchFileSuffixType(this.value) === 'image'
      },
      isPdf() {
        return fileTypeUtil.matchFileSuffixType(this.value) === 'pdf'
      },
      sizeLimit() {
        if (this.fileMaxSize <= 0) {
          return '文件大小不限'
        } else {
          return '文件大小不超过' + this.fileMaxSize + 'MB'
        }
      },
      typeLimit() {
        if (this.accept <= 0) {
          return '文件类型不限'
        } else {
          return '支持文件格式：' + this.accept
        }
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
      preview() {
        console.log('preview')
        this.dialogVisible = true
      },
      handleImageSuccess(res, file) {
        if (!res) {
          return
        }
        console.log('上传结果：', res)
        if (res.code === 200) {
          this.emitInput(res.data)
        } else {
          this.$message.error('文件上传失败:' + res.message)
        }
      },
      beforeUpload(file) {
        console.log('beforeUpload', file)
        if (this.accept) {
          var ext = file.name.substring(file.name.lastIndexOf('.'))
          const exts = this.accept.split(',')

          if (exts.indexOf(ext) == -1) {
            this.$message({
              message: '上传文件只能是' + this.accept + '格式!',
              type: 'error'
            })
            return false
          }
        }

        if (this.fileMaxSize > 0 && file.size > this.fileMaxSize * 1024 * 1024) {
          this.$message({
            message: this.sizeLimit,
            type: 'error'
          })
          return false
        }

        return true
      },
      upload(fileObj) {
        console.log('upload')
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

  ::v-deep .el-dialog {
    background-color: rgba(0, 0, 0, 0.8);

    .el-dialog__title {
      color: white;
    }

    .el-dialog__close {
      color: white;
    }

    .el-dialog__body {
      text-align: center;
    }
  }

  .preview-icon {
    color: blue;
    cursor: pointer;
    margin-left: 5px;
  }

  .upload-container {
    width: 100%;
    position: relative;
    @include clearfix;

    .image-uploader {
      display: inline-block;
      float: left;
      margin-right: 10px;
    }

    .image-preview {
      height: 36px;
      padding: 0 10px;
      position: relative;
      float: left;

      .image-preview-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        margin-left: -10px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      &:hover {
        .image-preview-action {
          opacity: 1;
        }
      }
    }

  }
</style>
