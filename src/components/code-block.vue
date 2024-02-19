<template>
  <div v-html="content"></div>
</template>
<script lang="ts" setup>
import { BundledLanguage } from 'shiki/langs';

const content = ref("");
const props = defineProps<{
  code: string;
  lang: BundledLanguage;
}>();
const { generate } = useCodeGenerator();
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
