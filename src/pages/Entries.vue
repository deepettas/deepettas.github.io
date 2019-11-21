<template>
  <Layout :show-logo="true">
    <!-- Author intro
    <Author :show-title="true" />
     -->
    <!-- List posts -->
    <!-- <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div> -->
      <h2 class="entry__title"> all neural outputs </h2>

      <div class="flex-container">

        <div style="flex: 4" class="posts">
          <EntryCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
        </div>

        <div style="flex: 1" >
          <Sidemenu/> 
        </div> 
      </div>
  </Layout>
</template>


<script>
import EntryCard from '~/components/EntryCard.vue'
import Sidemenu from '~/components/Sidemenu.vue'
export default {
  components: {
    EntryCard,
    Sidemenu
  },
  metaInfo: {
    title: 'Entries'
  }
}
</script>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        index
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>
