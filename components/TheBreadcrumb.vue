<script lang="ts" setup>
import {useBreadcrumb} from "~/combosables/useBreadcrumb";

const {breadcrumbs} = useBreadcrumb()

</script>

<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb__item">
        <NuxtLink :to="crumb.path">
          {{ crumb.name }}
        </NuxtLink>
        <SvgoInterpunct v-if="index < breadcrumbs.length - 1" class="breadcrumb__separator"/>
      </li>
    </ol>
  </nav>
</template>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  margin-bottom: 41px;

  &__item {
    display: flex;
    align-items: center;
    width: auto;
    white-space: nowrap;
    color: $text-secondary;

    & a {
      font-weight: 400;
      font-size: 12px;
      line-height: 120%;
    }

    &:hover a {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }

  &__separator {
    width: 3px;
    height: 3px;
    margin: 0 10px;
  }
}
</style>