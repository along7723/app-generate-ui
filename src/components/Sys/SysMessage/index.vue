<template>
  <el-popover
    width="320">
    <div>
      <div
        style="font-size:14px; font-weight: bold;border-bottom:1px solid #eee;padding-bottom:5px;margin-bottom: 5px;">
        消息提醒<span style="font-size: 12px;color:red">[{{messageList.length}}条]</span><span
        style="font-size:10px;color:#999;font-weight: lighter;margin-left:10px;">点击消息可查看详情</span>
      </div>
      <div style="min-height:300px;max-height:500px;overflow-y: auto">
        <div v-for="(msg,index) in messageList" :key="msg.msgId" :class="['message', {'readed':msg&&msg.isRead==='1'}]"
             @click="gotoPage(msg)">
          <div class="message-title">
            <el-tag size="mini" style="margin-right: 3px" :type="msg&&msg.isRead==='1'?'info':''">{{index+1}}</el-tag>
            <el-tag size="mini" :type="msg&&msg.isRead==='1'?'info':''">{{msg&&msg.isRead==='1'?'已读':'未读'}}</el-tag>
            [
            <code-select dic="MessageType" v-model="msg.msgType" :translate-mode="true"></code-select>
            ]
            <div class="message-time">{{msg.sendTime|formatDateTime}}</div>
          </div>
          <div class="message-content">{{msg.msgContent}}</div>
        </div>
        <div v-if="!messageList.length" style="line-height:200px;text-align: center;font-size:16px;color:#999;">
          暂无消息
        </div>
      </div>
    </div>
    <i class="fa fa-bell message-icon " slot="reference">
      <span class="message-num">
        <span v-show="isConnectedServer">{{messageList.length}}</span>
        <i v-show="!isConnectedServer" class="fa fa-spinner fa-spin"></i>
      </span>
    </i>
  </el-popover>
</template>

<script>
  import CodeSelect from '../CodeSelect/index'
  import { readMessage } from './api'

  export default {
    name: 'SysMessage',
    components: { CodeSelect },
    data() {
      return {
        isConnectedServer: false,
        messageList: []
      }
    },
    computed: {},
    watch: {},
    created() {
      this.$socket.registerMessageCallback(this.onMessageReceive)
      this.$socket.registerStatusCallback(this.onStatusChange)
      this.isConnectedServer = this.$socket.isRegisted()
      // this.sendToGetUnreadMessage()
    },
    methods: {
      onMessageReceive(message) {
        // const msg = JSON.parse(message)
        const msg = message
        if (msg.command === 'unreadMessage') {
          const list = msg.data
          this.messageList.push(...list)
        } else if (msg.command === 'newMessage') {
          const message = msg.data
          this.messageList.push(message)
          this.alert(message)
        }
      },
      onStatusChange(registed) {
        this.isConnectedServer = registed
      },
      gotoPage(msg) {
        const id = msg.pkFieldValue
        msg.isRead = '1'
        this.$forceUpdate()

        // 更新消息为已读
        readMessage({ msgId: msg.msgId })

        this.$router.push({
          name: 'notification',
          query: {
            id: id
          }
        })
      },
      alert(message, messageType) {
        messageType = messageType || 'success'
        const that = this
        this.$notify({
          title: message.msgTitle,
          message: message.msgContent,
          duration: 60000,
          position: 'bottom-right',
          customClass: messageType + '-message',
          onClick: function() {
            that.onAlertClick(message)
          }
        })
      },
      onAlertClick: function(message) {
        this.gotoPage(message)
      }
    }
  }
</script>

<style scoped lang="scss">
  ::v-deep .el-tag--mini {
    font-size: 10px;
    height: 15px;
    line-height: 15px;
  }

  .message {
    border-bottom: 1px solid #eee;
    margin-bottom: 8px;
    padding: 3px;
    cursor: pointer;

    &.readed {
      color: #999;
    }

    &:hover {
      background-color: #eee;
    }

    .message-title {
      .message-time {
        float: right;
      }
    }

    .message-content {

    }
  }

  .message-icon {
    position: relative;
  }

  .message-icon .message-num {
    position: absolute;
    display: inline-block;
    left: 16px;
    top: -10px;
    border-radius: 6px;
    font-size: 10px;
    background-color: rgba(255, 0, 0, 0.5);
    color: white;
    padding: 2px 4px;
  }

  .message-icon .message-num.loading {
    left: 12px;
    top: -10px;
    background-color: transparent;
    color: black;
  }


  /**消息弹窗样式重写**/


  .danger-message {
    background-color: red;
    border: none;
  }

  .danger-message .el-notification__title {
    color: white;
  }

  .danger-message .el-notification__content {
    color: white;
  }

  .danger-message .el-notification__closeBtn {
    color: white;
  }

  .waring-message {
    background-color: orange;
    border: none;
  }

  .waring-message .el-notification__title {
    color: white;
  }

  .waring-message .el-notification__content {
    color: white;
  }

  .waring-message .el-notification__closeBtn {
    color: white;
  }

  .success-message {
    background-color: green;
    border: none;
  }

  .success-message .el-notification__title {
    color: white;
  }

  .success-message .el-notification__content {
    color: white;
  }

  .success-message .el-notification__closeBtn {
    color: white;
  }

  .info-message {
    background-color: #26b2ff;
    border: none;
  }

  .info-message .el-notification__title {
    color: white;
  }

  .info-message .el-notification__content {
    color: white;
  }

  .info-message .el-notification__closeBtn {
    color: white;
  }
</style>
