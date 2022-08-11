<!-- 空页面，负责中转到目标页面 -->
<template>
  <div></div>
</template>

<script>
  export default {
    name: 'refresh',
    data() {
      return {}
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        const query = {}
        Object.assign(query, from.query, to.query)

        vm.$router.replace({ path: from.path, query: query })
      })
    }
  }

</script>
<style scoped>
</style>
