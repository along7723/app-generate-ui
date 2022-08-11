import store from '@/store'
import { Message } from 'element-ui'
import { Notification } from 'element-ui'

// var url = 'ws://127.0.0.1:8000/sys/manage/websocket/message'
const url = process.env.VUE_APP_SOCKET_API
let ws
let tt
let lockReconnect = false // 避免重复连接
let userId = null // 缓存中取出客户端id

const websocket = {
  Init: function(userIdInput) {
    userId = userIdInput
    // store.dispatch('message/addMessage', '33333333')
    //   .then(() => {
    //     console.log('添加消息成功')
    //     console.log('store message', store.state.message.msgs)
    //   })
    //   .catch(() => {
    //     console.log('添加消息失败')
    //   })
    if ('WebSocket' in window) {
      ws = new WebSocket(url)
    } else {
      console.log('您的浏览器不支持 WebSocket!')
      return
    }

    ws.onmessage = function(e) {
      console.log('接收消息:' + e.data)
      messageHandle(e.data)
    }

    ws.onclose = function() {
      console.log('消息服务器连接已关闭')
      heartCheck.stop()
      Message({
        message: '消息服务器连接已关闭',
        type: 'warning'
      })
      store.dispatch('message/setConnected', false)
      reconnect()
    }

    ws.onopen = function() {
      console.log('连接成功')
      Message({
        message: '消息服务器连接成功',
        type: 'success'
      })
      store.dispatch('message/setConnected', true)
      heartCheck.start()
    }

    ws.onerror = function(e) {
      console.log('数据传输发生错误')
      Message({
        message: '数据传输发生错误',
        type: 'error'
      })
      // reconnect(userId)
    }
  },
  Close: function() {
    userId = null
    heartCheck && heartCheck.stop()
    ws && ws.close()
  },
  Send: function(message, type) {
    const data = {
      sender: userId,
      message: message,
      type: type
    }
    const dataStr = JSON.stringify(data)
    console.log('发送消息：' + dataStr)
    ws.send(dataStr)
  },
  getWebSocket() {
    return ws
  },
  getStatus() {
    if (ws.readyState === 0) {
      return '未连接'
    } else if (ws.readyState === 1) {
      return '已连接'
    } else if (ws.readyState === 2) {
      return '连接正在关闭'
    } else if (ws.readyState === 3) {
      return '连接已关闭'
    }
  }
}

export default websocket

/**
 * 消息点击
 * @param message
 */
function messageClick(message) {
  console.log('点击：' + message)
}

/**
 * 消息处理
 * 根据消息标识做不同的处理
 * @param message
 */
function messageHandle(message) {
  const msg = JSON.parse(message)
  switch (msg.type) {
    case 'command':
      console.log('指令消息类型')
      break
    case 'inform':
      console.log('通知')
      break
    case 'heartbeat':
      console.log('心跳消息')

      Notification({
        title: 'title',
        message: msg.message,
        duration: 6000,
        position: 'bottom-right',
        customClass: 'danger-message',
        onClick: function() {
          messageClick(e.data)
        }
      })
      break
    default:
      console.log('未知消息类型')
  }
}

/**
 * 重新连接
 */
function reconnect() {
  if (lockReconnect) {
    return
  }

  lockReconnect = true
  // 没连接上会一直重连，设置延迟避免请求过多
  tt && clearTimeout(tt)
  if (!userId) return
  tt = setTimeout(function() {
    console.log('5秒后执行断线重连...')
    websocket.Init(userId)
    lockReconnect = false
  }, 5000)
}

/**
 * 心跳检测
 * @type {{stop: heartCheck.stop, serverTimeoutObj: null, timeoutObj: null, start: heartCheck.start, timeout: number}}
 */
var heartCheck = {
  timeout: 1000 * 60 * 2,
  timeoutObj: null,
  serverTimeoutObj: null,
  start: function() {
    this.timeoutObj && clearInterval(this.timeoutObj)
    this.timeoutObj = setInterval(function() {
      websocket.Send('from client', 'heartbeat')
    }, this.timeout)
  },
  stop: function() {
    this.timeoutObj && clearInterval(this.timeoutObj)
  }
}
