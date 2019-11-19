<template>
  <Layout>

    <h2 class="post__title"> about this space </h2>
    
    <div class="flex-container">
    
      <!-- List about -->
      <div class="about_container  post__content">
        <AboutSection v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      </div>

      <div >
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



<style lang="scss">
.about_container{
  width: 42%;
  @media screen and (max-width: 650px) {
      width: 100%;
      padding-right: 10px;

    }
}
.post {
  margin: 120px 0 50px 120px;
  

  &__title {
    justify-content: center;
    margin: 120px 0 50px 120px;
    
    @media screen and (max-width: 650px) {
      margin: 120px 0 50px 0px ;
      
    }
    

  
  }
  &__content{
    margin: 120px 0 50px 120px;

    @media screen and (max-width: 650px) {
      margin: 120px 0 50px 0px ;
    }
  }  
  
  
 
}
</style>
