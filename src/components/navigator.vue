<template>
    <nav class="nav-main">
        <div class="nav-container">
            <router-link class="mr-5" :to="{ path: '/' }">Home</router-link>
            <router-link :to="{ path: '/slides' }">Slides</router-link>
        </div>
    </nav>
</template>

<style scoped>
.nav-main,
.nav-container {
    height: 60px;
}

.nav-main {
    box-shadow: 0px 2px 4px rgb(0, 0, 0, 0.1);
}

.nav-container {
    max-width: var(--layout-max-width);
    padding: var(--layout-padding);
    margin: auto;
    display: flex;
    align-items: center;
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
</style>
