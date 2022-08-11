<template>
  <div class="app-container">
<!--    <MyUser :forceQueryOrAddData="{state: 'NORMAL'}"/>-->
    <MyUser />
  </div>

</template>

<script>
  import MyUser from './index'

  export default {
    components: {
      MyUser
    },
    props: {
      selectMode: {
        type: Boolean,
        default: false,
        required: false
      },
      selectModeCols: {
        type: Number,
        default: 3,
        required: false
      }
    }, data() {
      return {}
    }

  }
</script>
