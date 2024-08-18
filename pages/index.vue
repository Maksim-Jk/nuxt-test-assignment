<script setup>
definePageMeta({
  breadcrumb: "Главная",
});
const router = useRouter();

router.push("/all-tasks/profile");
</script>

<template>
  <div>
    <h1>Home</h1>
  </div>
</template>
