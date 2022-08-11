<template>
  <talents single-data-mode :forceQueryOrAddData="{isExpert:'1'}"/>
</template>

<script>
  import talents from '@/views/talents/talents'

  export default {
    name: 'PersonalFill',
    components: {
      talents
    }
  }
</script>

<style scoped>

</style>
