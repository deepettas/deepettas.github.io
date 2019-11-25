<template>

  <div >
    <g-image
        alt="Logo image"
        class="logo_background logo_background__image_dark"
        src="~/assets/images/Logo_words_black.png"
      />
      <g-image
        alt="Logo image"
        class="logo_background logo_background__image_light"
        src="~/assets/images/Logo_words_white.png"
      />
      
  </div>

</template>

<script>
import Lexis from '~/components/Lexis.vue'
import Lexis_words from '~/data/lexis.json';

export default {
components:{
    Lexis,
    Lexis_words
},
data() {
  return {
    words: Lexis_words
  }
  },

};
</script>


<style lang="scss">
.logo_background {
  
  position: absolute;
  top: 42%;
  left: 46%;
  transform: translate(-42%, -46%);

  height: 200px;
  width: auto;
  &__image_dark {
		display: var(--hide-dark);
  };

	&__image_light {
    display: var(--hide-light);
    z-index: 999;

	}
  
}




</style>