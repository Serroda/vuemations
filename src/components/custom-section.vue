<template>
  <div class="pt-20px mb-30px">
    <h1 class="mt-0"> {{ title }}</h1>
    <div class="animation-container relative h-80px mb-16px overflow-hidden">
      <transition :name="animationName" :duration>
        <div class="p-20px" v-if="animationEnable">
          <p class="m-0 truncate"> This text is for example</p>
        </div>
      </transition>
    </div>
    <button class="primary" @click="animationEnable = !animationEnable">ANIMATE</button>
    <h3 class="mt-40px"> {{ subtitle }}</h3>
    <code-block :lang :code></code-block>
    <button @click="copyCode">COPY</button>
  </div>
</template>
<script lang="ts" setup>
import { BundledLanguage } from 'shiki/langs';
const animationEnable = ref(true)
const props = defineProps<{
  title: string,
  subtitle: string,
  code: string,
  animationName: string,
  lang: BundledLanguage,
  duration?: number
}>()
function copyCode() {
  if (navigator.clipboard) navigator.clipboard.writeText(props.code)
}
</script>
