<template>
  <Layout :show-logo="false" :show-about="false" :show-entries="false">
    <!-- Author intro
    <Author :show-title="true" /> -->
    
    <!-- List posts -->
    
    <div class="flex-container" style="height: 50em">
    
      <div style= "flex: 5">
        <CuriosityLense/>
        <!-- <div v-for="index in 5" :key="index">
          <Lexis v-for="lexis in words" :key="lexis" :lexis="lexis"/>
        </div> -->

        
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
import Lexis from '~/components/Lexis.vue'
import LightPanel from '~/components/LightPanel.vue'
import CuriosityLense from '~/components/CuriosityLense.vue'
import Lexis_words from '~/data/lexis.json';

export default {
  components: {
    PostCard,
    Sidemenu,
    Lexis,
    LightPanel,
    CuriosityLense,

  },
  metaInfo: {
    title: 'Portal'
  },
  data() {
  return {
    words: Lexis_words
  }
  },
  mounted() {
    console.log(Lexis_words)
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
