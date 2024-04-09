<template>
  <div v-html="content"></div>
</template>
<script lang="ts" setup>
import { type BundledLanguage, codeToHtml } from "shiki";

const content = ref("");
const props = defineProps<{
  code: string | undefined;
  lang: BundledLanguage;
}>();

async function generate(code: string, lang: BundledLanguage) {
  const html = await codeToHtml(code, {
    lang,
    theme: "catppuccin-frappe"
  });
  return html;
}

async function createContent() {
  if (!props.code) return
  content.value = await generate(props.code, props.lang);
}

watch(() => props.code, createContent, { immediate: true })
</script>
<style>
pre {
  overflow: auto;
  padding: 20px;
  border-radius: 8px;
}
</style>
