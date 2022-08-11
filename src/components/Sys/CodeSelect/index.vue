<template>
  <span><!--一定要用span-->
    <template v-if="!translateMode">
      <template v-if="type === 'switch'">
        <el-switch
          v-model="codeValue"
          active-color="#13ce66"
          active-value="1"
          inactive-value="0"
          :disabled="disabled"
          @change="handChange(codeValue)">
        </el-switch>
      </template>
      <template v-else-if="type === 'radio'">
        <el-radio-group v-model="codeValue" :disabled="disabled" @change="handChange(codeValue)">
          <el-radio v-for="item in options" :key="item.id" :label="item.id">{{ item.label }}</el-radio>
        </el-radio-group>
      </template>
      <template v-else-if="type === 'radio-button'">
        <el-radio-group v-model="codeValue" :disabled="disabled" @change="handChange(codeValue)">
          <el-radio-button v-for="item in options" :key="item.id" :label="item.id">{{ item.label }}</el-radio-button>
        </el-radio-group>
      </template>
      <template v-else-if="type === 'checkbox'">
        <el-checkbox-group v-model="codeValues" :disabled="disabled" @change="handChange(codeValues.join())">
          <el-checkbox v-for="item in options" :key="item.id" :label="item.id">{{ item.label }}</el-checkbox>
        </el-checkbox-group>
      </template>
      <template v-else-if="type === 'checkbox-button'">
        <el-checkbox-group v-model="codeValues" :disabled="disabled" @change="handChange(codeValues.join())">
          <el-checkbox-button
            v-for="item in options"
            :key="item.id"
            :label="item.id">{{ item.label }}</el-checkbox-button>
        </el-checkbox-group>
      </template>
      <!--tree-->
      <template v-else-if="type === 'tree-multi'">
        <treeselect
          v-model="codeValues"
          :multiple="true"
          :options="options"
          :placeholder="placeholder"
          :disabled="disabled"
          @input="handChange(codeValues.join())"/>
      </template>
      <template v-else-if="type === 'tree'">
        <treeselect
          v-model="codeValue"
          :options="options"
          :placeholder="placeholder"
          :disabled="disabled"
          @input="handChange(codeValue)"/>
      </template>
      <!--cascader-->
      <template v-else-if="type === 'cascader-multi'">
        <el-cascader
          clearable
          filterable
          :show-all-levels="true"
          v-model="codeValues"
          :options="options"
          :disabled="disabled"
          :props="{ expandTrigger: 'hover', multiple: true, checkStrictly: true, emitPath: false, value: 'id' }"
          :placeholder="placeholder"
          @change="handChange(codeValues.join())"></el-cascader>
      </template>
      <template v-else-if="type === 'cascader'">
        <el-cascader
          clearable
          filterable
          :show-all-levels="true"
          v-model="codeValue"
          :options="options"
          :disabled="disabled"
          :props="{ expandTrigger: 'hover', multiple: false, checkStrictly: false, emitPath: false, value: 'id' }"
          :placeholder="placeholder"
          @change="handChange(codeValue)"></el-cascader>
      </template>
      <!--select-->
      <template v-else-if="type === 'select-multi'">
        <el-select
          v-model="codeValues"
          clearable
          filterable
          placeholder="请选择"
          multiple
          :loading="loading"
          :disabled="disabled"
          @change="handChange(codeValues.join())">
          <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item.id"/>
        </el-select>
      </template>
      <template v-else>
        <el-select
          v-model="codeValue"
          clearable
          filterable
          placeholder="请选择"
          :loading="loading"
          :disabled="disabled"
          @change="handChange(codeValue)">
          <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item.id"/>
        </el-select>
      </template>
    </template>
    <template v-else>
      <!--标签形式-->
      <el-tag v-if="codeValue && codeColor" size="mini" :key="dic+'-'+codeValue" :type="codeColor" effect="dark">
        {{ codeName }}
      </el-tag>
      <!--级联形式-->
      <template v-else-if="type === 'cascader-multi' || type === 'cascader'">
        {{ codeName }}
      </template>
      <!--文本形式-->
      <template v-else>
        {{ codeName }}
        </template>
    </template>
  </span>
</template>

<script>
import {
  getDicItemsTree
} from './api'
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

import store from '@/store'

export default {
  name: 'CodeSelect',
  components: {
    Treeselect
  },
  props: {
    dic: { // 代码表名称
      type: String,
      default: '',
      required: true
    },
    value: null,
    translateMode: { // 翻译模式，默认非翻译模式
      type: Boolean,
      default: false,
      required: false
    },
    // 代码表样式：select,switch,radio,checkbox,tree,radio-button,check-button
    type: {
      type: String,
      default: 'select',
      required: false
    },
    placeholder: {
      type: String,
      default: '请选择',
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      loading: false,
      options: [],
      codeValue: this.value ? this.value + '' : (this.type === 'switch' ? '0' : null),
      codeValues: this.value ? (this.value + '').split(',') : [],
      codeName: '',
      codeColor: null,
      test: null,
      value2: '0'
    }
  },
  created() {

    // console.log('codeValue', this.codeValue)
    // console.log('type', this.type)
    this.fetchData()

    // console.log('options', this.options)
  },
  mounted() {

  },
  beforeDestroy() {
  },
  methods: {
    fetchData() {
      this.loading = true

      let needLoadData = false
      // 如果没过期
      if (!this.hasExpired(this.dic)) {
        // console.log('代码未过期', this.dic)
        // 如果字典表已经缓存
        if (this.dicIsCached(this.dic)) {
          // console.log('代码已缓存', this.dic)
          const dicObj = this.getCacheDic(this.dic)
          // console.log(this.dic, 'useCache dicObj', dicObj)
          this.options = dicObj.options
          needLoadData = false
          if (!this.options) {
            needLoadData = true
          }
        } else {
          // console.log('代码未缓存',this.dic)
          needLoadData = true
        }
      } else { // 不使用缓存
        // console.log('代码已过期', this.dic)
        // 已经过期
        needLoadData = true
      }

      // console.log(this.dic, '是否需要加载代码表？',needLoadData)
      if (needLoadData) {

        if (this.dicIsLoading(this.dic)) {
          // console.log('代码加载中...过会重试', this.dic)
          // 过会再试
          setTimeout(() => {
            this.fetchData()
          }, 500)
          return
        } else {
          this.setDicState(this.dic, 'loading')
          // console.log(this.dic, '开始加载代码表...')
          getDicItemsTree({
            'dicCode': this.dic,
            time: new Date()
          }).then(response => {
            // this.options = response.data

            // if (this.dic === 'RegionCity') {
            //   // console.log('response', response)
            // }

            const dicObj = response.data
            this.options = this.clearEmptyChilden(dicObj.options)

            // console.log('this.type',this.type,this.dic)
            // if(this.type==='cascader' || this.type==='cascader-multi'){
            this.assembleTree(this.options)
            // console.log(this.dic,' assembleTree this.options',this.options)
            // }

            // console.log(this.dic, '加载代码表完成，isCache', dicObj.isCache, 'dicObj', dicObj)
            // console.log(this.dic, '缓存代码表...')
            //  缓存数据

            Promise.all([this.cacheDic(this.dic, dicObj)]).then(() => {
              // 设置缓存时间
              if (dicObj.isCache === '1') {
                this.setDicExpire(this.dic, -1)
              } else {
                // 5秒后过期
                this.setDicExpire(this.dic, new Date().getTime() + (10 * 1000))
              }
              this.setDicState(this.dic, 'cached')

              if (this.translateMode) {
                // 翻译代码
                this.translateCode()
              }
              this.loading = false

              this.rebuildCascaderCode()
            })

            // this.cacheDic(this.dic, dicObj)
            // // 设置缓存时间
            // if (dicObj.isCache === '1') {
            //   this.setDicExpire(this.dic, -1)
            // } else {
            //   // 5秒后过期
            //   this.setDicExpire(this.dic, new Date().getTime() + (30 * 1000))
            // }
            // this.setDicState(this.dic, 'cached')

            // if (this.translateMode) {
            //   // 翻译代码
            //   this.translateCode()
            // }
            // this.loading = false
          })
        }
      }

      // 如果是翻译模式
      // console.log("-----translateMode-------",this.translateMode)
      if (this.translateMode) {
        // 翻译代码
        this.translateCode()
      }
      this.loading = false

      this.rebuildCascaderCode()

    },
    rebuildCascaderCode() {
      if (this.type === 'cascader' || this.type === 'cascader-multi') {
        if (typeof this.codeValue === 'string') {
          const ids = []
          this.getTreeIdPath(this.codeValue, this.options, ids)
          this.codeValue = ids
        }
      }
    },
    cacheDic(dicName, dicItems) {
      // console.log('cacheDic, dicName:',dicName,'dicItems:',dicItems)
      // return new Promise((resolve, reject) => {
      const obj = {}
      obj[dicName] = dicItems
      store.dispatch('dict/setDict', obj)
      // resolve("cg")
      // })
    },
    getCacheDic(dicName) {
      return store.getters.dicts[dicName]
    },
    /**
     * 字典的状态  加载中 已缓存
     * @param {String} dicName
     * @param {String} state
     */
    setDicState(dicName, state) {
      // localStorage.setItem('_dic_state_' + dicName, state)
      const obj = {}
      obj[dicName] = state
      store.dispatch('dict/setDictState', obj)
    },
    /**
     * 字典的过期时间
     * @param {String} dicName
     * @param {Date} state
     */
    setDicExpire(dicName, time) {
      // console.log('_dic_expire_' + dicName, time)
      const obj = {}
      obj[dicName] = time
      store.dispatch('dict/setDictExpire', obj)
      // localStorage.setItem('_dic_expire_' + dicName, time)
    },
    hasExpired(dicName) {
      // const expire = localStorage.getItem('_dic_expire_' + dicName)

      const expire = store.getters.dictsExpire[dicName]
      // console.log('expire', expire, 'dic', this.dic)
      if (!expire) {
        return true
      }
      const expire_time = expire * 1
      if (expire_time === -1) {
        return false
      }
      const now = new Date().getTime()
      // console.log('expire 时间差', (now - expire) / 1000 + 's', 'dic', this.dic)
      if (now > expire_time) {
        return true
      }
      return false
    },
    dicIsLoading(dicName) {
      // const state = localStorage.getItem('_dic_state_' + dicName)
      const state = store.getters.dictsState[dicName]
      if (!state) {
        return false
      }
      if (state === 'loading') {
        return true
      } else {
        return false
      }
    },
    dicIsCached(dicName) {
      // const state = localStorage.getItem('_dic_state_' + dicName)
      const state = store.getters.dictsState[dicName]
      if (state === 'cached') {
        return true
      } else {
        return false
      }
    },
    translateCode() {
      this.codeName = this.codeValue
      // console.log('-----translateCode------')

      // console.log(this.codeValue)

      if (!this.codeValue) {
        return
      }

      if (this.type === 'cascader-multi' || this.type === 'cascader') {
        let codeTemp = this.codeValue
        // console.log("codeTemp",codeTemp)
        if (this.codeValue instanceof Array) {
          codeTemp = this.codeValue[this.codeValue.length - 1]
        }
        const labels = []
        this.getTreeLabelPath(codeTemp, this.options, labels)
        this.codeName = labels.join(' / ')
        return
      }

      if (this.codeValue.indexOf(',') !== -1) {
        const codeValues = this.codeValue.split(',')
        let showCode = ''
        for (const idx in this.options) {
          for (const idx2 in codeValues) {
            // console.log(this.options[idx].id, "----", codeValues[idx2])
            if (this.options[idx].id === codeValues[idx2]) {
              if (showCode !== '') {
                showCode += ','
              }
              showCode += this.options[idx].label
            }
          }
        }
        this.codeName = showCode
      } else {
        for (const idx in this.options) {
          // console.log(this.options[idx].id, '----', this.codeValue)
          if (this.options[idx].id === this.codeValue) {
            this.codeName = this.options[idx].label
            this.codeColor = this.options[idx].color || null
          }
        }
      }
    },
    clearEmptyChilden(options) {
      for (const idx in options) {
        if (!options[idx].children || options[idx].children.length === 0) {
          delete options[idx].children
        } else {
          options[idx].children = this.clearEmptyChilden(options[idx].children)
        }
      }
      return options
    },
    assembleTree(nodes, parent) {
      nodes.forEach(n => {
        // if (parent) {}
        const path = parent ? parent.path.concat([n.id]) : [n.id] // 数组记录path
        const labelPath = parent ? parent.labelPath.concat([n.label]) : [n.label] // 数组记录path
        n.path = path
        n.labelPath = labelPath
        if (n.children && n.children instanceof Array) {
          this.assembleTree(n.children, n)
        }
      })
    },
    getTreeIdPath(id, nodes, ids) {

      nodes.forEach(n => {
        if (n.id == id) {
          // console.log("n.path",n.labelPath, this.dic)
          ids.push.apply(ids, n.path)
          return
        } else if (n.children && n.children instanceof Array) {
          this.getTreeIdPath(id, n.children, ids)
        }
      })
    },
    getTreeLabelPath(id, nodes, labels) {
      nodes.forEach(n => {
        if (n.id == id) {
          // console.log("n.labelPath",n.labelPath, this.dic)
          labels.push.apply(labels, n.labelPath)
          return
        } else if (n.children && n.children instanceof Array) {
          this.getTreeLabelPath(id, n.children, labels)
        }
      })
    },
    handChange(val) {
      console.log('handChange', val)
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>

<style scoped lang="scss">

::v-deep .el-cascader .el-input.is-disabled .el-input__inner {
  border: none;
  background-color: transparent;
  cursor: default;
  padding: 0px;
  display: none;
}

::v-deep .el-cascader .el-input.is-disabled .el-input__inner {
  border: none;
  background-color: transparent;
  cursor: default;
  padding: 0px;
}

::v-deep .el-cascader.is-disabled .el-cascader__tags {
  width: 120px;

  .el-tag {
    margin-left: 0px;
  }
}

::v-deep .el-cascader .el-input.is-disabled .el-input__icon {
  display: none;
  cursor: default;
}
</style>
