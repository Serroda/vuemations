<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const animationsStyle = await useFetch("/api/files/all")
onMounted(() => {
  const s = document.createElement("style")
  s.appendChild(document.createTextNode(animationsStyle.data.value as string))
  document.head.appendChild(s)
})
</script>
