<script lang="ts" setup>
definePageMeta({
  breadcrumb: "Имя задачи после запроса",
});

const route = useRoute();
</script>

<template>
  <h1 class="title">Страница задачи {{ route.params.slug }}</h1>
</template>

<style lang="scss" scoped>
.title {
  @include font-gothampro-bold;
  font-size: 24px;
}
</style>
