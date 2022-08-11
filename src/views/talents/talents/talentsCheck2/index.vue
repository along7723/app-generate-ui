<template>
  <div class="app-container">
    <talents :checkLevel=2></talents>
  </div>

</template>

<script>

  import talents from '../index'

  export default {
    name: 'talentsCheck2',
    components: {
      talents
    }
  }
</script>
