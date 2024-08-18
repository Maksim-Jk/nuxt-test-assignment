<script lang="ts" setup></script>

<template>
  <div class="container">
    <NuxtLoadingIndicator class="nuxt-loading-indicator"/>
    <TheBreadcrumb />
    <slot />
  </div>
</template>

<style lang="scss">
.nuxt-loading-indicator{
  background: $primary !important;
}
</style>
