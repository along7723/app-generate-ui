<template>
  <div class="app-container">
    <company :checkLevel=2></company>
  </div>

</template>

<script>

  import company from '../index'

  export default {
    name: 'companyCheck2',
    components: {
      company
    }
  }
</script>
