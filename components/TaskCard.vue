<script lang="ts" setup>
interface Props {
  task: ListItem;
}

const emit = defineEmits(["takeTask"]);
const props = defineProps<Props>();

const handleClick = () => {
  emit("takeTask", props.task);
};
</script>

<template>
  <div class="task-card" itemscope itemtype="http://schema.org/Task">
    <article>
      <header class="task-card__header">
        <span class="task-card__category" itemprop="taskCategory">{{
          task.category_name
        }}</span>
      </header>
      <div class="task-card__body">
        <h2 class="task-card__title" itemprop="name">
          <NuxtLink :href="'/all-tasks/profile/task/' + task.url" itemprop="url"
            >{{ task.name }}
          </NuxtLink>
        </h2>
        <p class="task-card__description" itemprop="description">
          {{ task.text }}
        </p>
      </div>
      <footer class="task-card__footer">
        <div class="task-card__meta">
          <span class="task-card__price" itemprop="price">{{
            task.price_format
          }}</span>
          <meta :content="task.currency" itemprop="priceCurrency" />
          <span class="task-card__deadline" itemprop="completionDate">{{
            task.dedline
          }}</span>
          <meta
            :content="new Date(task.publish_date * 1000).toISOString()"
            itemprop="datePublished"
          />
        </div>
        <UiButton class="task-card__button" yellow @click="handleClick"
          >Взять задачу
        </UiButton>
      </footer>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.task-card {
  padding: 24px;
  border-radius: $radius-medium;
  background-color: $card-background;

  &__header {
    margin-bottom: 12px;
  }

  &__title {
    font-size: 24px;
    @include font-gothampro-bold;
    line-height: 120%;
    margin-bottom: 12px;

    @include respond-to-max("sm") {
      font-size: 20px;
    }
  }

  &__category {
    font-size: 14px;
    line-height: 120%;
    color: $accent-green;
  }

  &__description {
    font-size: 16px;
    line-height: 140%;

    @include respond-to-max("sm") {
      font-size: 14px;
    }
  }

  &__body {
    margin-bottom: 16px;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @include respond-to-max("sm") {
      flex-wrap: wrap;
    }
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 20px;

    @include respond-to-max("sm") {
      flex-direction: column;
      gap: 4px;
    }
  }

  &__price,
  &__deadline {
    @include font-gothampro-bold;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.02em;

    @include respond-to-max("sm") {
      font-size: 18px;
    }
  }
}
</style>
