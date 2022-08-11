<template>
  <talents :forceQueryOrAddData="{isExpert:'1'}"/>
</template>

<script>
  import talents from '@/views/talents/talentsFormal'

  export default {
    name: 'ExpertTalents',
    components: {
      talents
    }
  }
</script>

<style scoped>

</style>
