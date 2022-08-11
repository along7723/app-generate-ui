<template>
  <div class="app-container">
    <talents :checkLevel=1 :forceQueryOrAddData="{}"/>
  </div>

</template>

<script>

  // import talents from '../index'
  import talents from '@/views/talents/talents'

  export default {
    name: 'talentsCheck1',
    components: {
      talents
    }
  }
</script>
