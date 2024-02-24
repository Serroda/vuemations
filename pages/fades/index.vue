<template>
  <div class="w-100%">
    <custom-section title="Normal fade" animation-name="fade-normal" />
    <custom-section title="Fade from left" :duration="1000" animation-name="fade-left">
      <template #['before-code-block']>
        <h3 class="mb-16px mt-40px c-red-600">Warning</h3>
        <p>To make it work add the animation duration to the :duration parameter of the Transition tag. In this case
          :duration = "1000"</p>
        <a href="https://vuejs.org/guide/built-ins/transition#nested-transitions-and-explicit-transition-durations"
          target="_blank">How to do</a>
      </template>
    </custom-section>
    <custom-section title="Fade from right" :duration="1000" animation-name="fade-right">
      <template #['before-code-block']>
        <h3 class="mb-16px mt-40px c-red-600">Warning</h3>
        <p>To make it work add the animation duration to the :duration parameter of the Transition tag. In this case
          :duration = "1000"</p>
        <a href="https://vuejs.org/guide/built-ins/transition#nested-transitions-and-explicit-transition-durations"
          target="_blank">How to do</a>
      </template>
    </custom-section>
    <custom-section title="Fade from top" :duration="1000" animation-name="fade-top">
      <template #['before-code-block']>
        <h3 class="mb-16px mt-40px c-red-600">Warning</h3>
        <p>To make it work add the animation duration to the :duration parameter of the Transition tag. In this case
          :duration = "1000"</p>
        <a href="https://vuejs.org/guide/built-ins/transition#nested-transitions-and-explicit-transition-durations"
          target="_blank">How to do</a>
      </template>
    </custom-section>
    <custom-section title="Fade from bottom" :duration="1000" animation-name="fade-bottom">
      <template #['before-code-block']>
        <h3 class="mb-16px mt-40px c-red-600">Warning</h3>
        <p>To make it work add the animation duration to the :duration parameter of the Transition tag. In this case
          :duration = "1000"</p>
        <a href="https://vuejs.org/guide/built-ins/transition#nested-transitions-and-explicit-transition-durations"
          target="_blank">How to do</a>
      </template>
    </custom-section>
  </div>
</template>

