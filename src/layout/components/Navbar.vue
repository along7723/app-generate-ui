<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container"
               @toggleClick="toggleSideBar"/>

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container"/>

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <el-tooltip content="查找功能" effect="dark" placement="bottom">
          <search id="header-search" class="right-menu-item"/>
        </el-tooltip>

        <!-- <el-tooltip content="错误日志" effect="dark" placement="bottom">
          <error-log class="errLog-container right-menu-item hover-effect"/>
        </el-tooltip> -->

        <el-tooltip content="全屏 / 退出全屏" effect="dark" placement="bottom">
          <screenfull id="screenfull" class="right-menu-item hover-effect"/>
        </el-tooltip>

        <el-tooltip content="元素尺寸设置" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect"/>
        </el-tooltip>

        <el-tooltip v-if="messageEnable" content="消息提醒" effect="dark" placement="bottom">
          <sys-message id="sys-message" class="right-menu-item hover-effect"/>
        </el-tooltip>

      </template>

      <el-dropdown class="avatar-container right-menu-item " trigger="click">
        <el-tooltip content="个人中心" effect="dark" placement="bottom">
          <div class="avatar-wrapper">
            <!--          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">-->
            <i class=" right-menu-item hover-effect fa fa-user" style="width:40px;font-size: 20px;line-height: 40px"/>
            <i class="el-icon-caret-bottom"/>
          </div>
        </el-tooltip>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/editPassword">
            <el-dropdown-item>修改密码</el-dropdown-item>
          </router-link>
          <el-dropdown-item @click.native="logout">
            <span style="display:block;font-weight: bold">退出系统</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>


      <el-tooltip content="页面风格设置" effect="dark" placement="bottom">
        <i class=" right-menu-item hover-effect fa fa-cog" style="width:40px;font-size: 20px;line-height: 50px"
           @click.stop="drawer = true"/>
      </el-tooltip>

      <el-drawer
        title="页面风格设置"
        :with-header="false"
        :visible.sync="drawer"
        :append-to-body="true"
        size="300px">
        <settings></settings>
      </el-drawer>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Breadcrumb from '@/components/Breadcrumb'
  import Hamburger from '@/components/Hamburger'
  import ErrorLog from '@/components/ErrorLog'
  import Screenfull from '@/components/Screenfull'
  import SizeSelect from '@/components/SizeSelect'
  import Search from '@/components/HeaderSearch'
  import SysMessage from '@/components/Sys/SysMessage'
  import Settings from './Settings'

  const defaultSettings = require('@/settings.js')

  export default {
    components: {
      Breadcrumb,
      Hamburger,
      ErrorLog,
      Screenfull,
      SizeSelect,
      Search,
      SysMessage,
      Settings
    },
    data() {
      return {
        drawer: false,
        messageEnable: defaultSettings.messageEnable
      }
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'avatar',
        'device'
      ])
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
      },
      async logout() {
        console.log('ssoEnable1',defaultSettings.ssoEnable)
        await this.$store.dispatch('user/logout')
        console.log('ssoEnable',defaultSettings.ssoEnable)
        console.log('ssoLogOutUrl',defaultSettings.ssoLogOutUrl)
        if(defaultSettings.ssoEnable){
          window.location.href=defaultSettings.ssoLogOutUrl
        }else{
          this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }

    .breadcrumb-container {
      float: left;
    }

    .errLog-container {
      display: inline-block;
      vertical-align: top;
    }

    .right-menu {
      float: right;
      height: 100%;
      line-height: 50px;
      margin-right: 20px;

      &:focus {
        outline: none;
      }

      .right-menu-item {
        display: inline-block;
        padding: 0 12px;
        height: 100%;
        font-size: 16px;
        color: #5a5e66;
        vertical-align: text-bottom;
        horiz-align: center;

        &.hover-effect {
          cursor: pointer;
          transition: background .3s;

          &:hover {
            background: rgba(0, 0, 0, .025)
          }
        }
      }

      .avatar-container {
        margin-right: 5px;

        .avatar-wrapper {
          margin-top: 5px;
          position: relative;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
            font-size: 26px;
            text-align: center;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: 0px;
            top: 22px;
            font-size: 12px;
          }
        }
      }
    }
  }

  #setting {;
    color: rgb(90, 94, 102);

    cursor: pointer;
    display: inline-block;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
    font-size: 24px;
    height: 50px;
    line-height: 54px;
    padding-bottom: 0px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 0px;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    transition-delay: 0s;
    transition-duration: 0.3s;
    transition-property: background;
    transition-timing-function: ease;
    vertical-align: text-bottom;
    -webkit-font-smoothing: antialiased;
  }
</style>
