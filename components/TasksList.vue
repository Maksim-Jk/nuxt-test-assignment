<script lang="ts" setup>
import TaskCard from "~/components/TaskCard.vue";
import type { ModalForm } from "#components";
import type { FormState } from "~/components/ModalForm.vue";

interface Props {
  tasks: ListItem[];
}

defineProps<Props>();

const modalForm = ref<InstanceType<typeof ModalForm> | null>(null);

const openModal = (task: ListItem) => {
  modalForm.value?.openModal(task);
};

const handleSubmit = (formData: FormState) => {
  alert("Отправленные данные:" + JSON.stringify(formData));
};
</script>

<template>
  <section
    class="tasks-section"
    itemscope
    itemtype="http://schema.org/ItemList"
  >
    <h2 class="tasks-section__title" itemprop="name">Все задания</h2>
    <meta content="Unordered" itemprop="itemListOrder" />
    <meta :content="tasks.length.toString()" itemprop="numberOfItems" />
    <ul class="tasks-list">
      <li
        v-for="(task, index) in tasks"
        :key="task.id"
        itemprop="itemListElement"
        itemscope
        itemtype="http://schema.org/ListItem"
      >
        <TaskCard :task="task" @take-task="openModal" />
        <meta :content="(index + 1).toString()" itemprop="position" />
        <link :href="task.url" itemprop="item" />
      </li>
    </ul>
  </section>
  <ModalForm ref="modalForm" @submit="handleSubmit" />
</template>

<style lang="scss" scoped>
.tasks-section__title {
  @include font-gothampro-bold;
  font-size: 32px;
  line-height: 120%;
  margin-bottom: 24px;
}

.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
