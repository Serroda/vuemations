<template>
  <div class="w-100%">
    <custom-section title="Normal fade" subtitle="Code CSS" :code="fadeNormal" animation-name="fade-normal" lang="css" />
    <custom-section title="Fade from left" subtitle="Code CSS" :duration="1000" :code="fadeLeft"
      animation-name="fade-left" lang="css" />
  </div>
</template>
<script lang="ts" setup>
import fadeNormal from '../../animations/fade-normal.css?raw'
import fadeLeft from '../../animations/fade-left.css?raw'
</script>
<style >
@import url("../../animations/fade-normal.css");
@import url("../../animations/fade-left.css");
</style>
