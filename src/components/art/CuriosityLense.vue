<template>
  <!-- This demo is inspired by the awesome nurturedigital website created by Bryan James. You can view it at http://nurturedigital.com -->

  <div class="wrapper full-size">
    <!-- This div handle the background color -->
    <div class="mask-bg-color full-size"></div>
    <!-- This div  wrap all other elements with blend-mode multiply apply -->
    <div class="blend-multiply full-size">
      <!-- This div handle the background element (could be an image, a video or in that case a gif) -->
      <div class="animated-bg full-size"></div>
      <!-- This div wrap the masked element with blend-mode screen apply and background-color set as #ffffff = white background -->
      <BackgroundArt />

      <div class="blend-screen element-mask full-size">
        <!-- This span display the masked element-->
        <span id="circle" class="circle-follow"></span>
        <a href='about'>
        <div class="div_link">
        </div>
        </a>
      </div>
    </div>
  </div>

</template>



<script>
import BackgroundArt from "~/components/art/BackgroundArt.vue";

export default {
  components: {
    BackgroundArt
  },
  mounted() {
    // set the variables
    var timer;
    var mouseX = 0,
      mouseY = 0;
    var xp = 0,
      yp = 0;
    var circle = document.querySelector("#circle");

    function mouseStopped() {
      // if mouse stop moving remove class moving
      // it will hide the circle with opacity transition
      circle.classList.remove("moving");
    }

    document.addEventListener("mousemove", function(e) {
      // if mouse start moving add class moving
      // it will show the circle with opacity transition
      circle.classList.add("moving");
      // get the mouse position minus 160px to center the circle
      mouseX = e.pageX - 160;
      mouseY = e.pageY - 160;
      // if mouse stop moving clear timer and call mouseStopped function
      clearTimeout(timer);
      timer = setTimeout(mouseStopped, 3000);
    });

    // set the momentum with setInterval function
    var loop = setInterval(function() {
      // change 12 to alter damping higher is slower
      xp += (mouseX - xp) / 6;
      yp += (mouseY - yp) / 6;
      // circle.css({ left: xp + "px", top: yp + "px" });
      circle.style.left = xp + "px";
      circle.style.top = yp + "px"; //
    }, 30);
  }
};
</script>


<style lang="scss">
.div_link{
  z-index: 100;
  // background-color:aquamarine;
  top: 42%;
  left: 50%;
  transform: translate(-42%, -50%);
  transition: 1s;
  height: 15vh;
  width: 15vw;
  position: absolute;
  cursor: pointer;


}

.notice {
  position: absolute;
  z-index: 10;
  width: 50%;
  left: calc(50% - 25%);
  bottom: 15%;
  text-align: center;
}

.full-size {
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  display: var(--hide-dark);
  transition: color 0.6s, background-color 0.6s display 0.6s;
  transition: 1s;

  @media screen and (max-width: 650px) {
    display: none;
  }
}
.blend-multiply {
  mix-blend-mode: multiply;
}
.blend-screen {
  mix-blend-mode: screen;
}

.mask-bg-color {
  background-color: var(--bg-color);
}
.animated-bg {
  background-image: url("../../assets/gifs/mont-blanc-light.gif");
  background-color: #fff;
  background-position: center;
  -moz-background-size: cover;
  -o-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
}
.element-mask {
  background-color: #fff;
  transition: color 0.6s, background-color 0.6s display 0.6s;

  // opacity: 0.5;
}

.circle-follow {
  position: absolute;
  overflow: hidden;
  background-color: #000000;
  width: 320px;
  height: 320px;
  top: calc(50% - 160px);
  left: calc(50% - 160px);
  -webkit-border-radius: 160px;
  border-radius: 160px;
  -webkit-transition: opacity 0.3s cubic-bezier(0.52, 0.01, 0.16, 1);
  transition: opacity 0.3s cubic-bezier(0.52, 0.01, 0.16, 1);
  opacity: 0;
}

.circle-follow.moving {
  opacity: 1;
}

/* hack to detect ie11 and above - blend mode not supported */
_:-ms-fullscreen,
:root .letter-mask {
  background-color: transparent;
}
_:-ms-fullscreen,
:root .animated-bg {
  opacity: 0.2;
}
_:-ms-fullscreen,
:root .circle-follow {
  background-color: #ffffff;
  opacity: 0.2;
}
</style>