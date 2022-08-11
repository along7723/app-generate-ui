<template>
  <div id="app">
    <!--    <router-view v-watermark="{text:'雷忠诚-雷忠诚-雷忠诚',text2:'431103198601096979'}" />-->
    <router-view/>
  </div>
</template>

<script>
  const settings = require('@/settings.js')

  export default {
    name: 'App',
    data() {
      return {
        userId: null
      }
    },
    created() {
      /**
       * 初始化尝试连接一次websocket
       */
      if (settings.messageEnable && this.$store.getters.name) {
        this.connectWebsocket()
      }
    },
    methods: {
      /**
       * 连接websocket
       */
      connectWebsocket() {
        this.userId = this.$store.getters.user.userId
        this.$socket.userId = this.userId
        this.$socket.connect()
      },
      /**
       * 关闭websocket
       */
      closeWebsocket() {
        this.userId = null
        this.$socket.userId = this.userId
        this.$socket.close()
      }
    },
    computed: {
      isLogined() {
        // 需要监听的数据
        return this.$store.getters.name
      }
    },
    watch: {
      /**
       * 监听登录状态
       * @param newVal
       * @param oldVal
       */
      isLogined(newVal, oldVal) {

        if (!settings.messageEnable) {
          return
        }

        if (newVal) {
          this.connectWebsocket()
        } else {
          this.closeWebsocket()
        }
      }
    }
  }
</script>
