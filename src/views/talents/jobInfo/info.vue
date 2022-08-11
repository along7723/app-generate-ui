<template>
  <div class="app-container">
    <jobInfo readonly-mode useCustomDetailView singleDataMode :forceQueryOrAddData="{status: '2'}"/>

  </div>

</template>

<script>
  import jobInfo from '../jobInfo'

  export default {
    name: 'job',
    components: { jobInfo },
    props: {},
    data() {
      return {}
    },
    created() {
    },
    methods: {}
  }
</script>
