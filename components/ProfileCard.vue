<script lang="ts" setup>
interface Props {
  profile: Profile;
}

defineProps<Props>();
</script>

<template>
  <div class="profile" itemscope itemtype="https://schema.org/Person">
    <div class="profile__avatar-wrapper">
      <NuxtImg
        :placeholder="true"
        :src="profile.avatar.url"
        :style="{ backgroundColor: profile.avatar.placeholder_color }"
        alt="avatar"
        class="profile__avatar"
        itemprop="image"
        :modifiers="profile.avatar"
      />
    </div>
    <div class="profile__info">
      <h2 class="profile__name" itemprop="name">{{ profile.name }}</h2>
      <p class="profile__username">
        <SvgoUser class="profile__icon" />
        <span itemprop="alternateName">{{ profile.login }}</span>
      </p>
      <hr class="profile__separator" />
      <div class="social__links">
        <NuxtLink
          v-if="profile.in_link"
          :href="profile.in_link"
          class="social__link"
          itemprop="sameAs"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SvgoInstagram class="social__icon" />
        </NuxtLink>
        <NuxtLink
          v-if="profile.vk_link"
          :href="profile.vk_link"
          class="social__link"
          itemprop="sameAs"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SvgoVk class="social__icon" />
        </NuxtLink>
        <NuxtLink
          v-if="profile.tw_link"
          :href="profile.tw_link"
          class="social__link"
          itemprop="sameAs"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SvgoTwitter class="social__icon" />
        </NuxtLink>
        <NuxtLink
          v-if="profile.fb_link"
          :href="profile.fb_link"
          class="social__link"
          itemprop="sameAs"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SvgoFacebook class="social__icon" />
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
  height: fit-content;
  padding: 20px 20px 24px;
  border-radius: $radius-medium;
  background-color: $card-background;
  gap: 24px;

  @include respond-to-max("md") {
    flex-direction: row;
    max-width: 100%;
    gap: 32px;
  }

  @include respond-to-max("sm") {
    flex-direction: column;
  }

  &__info {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 24px;

    @include respond-to-max("md") {
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

    @include respond-to-max("md") {
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
