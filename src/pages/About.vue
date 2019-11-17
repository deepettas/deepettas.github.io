<template>
  <Layout>

    <h2 class="post__title"> about this space </h2>
    
    <div class="flex-container">
      
      <div class="about_container  post__content">  
        <span style="font-weight:bold"> subneural space</span>
        <p> 
          SubNeural is a Space that enables the storage of Neural output of Dionisis Pettas. It evolves with it's creator, showcasing thought patterns about kyberphilosophy, existentialism & post-futurism.
        </p>
        <span style="font-weight:bold"> subject space</span>
        <p> 
            The zero-dimentional point of reference for this space is Curiosity. The rest is mathematics.
        </p>
      </div>
      <!-- List posts -->
      <div class="posts">
        <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      </div>

      <div >
        <Sidemenu/> 
      </div>
       
      
    </div>
    
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
.about_container{
  width: 42%;
  
  @media screen and (max-width: 650px) {
      width: 100%;
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
