<script lang="ts" setup>
interface Props {
  data: Profile
}

defineProps<Props>()
</script>

<template>
  <div class="profile">
    <div class="profile__avatar-wrapper">
      <NuxtImg
          :placeholder="true" :src="data.avatar.url" alt="avatar" class="profile__avatar"
          v-bind:modifiers="data.avatar"
          :style="{ backgroundColor: data.avatar.placeholder_color }"
      />
    </div>
    <div class="profile__info">
      <h2 class="profile__name">{{ data.name }}</h2>
      <p class="profile__username">
        <SvgoUser class="profile__icon"/>
        <span>{{ data.login }}</span>
      </p>
      <hr class="profile__separator">
      <div class="social__links">
        <NuxtLink
            v-if="data.in_link" :href="data.in_link" class="social__link" rel="noopener noreferrer"
            target="_blank">
          <SvgoInstagram class="social__icon"/>
        </NuxtLink>
        <NuxtLink
            v-if="data.vk_link" :href="data.vk_link" class="social__link" rel="noopener noreferrer"
            target="_blank">
          <SvgoVk class="social__icon"/>
        </NuxtLink>
        <NuxtLink
            v-if="data.tw_link" :href="data.tw_link" class="social__link" rel="noopener noreferrer"
            target="_blank">
          <SvgoTwitter class="social__icon"/>
        </NuxtLink>
        <NuxtLink
            v-if="data.fb_link" :href="data.fb_link" class="social__link" rel="noopener noreferrer"
            target="_blank">
          <SvgoFacebook class="social__icon"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 320px;
  padding: 20px 20px 24px;
  border-radius: $radius-medium;
  background-color: $card-background;
  gap: 24px;

  @include respond-to-max('md') {
    flex-direction: row;
    max-width: 100%;
    gap: 32px;
  }

  @include respond-to-max('sm') {
    flex-direction: column;
  }

  &__info {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 24px;

    @include respond-to-max('md') {
      gap: 12px;
    }
  }

  &__separator {
    width: 100%;
    height: 1px;
    background-color: $text-fifth;
  }

  &__avatar-wrapper {
    overflow: hidden;
    flex-shrink: 0;
    width: 280px;
    height: 280px;
    border-radius: $radius-medium;

    @include respond-to-max('md') {
      width: 104px;
      height: 104px;
    }
  }

  &__avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__name {
    @include font-gothampro-medium;
    font-size: 18px;
    line-height: 140%;
    color: $text-secondary;
  }

  &__username {
    @include font-gothampro-medium;
    font-size: 14px;
    line-height: 140%;
    display: flex;

    align-items: center;
    color: $text-secondary;
    gap: 8px;
  }

  &__icon {
    width: 18px;
    height: 21px;
  }

  .social {

    &__links {
      display: flex;
      gap: 12px;
    }

    &__icon {
      width: 24px;
      height: 24px;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.7;
      }
    }

  }
}

</style>