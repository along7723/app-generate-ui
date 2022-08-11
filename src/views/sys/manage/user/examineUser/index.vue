<template>
  <div class="app-container">
    <MyUser :examineUserRowActions="rowActions" :forceQueryOrAddData="{state: 'REGISTER'}"/>
  </div>

</template>

<script>
  import MyUser from '../../user'

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
      return {
        rowActions: [{
          action: 'examineUser',
          name: '通过审核',
          type: 'danger',
          icon: 'fa fa-coffee'
        }, {
          action: 'noExamineUser',
          name: '不通过审核',
          type: 'danger',
          icon: 'fa fa-lock'
        }]
      }
    }

  }
</script>
