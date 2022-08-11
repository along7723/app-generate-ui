<template>
  <div class="app-container">
    <talentPolicy readonly-mode useCustomDetailView singleDataMode :forceQueryOrAddData="{status: '2'}"/>

  </div>

</template>

<script>
  import talentPolicy from '../talentPolicy'

  export default {
    name: 'talentPolicyInfo',
    components: { talentPolicy },
    props: {},
    data() {
      return {}
    },
    created() {
    },
    methods: {}
  }
</script>
