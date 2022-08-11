<template>
  <div>
    <vue-timeline-update v-for="(item, i) in timeLineData"
                         :date="new Date(item.date)"
                         :title=item.title
                         :description=item.description
                         :category=item.category
                         :thumbnail=item.thumbnail
                         :icon=item.icon
                         :color=item.color
                         :is-last=item.isLast
                         @click="contentClick"
                         v-on:click:thumbnail="thumbnailClick"
                         v-on:click:title="titleClick"
    />
  </div>
</template>

<script>

  export default {
    name: 'timeLine',
    components: {},
    props: {
      timeLineData: {
        type: Array,
        default: () => [],
        required: true
      }
    }, created() {

    }, watch: {},
    data() {
      return {}
    },
    created() {
    },
    methods: {
      contentClick(event) {
        console.log('点击了内容：', event)
        //this.$emit("click", event)
      },
      thumbnailClick(event) {
        console.log('点击了图片：', event)
        //this.$emit("click:thumbnail", event)
      },
      titleClick(event) {
        console.log('点击了标题：', event)
        //this.$emit("click:title", event)
      }

    }
  }


</script>
<style scoped>

</style>
