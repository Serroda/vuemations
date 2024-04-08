<!-- TODO -->
<template>
  <div class="pb-30px pt-30px">
    <h1 :id="animationName" class="mt-0px custom-scroll-margin">
      <a :href="'#' + animationName">
        {{ title }}
      </a>
    </h1>
    <div class="animation-container relative h-80px mb-16px w-100% overflow-hidden">
      <slot name="svg"></slot>
    </div>
    <button class="primary" @click="animationEnable = !animationEnable">ANIMATE</button>
    <slot name="before-code-block" />
    <!-- <h3 class="mt-40px"> Code SVG</h3> -->
    <!-- <code-block lang="html" :code></code-block> -->
    <!-- <button @click="copyCode">COPY</button> -->
  </div>
</template>
<script lang="ts" setup>
const animationEnable = ref(true)
const props = defineProps<{
  title: string,
  animationName: string,
  duration?: number
}>()

const promiseCode = await useFetch("/api/files/" + props.animationName + ".css")
const code = promiseCode.data.value as string

function copyCode() {
  if (navigator.clipboard) navigator.clipboard.writeText(code)
}
</script>
