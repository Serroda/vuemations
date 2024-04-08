<template>
  <div>
    <nav class="nav-main">
      <div class="nav-container">
        <router-link :to="{ path: '/' }">Home</router-link>
        <router-link :to="{ path: '/slides' }">Slides</router-link>
        <router-link :to="{ path: '/fades' }">Fades</router-link>
        <router-link :to="{ path: '/drawings' }">Drawings</router-link>
      </div>
    </nav>
    <div class="flex items-center layout-dimensions m-auto height-minus-nav">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.nav-main,
.nav-container {
  height: var(--nav-height);
}

.nav-main {
  box-shadow: 0px 2px 4px rgb(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 1;
  background: var(--color-background);
}

.nav-container {
  max-width: var(--layout-max-width);
  padding: var(--layout-padding);
  margin: auto;
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-main a {
  font-size: 1rem;
  color: hsl(0, 0%, 30%);
  font-weight: 500;
  text-decoration: none;

  letter-spacing: 1px;
  transition: color 0.2s;
}

.nav-main a:hover {
  color: var(--color-primary);
}

.height-minus-nav {
  padding-top: var(--nav-height);
}
</style>
