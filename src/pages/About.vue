<template>
  <Layout  :show-entries="true">

    <h2 class="entry__title"> about this space </h2>
    
    <div class="flex-container">
    
      <!-- List about -->
      <div style="flex: 4 ;">
        <AboutSection v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      </div>

      <div style="flex: 1">
        <Sidemenu/> 
      </div>
       
    </div>
    
  </Layout>
</template>

<page-query>
query {
  posts: allAbout(filter: {title: { regex: "^about_contents"}, published: {eq: true}},order: ASC, sortBy: "index") {
    edges {
      node {
        index
        title
        section
        description
        
      }
    }
  }
}
</page-query>


<script>
import AboutSection from '~/components/AboutSection.vue'
import Sidemenu from '~/components/Sidemenu.vue'
export default {
  components: {
    AboutSection,
    Sidemenu
  },
  metaInfo: {
    title: 'Portal'
  }
}
</script>



