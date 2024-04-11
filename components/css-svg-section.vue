<!-- TODO -->
<template>
  <div class="pb-30px pt-30px">
    <h1 :id="animationName" class="mt-0px custom-scroll-margin">
      <a :href="'#' + animationName">
        {{ title }}
      </a>
    </h1>
    <div :class="containerClass" class="animation-container relative h-80px mb-16px w-100% overflow-hidden">
      <slot name="svg"></slot>
    </div>
    <button class="primary" @click="animationEnable = !animationEnable">ANIMATE</button>

    <slot name="before-code-block" />

    <h3 class="mt-40px"> Code CSS</h3>
    <code-block lang="css" :code="codeCss"></code-block>
    <button @click="copyCode(codeCss)">COPY</button>

    <h3 class="mt-40px"> Code SVG</h3>
    <code-block lang="xml" :code="codeSvg"></code-block>
    <button @click="copyCode(codeSvg)">COPY</button>
  </div>
</template>
<script lang="ts" setup>
const slots = useSlots()
const animationEnable = ref(false)
const codeSvg = ref("")
const props = defineProps<{
  title: string,
  animationName: string,
}>()

const containerClass = computed(() => `${props.animationName} ${animationEnable.value ? 'active' : ''}`);
const promiseCodeCss = await useFetch("/api/files/" + props.animationName + ".css")
const codeCss = promiseCodeCss.data.value as string

function copyCode(code: string | undefined) {
  if (navigator.clipboard && code) navigator.clipboard.writeText(code)
}

onMounted(() => {
  if (!slots.svg) return
  codeSvg.value = slots.svg ? slots.svg()[0].el?.innerHTML : ''
})

</script>
