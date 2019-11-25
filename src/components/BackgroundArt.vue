<template>

  <div class="  position: absolute;">
    <g-image
        alt="Logo image"
        class="logo__image_dark logo_back"
        src="~/assets/images/Logo_black.png"
      />
      <g-image
        alt="Logo image"
        class="logo__image_light logo_back"
        src="~/assets/images/Logo_white.png"
      />

      <!-- <div v-for="index in 5" :key="index">
          <Lexis v-for="lexis in words" :key="lexis" :lexis="lexis"/>
        </div> -->
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

.logo_back {
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-42%, -50%);

  height: 100px;
  width: auto;
}

</style>