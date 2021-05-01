<template>
  <div class="home">
    <qrcanvas />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Qrcanvas from '../components/Qrcanvas.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Qrcanvas
  }
}
</script>
