<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  title: 'Vuemations',
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/vuemations/favicon.ico'
    }
  ]
})
useSeoMeta({
  title: 'Vuemations',
  ogTitle: 'Vuemations',
  description: 'Animation collection for Vue 3',
  ogDescription: 'Animation collection for Vue 3',
})

const animationsStyle = await useFetch("/api/files/all")

onMounted(() => {
  const s = document.createElement("style")
  s.appendChild(document.createTextNode(animationsStyle.data.value as string))
  document.head.appendChild(s)
})
</script>
