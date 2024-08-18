<script lang="ts" setup>
definePageMeta({
  breadcrumb: 'Профиль'
})

const {
  data,
  error
} = useLazyFetch<ApiResponse>('http://localhost:3001/api')
</script>

<template>
  <ProfileBlock v-if="data" :data="data.response.data.profile"/>
</template>

<style scoped>

</style>