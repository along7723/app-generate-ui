<template>
  <div class="document">
    <!--简历区域-->
    <div
      id="pdfDom"
      class="page"
      contenteditable="true">
      <el-form v-model="formData">
        <table class="a4-form">
          <tr>
            <td :colspan="7">人才信息内容</td>
          </tr>
          <tr>
            <td style="width:90px">
              姓名
            </td>
            <td>
              {{formData.name}}
            </td>
            <td style="width:80px">
              性别
            </td>
            <td style="width:80px">
              <code-select
                :key="'sex'+formData.sex"
                dic="Sex"
                v-model="formData.sex"
                translate-mode></code-select>
            </td>
            <td style="width:80px">
              出生日期
            </td>
            <td style="width:80px">
              {{formData.birthday}}
            </td>
            <td
              rowspan="4"
              style="width:120px">
              <image-base-64
                v-model="formData.photo"
                :width="120"></image-base-64>
            </td>
          </tr>
          <tr>
            <td>
              国籍（地区）及籍贯
            </td>
            <td>
              <code-select
                :key="'nationality'+formData.nationality"
                dic="countyCode"
                v-model="formData.nationality"
                translate-mode></code-select>,
              <code-select
                :key="'jgd'+formData.jgd"
                dic="RegionCity"
                v-model="formData.jgd"
                type="cascader"
                translate-mode></code-select>
            </td>
            <td>
              民族
            </td>
            <td>
              <code-select
                :key="'nation'+formData.nation"
                dic="Nation"
                v-model="formData.nation"
                translate-mode></code-select>
            </td>
            <td>
              政治面貌
            </td>
            <td>
              <code-select
                :key="'politicsStatus'+formData.politicsStatus"
                dic="PoliticsStatus"
                v-model="formData.politicsStatus"
                translate-mode></code-select>
            </td>
          </tr>
          <tr>
            <td>
              毕业院校
            </td>
            <td>
              {{formData.graduateSchool}}
            </td>
            <td>
              最高学历
            </td>
            <td>
              <code-select
                :key="'education'+formData.education"
                dic="Education"
                v-model="formData.education"
                translate-mode></code-select>
            </td>
            <td>
              最高学位
            </td>
            <td>
              <code-select
                :key="'marjor'+formData.marjor"
                dic="Marjor"
                v-model="formData.marjor"
                translate-mode></code-select>
            </td>
          </tr>
          <tr>
            <td>
              从事金融工作年限
            </td>
            <td>
              {{formData.workYears}}年
            </td>
            <td>
              专业技术职称/技能水平
            </td>
            <td colspan="3">
              {{formData.latDomain}}
            </td>
          </tr>
          <tr>
            <td>
              健康状况
            </td>
            <td colspan="1">
              {{formData.jkzk}}
            </td>
            <td>
              出生地
            </td>
            <td colspan="4">
              <code-select
                :key="'csd'+formData.csd"
                dic="RegionCity"
                v-model="formData.csd"
                type="cascader"
                translate-mode></code-select>
            </td>
          </tr>
          <tr>
            <td>
              证件类型
            </td>
            <td colspan="2">
              <code-select
                :key="'idtype'+formData.idtype"
                dic="IdType"
                v-model="formData.idtype"
                translate-mode></code-select>
            </td>
            <td>
              证件号码
            </td>
            <td colspan="3">
              {{formData.idno}}
            </td>
          </tr>
          <tr>
            <td>
              工作单位
            </td>
            <td colspan="2">
              {{formData.workCompany}}
            </td>
            <td>
              现任职务
            </td>
            <td colspan="3">
              {{formData.workJob}}
            </td>
          </tr>
          <tr>
            <td>
              通讯地址
            </td>
            <td colspan="2">
              <code-select
                :key="'jzd'+formData.jzd"
                dic="RegionCity"
                type="cascader"
                v-model="formData.jzd"
                translate-mode></code-select>
              {{formData.jzdxz}}
            </td>
            <td>
              联系电话
            </td>
            <td colspan="3">
              {{formData.phone}}
            </td>
          </tr>
          <tr>
            <td>
              电子邮箱
            </td>
            <td  colspan="6">
              {{formData.dzyx}}
            </td>
          </tr>

          <tr>
            <td>
              推荐单位
            </td>
            <td colspan="2">
              {{formData.tjdw}}
            </td>
            <td>
              单位联系人
            </td>
            <td >
              {{formData.tjdwLxr}}
            </td>
            <td>
              联系电话
            </td>
            <td >
              {{formData.tjdwDh}}
            </td>
          </tr>
          <tr>
            <td>
              专长
            </td>
            <td colspan="6" >
              {{formData.zc}}
            </td>
          </tr>
          <tr>
            <td>
              社会兼职
            </td>
            <td colspan="6"  >
              {{formData.shjz}}
            </td>
          </tr>
          <tr>
            <td>
              备注
            </td>
            <td colspan="6" >
              {{formData.bz}}
            </td>
          </tr>
          <tr>
            <td style="height:200px;">
              教育经历
            </td>
            <td
              colspan="6"
              style="text-align:left;padding-left:8px">
              <template v-if="subData && subData.educations && subData.educations.length>0">
                <div
                  v-for="(item) in subData.educations"
                  :key="'educations'+item.id">
                  {{item.startYears | formatMonth}}—{{item.endYears | formatMonth}} {{item.college}}，{{item.major}}，
                  <code-select
                    :key="'item.degree'+item.degree"
                    dic="Marjor"
                    v-model="item.degree"
                    translate-mode></code-select>
                </div>
              </template>
              <template v-else><span>暂无数据</span></template>
            </td>
          </tr>
          <tr>
            <td>
              工作经历
            </td>
            <td
              colspan="6"
              style="height:200px;text-align:left;padding-left:8px">
              <template v-if="subData && subData.works && subData.works.length>0">
                <div
                  v-for="(item) in subData.works"
                  :key="'works'+item.id">
                  {{item.startDate | formatDate}}—{{item.endDate | formatDate}} {{item.company}}，{{item.job}}，{{item.jobDuty}}
                </div>
              </template>
              <template v-else><span>暂无数据</span></template>
            </td>
          </tr>
          <tr v-if="!formData.isExpert || formData.isExpert=='0'">
            <td>
              主要成绩及业绩贡献
            </td>
            <td
              colspan="6"
              style="height:200px;text-align:left;padding-left:8px">
              <template v-if="subData && subData.performances && subData.performances.length>0">
                <div
                  v-for="(item) in subData.performances"
                  :key="'performances'+item.id">
                  {{item.info}}
                </div>
              </template>
              <template v-else><span>暂无数据</span></template>
            </td>
          </tr>
          <tr v-if="formData.isExpert=='1'">
            <td>
              获省部级及以上奖励或入选高层次人才计划情况
            </td>
            <td
              colspan="6"
              style="height:200px;text-align:left;padding-left:8px">
              <template v-if="subData && subData.titles && subData.titles.length>0">
                <div
                  v-for="(item) in subData.titles"
                  :key="'titles'+item.id">
                  {{item.obtainData}}，{{item.titleName}}，
                  <code-select
                    :key="'item.titleLevel'+item.titleLevel"
                    dic="TitleLevel"
                    v-model="item.titleLevel"
                    translate-mode></code-select>
                  ，{{item.memo}}
                </div>
              </template>
              <template v-else><span>暂无数据</span></template>
            </td>
          </tr>
          <tr v-if="formData.isExpert=='1'">
            <td>
              专业认证证书或职称证书获取情况（5项以内）
            </td>
            <td
              colspan="6"
              style="height:200px;text-align:left;padding-left:8px">
              <template v-if="subData && subData.techTitles && subData.techTitles.length>0">
                <div
                  v-for="(item) in subData.techTitles"
                  :key="'titles'+item.id">
                  {{item.obtainDate}}，{{item.titleName}}，{{item.memo}}
                </div>
              </template>
              <template v-else><span>暂无数据</span></template>
            </td>
          </tr>
          <tr v-if="formData.isExpert=='1'">
            <td>
              主持或作为主要人员承担研究项目（课题）情况（按重要性填写，不超过10项）
            </td>
            <td
              colspan="6"
              style="height:200px;text-align:left;padding-left:8px">
              <template v-if="subData && subData.sciences && subData.sciences.length>0">
                <div
                  v-for="(item) in subData.sciences"
                  :key="'titles'+item.id">
                  {{item.startDate}}，参加课题/项目：{{item.scienceName}}，共{{item.members}}人参与，本人职位：{{item.duty}}
                </div>
              </template>
              <template v-else><span>暂无数据</span></template>
            </td>
          </tr>
          <tr v-if="formData.isExpert=='1'">
            <td>
              发表论文(出版论著)情况（10项以内）
            </td>
            <td
              colspan="6"
              style="height:200px;text-align:left;padding-left:8px">
              <template v-if="subData && subData.papers && subData.papers.length>0">
                <div
                  v-for="(item) in subData.papers"
                  :key="'titles'+item.id">
                  {{item.publishDate}}，在“{{item.publishWhere}}”发表论文《{{item.paperName}}》，{{item.isFirstAuthor=='1'?'本人为第一作者':'非第一作者'}}
                </div>
              </template>
              <template v-else><span>暂无数据</span></template>
            </td>
          </tr>
          <tr v-if="formData.isExpert=='1'">
            <td>
              专利情况（按重要性填写主要专利，总共不超过10项）
            </td>
            <td
              colspan="6"
              style="height:200px;text-align:left;padding-left:8px">
              <template v-if="subData && subData.patents && subData.patents.length>0">
                <div
                  v-for="(item) in subData.patents"
                  :key="'titles'+item.id">
                  {{item.applyDate}}，申请专利：{{item.patentName}}，专利号：{{item.patentNo}}
                </div>
              </template>
              <template v-else><span>暂无数据</span></template>
            </td>
          </tr>
          <tr v-if="formData.isExpert=='1'">
            <td>
              其他（包括在国际国内学术组织兼职、在国际国内学术会议做重要报告等情况）
            </td>
            <td
              colspan="6"
              style="height:200px;text-align:left;padding-left:8px">
              <template v-if="subData && subData.otherinfos && subData.otherinfos.length>0">
                <div
                  v-for="(item) in subData.otherinfos"
                  :key="'titles'+item.id">
                  {{item.infoDate}}，{{item.info}}
                </div>
              </template>
              <template v-else><span>暂无数据</span></template>
            </td>
          </tr>


        </table>

      </el-form>
    </div>

    <!--附件区域-->
    <div class="page page-attachment">
      <div style="font-weight:bold;margin-bottom:10px;">附件信息</div>
      <template v-if="subData && subData.attachments && subData.attachments.length>0">
        <div
          style="line-height:1.5;"
          v-for="(item,index) in subData.attachments"
          :key="'titles'+item.id">
          附件{{index+1}}.
          {{item.attachName}},
          <single-file
            v-model="item.attachFile"
            readonly
          ></single-file>
        </div>
      </template>
      <div v-else style="text-align:center;color:#999;"><span>暂无数据</span></div>
    </div>

    <!--状态区域-->
    <div class="page page-status">
      <span style="font-weight:bold;">审核状态：
        <code-select
          :key="'status'+formData.status"
          dic="examine"
          v-model="formData.status"
          translate-mode></code-select>
      </span>
      <span style="font-weight:bold;margin-left: 50px">未通过原因：{{formData.reason}}</span>
    </div>

    <!--按钮区-->
    <el-row :class="isInDrawer ? 'in-drawer-buttons-row' : 'buttons-row'">
      <el-col :class="isInDrawer ? 'in-drawer-form-buttons' : 'form-buttons'">
        <!-- {{currFormType}} -->
        <template v-if="!readonlyMode">
          <template v-if="isDetail">
            <el-button
              icon="el-icon-edit"
              type="primary"
              @click="showEdit">修改
            </el-button>

          </template>
          <template v-else>
            <el-button
              style=""
              type="primary"
              @click="submitUpdateInfo('dataForm')">保存
            </el-button>
            <el-button
              v-if="isInDrawer"
              @click="onClose">取消
            </el-button>
          </template>
          <el-button
            v-if="compId"
            @click="showAddOrUpdateWork()">添加/修改工作经历
          </el-button>
          <el-popconfirm
            v-if="compId"
            @onConfirm="leaveOffice2(formData.talId,compId)"
            title="离职后将无法查看该员工的信息。确定该员工已离职了吗？">
            <el-button slot="reference">员工已离职?</el-button>
          </el-popconfirm>
        </template>
        <span v-else style="color: #999">只读模式</span>
        <!--扩展按钮插槽-->
        <slot
          name="detail-functions"
          :data="formData || {}"></slot>
        <el-button v-print="printObj" style="margin-left:20px">打印/保存PDF</el-button>

      </el-col>
    </el-row>

    <el-dialog
      title="添加/修改员工在本公司的工作经历"
      :visible.sync="workVisible"
      :append-to-body="true"
      width="50%">
      <work
        :compId="compId"
        :max-add-size="1"
        :forceQueryOrAddData="{talId: formData.talId,compId:compId}"/>
    </el-dialog>
  </div>
</template>

<script>
  import PageHeader from '@/components/Sys/PageHeader'
  import RichText from '@/components/Sys/RichText'
  import work from './work'
  import QRCode from 'qrcodejs2'
  import ImageBase64 from '@/components/Sys/Upload/ImageBase64'
  import { leaveOffice } from './api'

  import {
    getSubData
  } from './api a4page.js'

  const settings = require('@/settings.js')

  export default {
    name: 'NotificationPage',
    components: {
      PageHeader,
      RichText,
      ImageBase64,
      work
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
      },
      formType: {
        type: String,
        default: 'add',
        required: true
      },
      isInDrawer: {
        type: Boolean,
        default: false,
        required: false
      },
      readonlyMode: {
        type: Boolean,
        default: false,
        required: false
      },
      compId: {
        type: String,
        default: null,
        required: false
      }
    },
    data() {
      return {
        formData: this.detailData || {},
        createUser: null,
        pageData: null, //接收html格式代码
        htmlTitle: '人才信息',
        printObj: {
          id: 'pdfDom',
          popTitle: settings.title || '人才信息',
          extraCss: 'https://www.google.com,https://www.google.com',
          extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
        },
        currFormType: this.formType,
        subData: null,
        listLoading: false,
        workVisible: false
      }
    },
    created() {
      // console.log('this.formData', this.formData)
      this.querySubData()
    },
    computed: {
      isDetail: function() {
        return this.currFormType === 'detail'
      },
      isAdd: function() {
        return this.currFormType === 'add'
      },
      isEdit: function() {
        return this.currFormType === 'edit'
      }
    },
    watch: {
      formType(val) {
        // console.log("CurdForm watch formType ----", val);
        this.currFormType = val
      },
      detailData(val) {
        // console.log("detailData watched");
        this.formData = val || {}
        this.querySubData()
      }
    },
    mounted() {
      this.$nextTick(() => {

      })
    },
    methods: {
      showAddOrUpdateWork() {
        this.workVisible = true
      },
      leaveOffice2(talId, compId) {
        console.log('leaveOffice2', talId, compId)
        leaveOffice({ talId, compId }).then(response => {
          this.$message.success('操作成功，员工已离职')
          this.close()
        })
      },
      close() {
        this.$emit('close')
      },
      querySubData() {
        // console.log('querySubData: ');
        if (!this.formData.talId) {
          return
        }

        this.listLoading = true
        const info = {
          id: this.formData.talId,
          isExpert: this.formData.isExpert
        }
        getSubData(info).then(response => {
          // console.log('response: ', response);
          this.subData = response.data
          // console.log('this.subData: ', this.subData);

          this.listLoading = false
        }).catch((error) => {
          console.log('error: ', error)
          this.listLoading = false
        })
      },
      showEdit(row) {
        // this.formVisible = true
        this.currFormType = 'edit'
        // this.formFields = this.detailFields
        // this.formDetailData will update in watch
        this.$emit('showEdit', this.detailData)
      },
      getBase64Image(img, width, height) {
        var canvas = document.createElement('canvas')
        canvas.width = width ? width : img.width
        canvas.height = height ? height : img.height

        var ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        var dataURL = canvas.toDataURL()
        return dataURL
      },
      getCanvasBase64(img) {
        var image = new Image()
        //至关重要
        image.crossOrigin = ''
        image.src = img
        //至关重要
        var deferred = $.Deferred()
        if (img) {
          image.onload = function() {
            deferred.resolve(getBase64Image(image)) //将base64传给done上传处理
            document.getElementById('container2').appendChild(image)
          }
          return deferred.promise() //问题要让onload完成后再return sessionStorage['imgTest']
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .buttons-row {
    position: fixed;
    bottom: 0px;
    height: 60px;
    width: 100%;
    background-color: white;
    z-index: 10;
    margin-left: -20px;
    margin-bottom: 0px;
    border: 1px solid #ccc;
  }

  .in-drawer-buttons-row {
    position: fixed;
    bottom: 0px;
    height: 60px;
    width: 100%;
    background-color: white;
    z-index: 10;
    margin-left: 20px;
    margin-bottom: 0px;
    border: 1px solid #ccc;

    button {
      margin: 0 20px 0 0px;
    }
  }

  .form-buttons {
    height: 60px;
    line-height: 60px;
    text-align: center;
  }

  .in-drawer-form-buttons {
    height: 60px;
    line-height: 60px;
    text-align: left;
    padding-left: 20px;
  }

  ::v-deep table.a4-form {
    border-collapse: collapse;
    width: 100%;
    font-size: 12px;
    line-height: 2;

    tr {

      td {
        border: 1px solid black;
        padding: 3px;
        text-align: center;
      }
    }
  }

  .document {
    margin: -20px;
    margin-top: -60px;
    padding: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    font-family: "Roboto", -apple-system, "San Francisco", "Segoe UI", "Helvetica Neue", sans-serif;
    font-size: 12pt;
    background-color: #eee;
  }

  .el-drawer__body .document {
    margin-top: -40px;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", -apple-system, "San Francisco", "Segoe UI", "Helvetica Neue", sans-serif;
    font-size: 12pt;
    background-color: #eee;
  }

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  .page {
    margin: 1cm auto;
    background: #fff;
    box-shadow: 0 4px 5px rgba(75, 75, 75, 0.2);
    outline: 0;
  }

  div.page-break {
    page-break-after: always;
  }

  h1 {
    page-break-before: always;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    page-break-after: avoid;
  }

  p {
    margin: 0;
  }

  p + p {
    margin-top: 0.5cm;
  }

  a {
    text-decoration: none;
    color: black;
  }

  table {
    page-break-inside: avoid;
  }

  @page {
    orphans: 4;
    widows: 2;
  }

  @media print {

    html,
    body {
      background-color: #fff;
    }

    .page {
      width: initial !important;
      min-height: initial !important;
      margin: 0 !important;
      padding: 0 !important;
      border: initial !important;
      border-radius: initial !important;
      background: initial !important;
      box-shadow: initial !important;

      page-break-after: always;
    }
  }

  .page {

    width: 21cm;
    min-height: 29.7cm;

    padding-left: 2cm;
    padding-top: 2cm;
    padding-right: 2cm;
    padding-bottom: 2cm;
  }

  .page-attachment {

    width: 21cm;
    min-height: 8cm;
  }
  .page-status {

    width: 21cm;
    min-height: 1cm;
    padding: 0.5cm;
  }

  @page {

    size: A4 portrait;

    margin-left: 2cm;
    margin-top: 2cm;
    margin-right: 2cm;
    margin-bottom: 2cm;
  }
</style>
