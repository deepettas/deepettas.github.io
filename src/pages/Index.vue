<template>
  <Layout :show-logo="false" :show-about="false" :show-entries="false">

    
    <div class="flex-container" style=" height: 100%">
    
      <div style= "flex: 5">
        <CuriosityLense/>
        <WhiteArt/>

      </div>

      <div style="flex: 1">
        <Sidemenu/> 
      </div>      
      
    </div>
    
<!-- 
    <g-link class= "entries_link" to="/entries/">Enter the space</g-link>
    <g-link class= "entries_link" to="/self/"> Check me out</g-link> -->

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
import PostCard from '~/components/content/PostCard.vue'
import Sidemenu from '~/components/Sidemenu.vue'
import CuriosityLense from '~/components/art/CuriosityLense.vue'
import WhiteArt from '~/components/art/WhiteArt.vue'

export default {
  components: {
    PostCard,
    Sidemenu,
    CuriosityLense,
    WhiteArt
  },
  metaInfo: {
    title: 'Portal'
  },
  
  mounted() {
  }
}
</script>

<style lang="scss">
.entries_link{
  text-decoration: none;
  color: var(--body-color)!important;
  width: 100%;
  font-size: .7em;
  // font-family: HelveticaNowText-Medium;
}


</style>
