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
          @click="dialogFormSeniorQueryVisible=true"
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
      <el-table-column sortable="custom" prop="name" label="名称">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="类型">
        <template slot-scope="scope">
          <el-tag size="mini" :type="scope.row.type | statusFilter">{{ scope.row.type }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="时间">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.createTime }}</span>
        </template>
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

    <el-drawer v-loading="addOrUpdateLoading" :title="addOrUpdate" :visible.sync="dialogFormVisible">
      <div class="demo-drawer__content">
        <el-form
          ref="dataForm"
          :rules="rules"
          :model="temp"
          label-position="left"
          label-width="70px"
          style="width: 400px; margin-left:50px;"
        >

          <el-form-item label="名称" prop="title">
            <el-input v-model="temp.name" size="small"/>
          </el-form-item>

          <el-form-item label="标题" prop="title">
            <el-input v-model="temp.title" size="small"/>
          </el-form-item>
          <el-form-item label="类型" prop="title">
            <el-input v-model="temp.type" size="small"/>
          </el-form-item>
          <el-form-item label="时间" prop="timestamp">
            <el-date-picker v-model="temp.createTime" size="small" type="datetime" placeholder="Please pick a date"/>

          </el-form-item>

        </el-form>
        <div class="demo-drawer__footer">
          <el-button size="small" style="width: 45%;margin-left: 5%;" @click="this.temp==={}"> 重置</el-button>
          <el-button size="small" style="width: 45%;" type="primary" @click="submitAddInfo"> 确定
          </el-button>
        </div>
      </div>
    </el-drawer>

    <el-drawer title="详情" :visible.sync="dialogFormDetailsVisible">
      <el-form
        :model="detailsTemp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="名称" prop="name">
          {{ detailsTemp.name }}
        </el-form-item>
        <el-form-item label="标题" prop="title">
          {{ detailsTemp.title }}
        </el-form-item>
        <el-form-item label="类型" prop="type">
          {{ detailsTemp.type }}
        </el-form-item>
        <el-form-item label="时间" prop="timestamp">
          {{ detailsTemp.createTime }}
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormDetailsVisible = false">
          取消
        </el-button>
      </div>
    </el-drawer>

    <el-drawer title="高级查询" :visible.sync="dialogFormSeniorQueryVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="queryTemp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="queryTemp.name" size="small"/>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="queryTemp.title_Nrange1" size="small" style="width: 47%"/>
          <el-input v-model="queryTemp.title_Nrange2" size="small" style="width: 47%;margin-left: 6%"/>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-input v-model="queryTemp.type" size="small"/>
        </el-form-item>
        <el-form-item label="时间" prop="timestamp">
          <el-date-picker
            v-model="queryTemp.createTime_Trange"
            size="small"
            type="datetimerange"
            align="right"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            :default-time="['00:00:00','23:59:59']"
          />
        </el-form-item>
      </el-form>

      <div class="demo-drawer__footer">
        <el-button size="small" style="width: 45%;margin-left: 5%;" @click="clearQueryInfo"> 重置</el-button>
        <el-button size="small" style="width: 45%;" type="primary" @click="querySeniorInfo"> 查询</el-button>
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
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    components: {
      codeSelect
    },
    data() {
      return {
        list: null, // 表格数据
        rules: null, // 表单验证
        lastQuery: true, // 最后一次查询true 为普通，false为高级
        dialogFormVisible: false,
        dialogFormDetailsVisible: false,
        dialogFormSeniorQueryVisible: false,
        listLoading: true,
        addOrUpdateLoading: true,
        addOrUpdate: '',
        keywords: '',
        page: 1,
        pageSize: 20,
        total: 0,
        order: '', // 排序字段
        // 修改或者添加
        temp: {
          id: undefined,
          name: '',
          title: '',
          type: '',
          createTime: ''
        },
        // 详情-不带主键，只用来查看，
        detailsTemp: {
          name: '',
          title: '',
          type: '',
          createTime: ''
        },
        // 查询和高级查询
        queryTemp: {
          name: undefined,
          title: undefined,
          type: undefined,
          createTime: undefined,
          // 数字范围生成
          createTime_Trange: undefined,
          // 数字范围生成
          title_Nrange: undefined,
          title_Nrange1: undefined,
          title_Nrange2: undefined
        }
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      // 添加
      addInfo() {
        this.temp = {}
        this.addOrUpdate = '添加'
        this.dialogFormVisible = true
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
        this.addOrUpdate = '详情'
        this.dialogFormDetailsVisible = true
        this.detailsTemp = {}
        getDetailsInfo({ id: row.id }).then(response => {
          this.detailsTemp = response.data
        })
      },
      // 获取修改内容
      editGetInfo(row) {
        getDetailsInfo({ id: row.id }).then(response => {
          this.temp = response.data
        })
        this.addOrUpdate = '修改'
        this.dialogFormVisible = true
      },
      // 高级查询方法
      querySeniorInfo(isNext) {
        this.lastQuery = false
        for (const key in this.queryTemp) {
          if (this.queryTemp[key] === null || this.queryTemp[key] === undefined || this.queryTemp[key] === '') {
            this.queryTemp[key] = undefined
          }
        }
        if (isNext != true) {
          this.page = 1
        }
        const query = this.queryTemp

        query['page'] = this.page
        query['pageSize'] = this.pageSize
        query['order'] = this.order

        // 生成的时候需要动态修改
        if (query['title_Nrange1'] || query['title_Nrange2']) {
          query['title_Nrange'] = [this.queryTemp.title_Nrange1, this.queryTemp.title_Nrange2]
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
        this.dialogFormVisible = false
      },
      // 重置查询信息
      clearQueryInfo() {
        for (const key in this.queryTemp) {
          this.queryTemp[key] = undefined
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
        this.queryTemp.page = 1
        this.queryAllType()
      }
    }

  }
</script>
