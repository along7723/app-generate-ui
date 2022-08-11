<template>
  <talents :forceQueryOrAddData="{}" :readonlyMode='true'/>
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
