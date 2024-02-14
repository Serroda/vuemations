<template>
  <div class="flex flex-col w-100% mt-100px items-center">
    <img class="img-gradient" :src="img" width="300" />
    <h1 class="text-center mb-16px">Vuemations</h1>
    <p class="m-0">Animation collection for Vue</p>
  </div>
</template>

<script lang="ts" setup>
import img from "~/assets/imgs/vuemations.svg"
</script>

<style scoped>
@keyframes cloud {
  0% {
    filter: drop-shadow(0 0 40px var(--color-primary-dark));
  }

  100% {
    filter: drop-shadow(0 0 20px var(--color-primary-dark));
  }
}

.img-gradient {
  animation-name: cloud;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>
