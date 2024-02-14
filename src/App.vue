<template>
  <div class="h-screen">
    <navigator />
    <div class="flex items-center layout-dimensions m-auto">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

