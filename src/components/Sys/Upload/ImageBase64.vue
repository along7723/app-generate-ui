<template>
  <div class="image-preview">
    <div
      v-show="this.value"
      class="image-preview-wrapper">
      <img ref="image" style="{height:height?height+'px':'auto',width:width?width+'px':'auto'} " v-if="value"/>
    </div>
    <div
      v-show="!this.value"
      class="image-preview-wrapper">
      <div class="image-preview-empty">
        暂无图片
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImageBase64',
    props: {
      value: {
        type: String,
        default: ''
      },
      width: {
        type: Number
      },
      height: {
        type: Number
      }
    },
    data() {
      return {
        downloadAction: process.env.VUE_APP_BASE_API + 'sys/manage/file/download',
        // downloadAction2: 'http://localhost:81/' + 'sys/manage/image/show',
        tempUrl: '',
        dataObj: {
          token: '',
          key: ''
        }
      }
    },
    computed: {
      imageUrl() {
        return this.downloadAction + '?path=' + this.value
      }
      //http://localhost:81/sys/manage/image/show?path=2021/04/03/2.jpg
    },
    created() {
      if (this.value) {
        this.imageUrlToBase64(this.imageUrl)
      }
    },
    watch: {
      value(val) {
        if (this.value) {
          this.imageUrlToBase64(this.imageUrl)
        }
      }
    },
    methods: {
      getImage(image) {
        let canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        let context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, image.width, image.height)
        let quality = 0.8
        // 这里的dataurl就是base64类型
        let dataURL = canvas.toDataURL('image/jpeg', quality)
        // console.log('dataURL: ', dataURL);
        this.$refs.image.src = dataURL
      },
      // 将图片转换为Base64
      imageUrlToBase64(path) {
        console.log('path: ', path)

        const that = this
        return new Promise(function(resolve, reject) { //使用Promise进行异步处理
          let image = new Image()
          //解决图片跨域问题
          // 解决跨域问题
          image.setAttribute('crossOrigin', 'anonymous')
          //获取传入的图片路径
          image.src = path
          //图片加载完后的回调函数,调用转码函数
          image.onload = function() {
            resolve(that.getImage(image)) //回调函数返回base64值
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image-preview {
    width: 100%;
    height: 100%;
    position: relative;
    // border: 1px dashed #d9d9d9;
    // float: left;

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
      width: 100%;
      height: 100%;
      cursor: default;
      text-align: center;
      color: #CCC;
      font-size: 16px;
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
</style>
