<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot/>
  </component>
</template>

<script>
  import { isExternal } from '@/utils/validate'

  export default {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    computed: {
      isExternal() {
        // console.log('this.to', this.to)
        return isExternal(this.to)
      },
      type() {
        if (this.isExternal) {
          return 'a'
        }
        return 'router-link'
      }
    },
    methods: {
      linkProps(to) {
        if (this.isExternal) {
          return {
            href: to,
            target: '_blank',
            rel: 'noopener'
          }
        } else if (to.indexOf('_blank') !== -1) {
          return {
            to: to,
            target: '_blank'
          }
        }
        return {
          to: to
        }
      }
    }
  }
</script>
