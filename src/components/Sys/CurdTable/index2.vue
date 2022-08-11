<template>
  <div class="app-container">
    <div class="filter-container" style="margin-bottom: 10px;">
      <div style="float: left; margin-right:10px;">
        <el-button plain icon="el-icon-plus" type="success" size="small" @click="addInfo">
          添加
        </el-button>
      </div>
      <div style="float: right;">
        <el-input v-model="keywords" style="width: 200px;" type="input" size="small" placeholder="请输入内容"/>
        <el-button type="primary" style="margin-left: 10px;" size="small" icon="el-icon-search" @click="queryInfo">
          查询
        </el-button>

        <el-button
          type=""
          style="margin-left: 10px;"
          size="small"
          icon="el-icon-search"
          @click="showSeniorQuery"
        >
          高级查询
        </el-button>
      </div>
      <div style="clear: both"/>

    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      align="center"
      size="small"
      @sort-change="orderByTable"
    >

      <el-table-column label="#" width="60">
        <template slot-scope="scope">
          {{ scope.$index + 1 + (page-1)*pageSize }}
        </template>
      </el-table-column>

      <el-table-column v-for="(item) in entity" :sortable="item.isOrder" :prop="item.name" :label="item.label">
        <div v-if="item.isCod" slot-scope="scope">
          <!--  <code-select :code="item.codeName" :defaultCode="scope.row[item .name]"  codeValue="lll" />-->
          <!--  codeValue="" 加上则是选择框   -->
          <code-select v-model="scope.row[item .name]" :dic="item.codeName" translate-mode/>
        </div>
        <div v-else>
          {{ scope.row[item .name] }}
        </div>
      </el-table-column>

      <el-table-column align="center" prop="created_at" width="150" label="操作">
        <template slot-scope="scope">
          <el-row>
            <el-tag size="mini" title="详情" type="" circle @click="details(scope.row)">
              <i class="el-icon-share"/>
            </el-tag>
            <el-tag size="mini" title="修改" type="" style="margin: 0 10px;" circle @click="editGetInfo(scope.row)">
              <i class="el-icon-edit"/>
            </el-tag>
            <el-popconfirm
              confirm-button-text="确定"
              cancel-button-text="取消"
              icon="el-icon-info"
              icon-color="red"
              title="确定删除这条数据吗？"
              @onConfirm="deleteInfo(scope.row)"
            >
              <el-tag slot="reference" size="mini" title="删除" type="danger" circle>
                <i class="el-icon-delete"/>
              </el-tag>
            </el-popconfirm>

          </el-row>
        </template>
      </el-table-column>
    </el-table>

    <div class="block" align="center" style="margin-top: 20px">
      <el-pagination
        :current-page.sync="page"
        :page-sizes="[10, 20, 30, 40]"
        :page-size.sync="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total.sync="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>

    <el-drawer v-loading="updateLoading" title="修改" :visible.sync="dialogUpdateFormVisible">
      <div class="demo-drawer__content">
        <el-form
          ref="dataForm"
          :rules="rules"
          :model="updateEntity"
          label-position="left"
          label-width="70px"
          style="width: 400px; margin-left:50px;"
        >
          <el-form-item
            v-for="(item) in entity"
            v-if="!item.isHide&&item.isUpdate"
            :label="item.label"
            :prop="item.name"
            :rules="item.rules"
          >
            <div v-if="item.type==='time'">
              <el-date-picker v-model="updateEntity[item.name]" size="small" type="datetime"/>
            </div>
            <div v-else-if="item.isCod">
              <code-select :key="updateEntity[item.name]" v-model="updateEntity[item.name]" :dic="item.codeName"/>
            </div>
            <div v-else>
              <el-input v-model="updateEntity[item.name]" size="small"/>
            </div>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button size="small" style="width: 45%;margin-left: 5%;" @click="dialogFormVisible=false"> 取消</el-button>
          <el-button size="small" style="width: 45%;" type="primary" @click="submitAddInfo"> 确定
          </el-button>
        </div>
      </div>
    </el-drawer>

    <el-drawer v-loading="addLoading" title="新增" :visible.sync="dialogAddFormVisible">
      <div class="demo-drawer__content">
        <el-form
          ref="dataForm"
          :rules="rules"
          :model="addEntity"
          label-position="left"
          label-width="70px"
          style="width: 400px; margin-left:50px;"
        >
          <el-form-item v-for="(item) in entity" v-if="!item.isHide&&item.isAdd" :rules="item.rules" :label="item.label"
                        :prop="item.name">
            <div v-if="item.type==='time'">
              <el-date-picker v-model="addEntity[item.name]" size="small" type="datetime"/>
            </div>
            <div v-else-if="item.isCod">
              <code-select v-model="scope.row[item .name]" :dic="item.codeName"/>
            </div>
            <div v-else>
              <el-input v-model="addEntity[item.name]" size="small"/>
            </div>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button size="small" style="width: 45%;margin-left: 5%;" @click="dialogAddFormVisible=false"> 取消
          </el-button>
          <el-button size="small" style="width: 45%;" type="primary" @click="submitAddInfo"> 确定
          </el-button>
        </div>
      </div>
    </el-drawer>

    <el-drawer title="详情" :visible.sync="dialogFormDetailsVisible">

      <el-form
        ref="dataForm"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item v-for="(item) in entity" v-if="item.isDetails" :label="item.label" :prop="item.name">
          <div v-if="item.isCod">
            <code-select :key="detailsEntity[item.name]+'detailsEntity'" v-model="detailsEntity[item.name]"
                         :dic="item.codeName" translate-mode/>
          </div>
          <div v-else>
            {{ detailsEntity[item.name] }}
          </div>
        </el-form-item>
      </el-form>

      <div class="demo-drawer__footer">
        <el-button size="small" style="width: 95%;margin-left: 5%;" @click="dialogFormDetailsVisible=false"> 取消
        </el-button>
      </div>
    </el-drawer>

    <el-drawer v-loading="addLoading" title="高级查询" :visible.sync="dialogFormSeniorQueryVisible">
      <div class="demo-drawer__content">
        <el-form
          ref="dataForm"
          :model="queryEntity"
          label-position="left"
          label-width="70px"
          style="width: 400px; margin-left:50px;"
        >
          <el-form-item v-for="(item) in entity" v-if="!item.isHide&&item.isQuery" :label="item.label"
                        :prop="item.name">
            <div v-if="item.type==='time'">
              <div v-if="item.type==='time'">
                <el-date-picker
                  v-model="queryEntity[item.name]"
                  size="small"
                  type="datetimerange"
                  align="right"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  :default-time="['00:00:00','23:59:59']"
                />
              </div>
            </div>
            <div v-else-if="item.isCod">
              <code-select key="seniorQuery" v-model="queryEntity[item .name]" :dic="item.codeName"/>
            </div>
            <div v-else-if="item.isScope">
              <el-input v-model="queryEntity[item.name+'~startScope']" size="small" style="width: 47%"/>
              <el-input v-model="queryEntity[item.name+'~endScope']" size="small" style="width: 47%;margin-left: 6%"/>
            </div>
            <div v-else>
              <el-input v-model="queryEntity[item.name]" size="small"/>
            </div>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button size="small" style="width: 45%;margin-left: 5%;" @click="dialogFormSeniorQueryVisible=false"> 取消
          </el-button>
          <el-button size="small" style="width: 45%;" type="primary" @click="querySeniorInfo"> 确定
          </el-button>
        </div>
      </div>
    </el-drawer>

  </div>

</template>

<style lang="scss">
  .el-drawer.rtl {
    overflow-y: scroll;
  }
</style>
<script>
  import {
    getAllData,
    getDetailsInfo,
    editDetailsInfo,
    addDetailsInfo,
    delInfo,
    getSeniorData
  } from '@/api/userManager'
  import codeSelect from '@/components/Sys/CodeSelect'

  export default {
    name: 'CurdTable',
    components: {
      codeSelect
    },
    data() {
      return {
        list: null, // 表格数据
        rules: null, // 表单验证
        lastQuery: true, // 最后一次查询true 为普通，false为高级
        dialogAddFormVisible: false,
        dialogUpdateFormVisible: false,
        dialogFormDetailsVisible: false,
        dialogFormSeniorQueryVisible: false,
        listLoading: true,
        addLoading: true,
        updateLoading: true,
        keywords: '',
        page: 1,
        pageSize: 20,
        total: 0,
        order: '', // 排序字段
        // 修改或者添加
        entity: [
          {
            name: 'id',
            label: 'id',
            isCod: false, // 是否字典项
            isUpdate: true, // 是否修改
            isDetails: false, // 是否详情
            isHide: true, // 是否隐藏
            isKey: true, // 是否主键
            rules: [
              { required: true, message: '这是必填项', trigger: 'blur' },
              { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
            ], // 验证
            isAdd: false, // 是否添加
            type: 'input', // 输入框类型  input(默认) code time
            isQuery: false, // 是否高级查询
            isOrder: false// 是否排序
          },
          {
            name: 'name',
            label: '名称',
            isCod: false, // 是否字典项
            isUpdate: true, // 是否修改
            isDetails: true, // 是否详情
            isHide: false, // 是否隐藏
            isKey: true, // 是否主键
            rules: [
              { required: true, message: '这是必填项', trigger: 'blur' },
              { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
            ],
            isAdd: true, // 是否添加
            type: 'input', // 输入框类型  input(默认) code time
            isQuery: true, // 是否高级查询
            isOrder: false// 是否排序
          },
          {
            name: 'title',
            label: '标题',
            isCod: false, // 是否字典项
            isUpdate: true, // 是否修改
            isDetails: true, // 是否详情
            isHide: false, // 是否隐藏
            isKey: true, // 是否主键
            isRequired: true, // 是否必填
            isAdd: true, // 是否添加
            type: 'input', // 输入框类型  input(默认) code time
            isQuery: true, // 是否高级查询
            isOrder: false, // 是否排序
            isScope: true// 是否范围查询
          },
          {
            name: 'type',
            label: '类型',
            isCod: true, // 是否字典项
            isUpdate: true, // 是否修改
            isDetails: true, // 是否详情
            isHide: false, // 是否隐藏
            isKey: true, // 是否主键
            rules: {}, // 验证
            isAdd: false, // 是否添加
            type: 'input', // 输入框类型  input(默认) code time
            isQuery: true, // 是否高级查询
            isOrder: false, // 是否排序
            codeName: 'spiderMode' // 字典名称
          },
          {
            name: 'createTime',
            label: '创建时间',
            isCod: false, // 是否字典项
            isUpdate: true, // 是否修改
            isDetails: true, // 是否详情
            isHide: false, // 是否隐藏
            isKey: true, // 是否主键
            isRequired: true, // 是否必填
            isAdd: false, // 是否添加
            type: 'time', // 输入框类型  input(默认) code time
            isQuery: true, // 是否高级查询
            isOrder: false// 是否排序
          }
        ],
        updateEntity: {},
        addEntity: {},
        // 详情-不带主键，只用来查看，
        detailsEntity: {},
        // 查询和高级查询
        queryEntity: {}
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      // 添加
      addInfo() {
        this.addEntity = {}
        this.dialogAddFormVisible = true
      },
      // 添加和修改提交到后台
      submitAddInfo() {
        if (this.temp.id != undefined && this.temp.id != null) {
          editDetailsInfo(this.temp).then(response => {
            this.fetchData()
          })
        } else {
          addDetailsInfo(this.temp).then(response => {
            this.fetchData()
          })
        }
      },
      // 获取详情
      details(row) {
        this.dialogFormDetailsVisible = true
        this.detailsEntity = {}
        getDetailsInfo({ id: row.id }).then(response => {
          this.detailsEntity = response.data
        })
      },
      // 获取修改内容
      editGetInfo(row) {
        getDetailsInfo({ id: row.id }).then(response => {
          this.updateEntity = response.data
        })
        this.dialogUpdateFormVisible = true
      },
      showSeniorQuery() {
        this.queryEntity = {}
        this.dialogFormSeniorQueryVisible = true
      },
      // 高级查询方法
      querySeniorInfo(isNext) {
        this.lastQuery = false
        for (const key in this.queryEntity) {
          if (this.queryEntity[key] === null || this.queryEntity[key] === '') {
            this.queryEntity[key] = undefined
          }
        }
        if (isNext != true) {
          this.page = 1
        }
        const query = this.queryEntity
        query['page'] = this.page
        query['pageSize'] = this.pageSize
        query['order'] = this.order
        // 生成的时候需要动态修改
        if (query['title_Nrange1'] || query['title_Nrange2']) {
          query['title_Nrange'] = [this.queryEntity.title_Nrange1, this.queryEntity.title_Nrange2]
        }

        getSeniorData(query).then(response => {
          this.addDataList(response)
        })
      },
      // 普通查询方法
      queryInfo(isNext) {
        this.lastQuery = true
        const query = {}
        if (isNext != true) {
          this.page = 1
        }
        query['page'] = this.page
        query['pageSize'] = this.pageSize
        query['keywords'] = this.keywords
        query['order'] = this.order
        getAllData(query).then(response => {
          this.addDataList(response)
        })
      },
      addDataList(response) {
        this.list = response.data.list
        this.total = response.data.total
        this.listLoading = false
        this.dialogFormSeniorQueryVisible = false
      },
      // 重置查询信息
      clearQueryInfo() {
        for (const key in this.queryEntity) {
          this.queryEntity[key] = undefined
        }
      },
      // 获取修改内容
      deleteInfo(row) {
        delInfo({ id: row.id }).then(response => {
          this.fetchData()
        })
      },
      orderByTable({ column, prop, order }) {
        if (order) {
          this.order = prop + ' ' + (order === 'ascending' ? 'ASC' : 'DESC')
        } else {
          this.order = ''
        }
        this.page = 1
        this.queryAllType()
      },
      // 分页相关
      handleSizeChange() {
        // 页面显示数量修改
        this.queryAllType()
      }, handleCurrentChange() {
        // 页码修改
        this.queryAllType()
      }, queryAllType() { // 判断是调用普通查询还是高级查询
        if (this.lastQuery === true) {
          this.queryInfo(true)// 普通查询
        } else {
          this.querySeniorInfo(true)// 高级查询
        }
      },
      fetchData() {
        this.listLoading = true
        this.page = 1
        this.queryAllType()
      }, testSubmit() {
        console.log('updateEntity::::', this.updateEntity)
        console.log('updateEntity::::', this.queryEntity)
      }
    }

  }
</script>
