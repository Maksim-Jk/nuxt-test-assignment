<script lang="ts" setup>
import TasksList from "~/components/TasksList.vue";
import { useConfigSeo } from "~/combosables/useConfigSeo";

definePageMeta({
  breadcrumb: "Профиль",
});

const { apiKey, apiBaseUrl } = useRuntimeConfig().public;

const { data, error } = await useFetch<ApiResponse>(
  apiBaseUrl + "/api_front_test/linovprod",
  {
    query: {
      api_key: apiKey,
    },
    lazy: false,
  },
);

const route = useRoute();

const metaInfo = {
  title: data?.value?.response.page.seo.title,
  description:
    data?.value?.response?.page?.seo?.text?.length === 0
      ? data?.value?.response.page.seo.title
      : data?.value?.response.page.seo.text,
  image: data?.value?.response.data.profile.avatar.url,
  href: route.path,
  noindex: data?.value?.response.page.noindex,
};

useConfigSeo(metaInfo);
</script>

<template>
  <div v-if="data" class="page-wrapper">
    <h1 class="hidden-heading">{{ data?.response.page.seo.h1 }}</h1>
    <ProfileCard :profile="data.response.data.profile" />
    <TasksList :tasks="data.response.data.list" />
  </div>
  <div v-else class="error">{{ error }}</div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @include respond-to-max("md") {
    flex-direction: column;
  }
}
</style>
