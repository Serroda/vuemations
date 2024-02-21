<template>
  <div class="w-100%">
    <custom-section title="Normal fade" subtitle="Code CSS" :code="fadeNormal" animation-name="fade-normal" lang="css" />
    <custom-section title="Fade from left" subtitle="Code CSS" :duration="1000" :code="fadeLeft"
      animation-name="fade-left" lang="css" />
  </div>
</template>

<script setup lang="ts">
const fadeNormalPromise = await useFetch("/api/files/fade-normal.css")
const fadeLeftPromise = await useFetch("/api/files/fade-left.css")
const fadeNormal = (fadeNormalPromise.data.value) as string
const fadeLeft = (fadeLeftPromise.data.value) as string
</script>
