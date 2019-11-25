<template>
  <div class="position: absolute;">
    <g-image
      alt="Logo image"
      class="logo_background logo_background__image_light"
      src="~/assets/images/Logo_words_white.png"
    />
  </div>
</template>

<script>
import Lexis from "~/components/Lexis.vue";

export default {
  components: {
    Lexis
  },
  data() {
    return {};
  }
};
</script>


<style lang="scss">
.logo_background {
  position: absolute;
  top: 42%;
  left: 46%;
  transform: translate(-42%, -46%);

  max-height: 200px;
  height: 20%;
  width: auto;
  &__image_light {
    display: var(--hide-light);
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
		
}
</style>