<template>
  <div class="position: absolute;">
    <g-image
      alt="Logo image"
      class="white_art white_art__image_light"
      src="~/assets/images/Logo_white.png"
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
.white_art {
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-42%, -46%);

  height: 13vh;
  width: auto;
  &__image_light {
    display: var(--hide-light);
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
		
}
</style>