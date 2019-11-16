<template>
  <Layout :show-logo="true">
    <!-- Author intro
    <Author :show-title="true" /> -->
    
    <!-- List posts -->
    <!-- <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div> -->
    <div class="frame_container_post_menu">
      <p>
        This is my space
      </p>

      <div >
        <Sidemenu/> 
      </div>
      
    </div>
    <g-link class= "entries_link" to="/entries/">Enter the space</g-link>
    <g-link class= "entries_link" to="/self/"> Check me out</g-link>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
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

<script>
import PostCard from '~/components/PostCard.vue'
import Sidemenu from '~/components/Sidemenu.vue'
export default {
  components: {
    PostCard,
    Sidemenu
  },
  metaInfo: {
    title: 'Portal'
  }
}
</script>

<style lang="scss">
.entries_link{
  text-decoration: none;
  color: var(--body-color)!important;
  width: 100%;
  font-size: .7em;
  font-family: HelveticaNowText-Medium;
}
.frame_container_post_menu{
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center; /* for centering 3 blocks in the center */
  justify-content: space-between;
}

</style>
