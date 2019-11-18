<template>
  <div>
    <span style="font-weight:bold" v-html="post.section"  />
    <p v-html="post.description"  />
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">

</style>
