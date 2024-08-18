<script lang="ts" setup>
definePageMeta({
  breadcrumb: "Имя задачи после запроса",
});

const route = useRoute();
</script>

<template>
  <p>Page of task {{ route.params.slug }}</p>
</template>

<style lang="scss" scoped></style>
