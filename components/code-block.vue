<template>
  <div v-html="content"></div>
</template>
<script lang="ts" setup>
import { type BundledLanguage, codeToHtml } from "shiki";

const content = ref("");
const props = defineProps<{
  code: string;
  lang: BundledLanguage;
}>();

async function generate(code: string, lang: BundledLanguage) {
  const html = await codeToHtml(code, {
    lang,
    theme: "catppuccin-frappe"
  });
  return html;
}

onMounted(async () => {
  content.value = await generate(props.code, props.lang);
});
</script>
<style>
pre {
  overflow: auto;
  padding: 20px;
  border-radius: 8px;
}
</style>
