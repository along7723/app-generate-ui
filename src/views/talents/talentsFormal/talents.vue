<template>
  <talents :forceQueryOrAddData="{isExpert:'0'}"/>
</template>

<script>
  import talents from '@/views/talents/talentsFormal'

  export default {
    name: 'NormalTalents',
    components: {
      talents
    }
  }
</script>

<style scoped>

</style>
