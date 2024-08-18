<template>
  <div class="layout">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@import "assets/styles/index.scss";

.layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  min-height: 100vh;
}
</style>
