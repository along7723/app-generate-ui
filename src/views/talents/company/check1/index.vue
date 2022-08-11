<template>
  <div class="app-container">
    <company :checkLevel=1></company>
  </div>

</template>

<script>

  import company from '../index'

  export default {
    name: 'companyCheck1',
    components: {
      company
    }
  }
</script>
