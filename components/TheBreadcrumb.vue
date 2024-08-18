<script lang="ts" setup>
import { useBreadcrumb } from "~/combosables/useBreadcrumb";

const { breadcrumbs } = useBreadcrumb();
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol
      class="breadcrumb"
      itemscope
      itemtype="https://schema.org/BreadcrumbList"
    >
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="breadcrumb__item"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <NuxtLink :to="crumb.path" itemprop="item">
          <span itemprop="name">{{ crumb.name }}</span>
        </NuxtLink>
        <meta :content="(index + 1).toString()" itemprop="position" />
        <SvgoInterpunct
          v-if="index < breadcrumbs.length - 1"
          class="breadcrumb__separator"
        />
      </li>
    </ol>
  </nav>
</template>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  margin-bottom: 41px;

  @include respond-to-max("md") {
    margin-bottom: 24px;
  }
  @include respond-to-max("sm") {
    margin-bottom: 16px;
  }

  &__item {
    display: flex;
    align-items: center;
    width: auto;
    white-space: nowrap;
    color: $text-secondary;

    & a {
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
