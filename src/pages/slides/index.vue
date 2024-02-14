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
<script lang="ts" setup>
import slideLeft from '../../animations/slide-left.css?raw'
import slideRigth from '../../animations/slide-right.css?raw'
import slideTop from '../../animations/slide-top.css?raw'
import slideBottom from '../../animations/slide-bottom.css?raw'
</script>
<style >
@import url("../../animations/slide-left.css");
@import url("../../animations/slide-right.css");
@import url("../../animations/slide-top.css");
@import url("../../animations/slide-bottom.css");
</style>
