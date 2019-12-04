<template>
  <Layout :show-logo="false" :show-about="false" :show-entries="false">
    <!-- Author intro
    <Author :show-title="true" /> -->
    
    <!-- List posts -->
    
    <div class="back-container" style=" height: 100%">
    
      <CuriosityLense/>
      <WhiteArt/>
    </div>
    <div class="flex-container" >
      <div style="flex: 4 ;">
        <!-- TODO: ADD mobile logo -->
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
import PostCard from '~/components/PostCard.vue'
import Sidemenu from '~/components/Sidemenu.vue'
import CuriosityLense from '~/components/CuriosityLense.vue'
import WhiteArt from '~/components/WhiteArt.vue'

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
