<template>
  <div class="w-100%">
    <custom-section title="Slide from left" subtitle="Code CSS" :code="slideLeft" animation-name="slide-left"
      lang="css" />
    <custom-section title="Slide from right" subtitle="Code CSS" :code="slideRigth" animation-name="slide-right"
      lang="css" />
    <custom-section title="Slide from top" subtitle="Code CSS" :code="slideTop" animation-name="slide-top" lang="css" />
    <custom-section title="Slide from bottom" subtitle="Code CSS" :code="slideBottom" animation-name="slide-bottom"
      lang="css" />
  </div>
</template>
<script setup lang="ts">

const slideLeftPromise = await useFetch("/api/files/slide-left.css")
const slideRightPromise = await useFetch("/api/files/slide-right.css")
const slideTopPromise = await useFetch("/api/files/slide-top.css")
const slideBottomPromise = await useFetch("/api/files/slide-bottom.css")

const slideLeft = slideLeftPromise.data.value as string;
const slideRigth = slideRightPromise.data.value as string;
const slideTop = slideTopPromise.data.value as string;
const slideBottom = slideBottomPromise.data.value as string; 
</script>
