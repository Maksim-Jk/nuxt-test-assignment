<script setup>
definePageMeta({
  breadcrumb: 'Все задачи'
})
const router = useRouter()

router.push('/all-tasks/profile')
</script>

<template>
  <div>
    <h1>Home</h1>
  </div>
</template>
