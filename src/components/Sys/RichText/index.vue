<template>
  <froala v-if="!readonly" id="editS" ref="editS" :config="config" v-model="content" @input="handleChange"></froala>
  <froala-view v-else v-model="content"></froala-view>
</template>

<script>
  import 'froala-editor/js/languages/zh_cn.js'
  import { getToken } from '@/utils/auth'

  const tool = [
    'undo',
    'redo',
    'clearFormatting',
    'bold',
    'italic',
    'underline',
    'strikeThrough',
    'fontFamily',
    'fontSize',
    'textColor',
    'color',
    'backgroundColor',
    'inlineStyle',
    'paragraphFormat',
    'align',
    'formatOL',
    'formatUL',
    'outdent',
    'indent',
    'quote',
    'insertLink',
    'insertImage',
    'insertVideo',
    'embedly',
    'insertFile',
    'insertTable',
    'emoticons',
    'specialCharacters',
    'insertHR',
    'selectAll',
    'print',
    'spellChecker',
    'html',
    'help',
    'fullscreen'
  ]

  const uploadParams = {
    displayApi: process.env.VUE_APP_BASE_API + 'sys/manage/file/download'
  }
  const uploadVideoParams = {
    displayApi: process.env.VUE_APP_BASE_API + 'sys/manage/file/video'
  }

  export default {
    name: 'RichEditor',
    props: {
      value: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      },
      simpleMode: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value(val) {
        this.content = val
      }
    },
    data() {
      return {
        editor: null,
        config: {
          // 参数说明文档 https://froala.com/wysiwyg-editor/docs/options/
          placeholderText: '在此编辑内容',
          language: 'zh_cn',
          zIndex: 2501,
          height: '300',
          charCounterCount: false,
          charCounterMax: -1,//不限制字数
          toolbarButtons: tool,
          imageUploadParams: uploadParams,
          fileUploadParams: uploadParams,
          videoUploadParams: uploadVideoParams,
          fileUploadURL: process.env.VUE_APP_BASE_API + 'sys/manage/editorFile/upload',
          fileUploadParams: { token: getToken() },
          fileMaxSize: 1024 * 1024 * 200,//200mb
          imageUploadURL: process.env.VUE_APP_BASE_API + 'sys/manage/editorFile/upload',
          imageUploadParams: { token: getToken() },
          imageMaxSize: 1024 * 1024 * 200,//200mb
          videoUploadURL: process.env.VUE_APP_BASE_API + 'sys/manage/editorFile/upload',
          videoUploadParams: { token: getToken() },
          videoMaxSize: 1024 * 1024 * 500,//500mb
          events: {
            initialized: (e, editor) => {
              console.log(this.$refs.editS)
              this.editor = this.$refs.editS.getEditor()
            }

          }
        },
        content: this.value
      }
    },
    methods: {
      handleChange() {
        console.log('==========handleChange')
        this.$emit('input', this.content)
      }
    }
  }
</script>

<style scoped lang="scss">
  /*处理权限提示*/
  ::v-deep .fr-wrapper div[style*='z-index:9999'] {
    position: absolute;
    top: -10000px;
    // opacity: 0;
    // background-color: black;
    // height: 0px;
  }

  ::v-deep .fr-wrapper .fr-view {
    margin-top: -50px;
  }

  ::v-deep .fr-second-toolbar {
    display: none;
  }

  ::v-deep .fr-element.fr-view {
    padding: 0px 10px 5px 10px;
  }

  ::v-deep .fr-element.fr-view p {
    line-height: 1.2;
  }

  ::v-deep .fr-wrapper {
    border-radius: 0px 0px 10px 10px;
  }

  ::v-deep .fr-btn-grp button {
    padding: 0;
    margin: 0 !important;
  }

  ::v-deep .fr-btn-grp button .fr-svg {
    margin: 2px 6px !important;
    font-size: 12px !important;
  }

  ::v-deep p[data-f-id="pbf"] {
    display: none
  }

</style>
