import { Message } from 'element-ui'

const settings = require('@/settings.js')

export default class WebSocketClient {

  /**
   * 单例
   */
  static instance = null

  static get getInstance() {
    if (!this.instance) {
      console.log('WebSocket getInstance create')
      this.instance = new WebSocketClient()
    } else {
      console.log('WebSocket getInstance get')
    }
    return this.instance
  }

  // 存储用户ID
  userId = null

  // 和服务端连接的socket对象
  ws = null
  websocketUrl = process.env.VUE_APP_SOCKET_API
  // websocketUrl = 'ws://192.168.1.131:8002/sys/manage/websocket/message'

  // 存储回调函数
  onMessageCallback = null
  onStatusCallback = null

  // 标识是否连接成功
  connected = false
  // 是否注册成功
  registed = false

  // 记录重试的次数
  sendRetryCount = 0

  // 重新连接尝试的次数
  connectRetryCount = 0

  unreadMessageData = null

  //  定义连接服务器的方法
  connect() {
    console.log('WebSocket connecting...')
    if (!settings.messageEnable) {
      console.log('WebSocket 功能已关闭')
      return
    }

    if (!this.userId) {
      console.log('WebSocket 用户还未登录')
      return
    }

    console.log('WebSocket连接服务器 websocketUrl', this.websocketUrl)
    // 连接服务器
    if (!window.WebSocket) {
      return console.log('您的浏览器不支持WebSocket')
    }
    this.ws = new WebSocket(this.websocketUrl)
    // 连接成功的事件
    this.ws.onopen = () => {
      console.log('WebSocket连接服务端成功')
      this.connected = true
      // 重置重新连接的次数
      this.connectRetryCount = 0
      this.register()
      this.startHeartbeat()
    }
    //   // 1.连接服务端失败
    //   // 2.当连接成功之后, 服务器关闭的情况(连接失败重连)
    this.ws.onclose = () => {
      console.log('WebSocket连接服务端失败', this.connectRetryCount)
      this.connected = false
      this.connectRetryCount++
      setTimeout(() => {
        this.connect()
      }, 500 * this.connectRetryCount)
    }
    // 得到服务端发送过来的数据
    this.ws.onmessage = msg => {
      // console.log('WebSocket从服务端获取到了数据' + msg.data)
      const message = JSON.parse(msg.data)

      switch (message.command) {
        case 'register':
          this.send('get unreadMessage', 'unreadMessage')
          break
        case 'heartbeat':
          break
        case 'unreadMessage':
          this.unreadMessageData = message
        default:
          if (this.onMessageCallback) {
            this.onMessageCallback.call(this, message)
            this.unreadMessageData = null
          }
      }

    }
    this.ws.onerror = () => {
      console.log('WebSocket数据传输发生错误')
    }
  }

  // 回调函数的注册
  registerMessageCallback(callBack) {
    // console.log('WebSocket消息回调函数的注册', callBack)
    this.onMessageCallback = callBack
    if (this.unreadMessageData !== null) {
      this.onMessageCallback.call(this, this.unreadMessageData)
      this.unreadMessageData = null
    }
  }

  // 取消某一个回调函数
  unRegisterMessageCallback(callBack) {
    // console.log('WebSocket取消某一个回调函数', callBack)
    this.onMessageCallback = null
  }

  registerStatusCallback(callBack) {
    // console.log('WebSocket状态回调函数的注册', callBack)
    this.onStatusCallback = callBack
  }

  // 发送数据的方法
  send(data, command) {
    // 判断此时此刻有没有连接成功
    if (this.connected) {
      this.sendRetryCount = 0

      const message = {
        sender: this.userId,
        data: data,
        command: command
      }
      const messageStr = JSON.stringify(message)
      // console.log('发送消息：' + messageStr)

      this.ws.send(messageStr)
    } else {
      this.sendRetryCount++
      setTimeout(() => {
        this.send(data, command)
      }, this.sendRetryCount * 500)
    }
  }

  close() {
    console.log('WebSocket执行关闭')
    this.stopHeartbeat()
    if (this.connected) {
      this.connected = false
      this.ws && this.ws.close()
    }
  }

  /**
   * 向服务器端注册
   */
  register() {
    console.log('WebSocket register')
    this.send(this.userId, 'register')
    this.registed = true

    if (this.onStatusCallback) {
      this.onStatusCallback.call(this, this.registed)
    }
  }

  isRegisted() {
    return this.registed
  }

  /**
   * 心跳检测
   * @type {{stop: heartCheck.stop, serverTimeoutObj: null, timeoutObj: null, start: heartCheck.start, timeout: number}}
   */
  timeout = 1000 * 60 * 2
  // timeout = 1000 * 10
  timeoutObj = null

  startHeartbeat() {
    console.log('WebSocket startHeartbeat')
    this.timeoutObj && clearInterval(this.timeoutObj)
    this.timeoutObj = setInterval(() => {
      this.send('from client', 'heartbeat')
    }, this.timeout)
  }

  stopHeartbeat() {
    console.log('WebSocket stopHeartbeat')
    this.timeoutObj && clearInterval(this.timeoutObj)
  }

}
