<script lang="ts" setup>
export interface FormState {
  comment: string;
  phone: string;
  email: string;
  telegram: string;
  doNotCall: boolean;
}

const emit = defineEmits(["submit", "close"]);
const isOpen = ref(false);

const formValue = ref<FormState>({
  comment: "",
  phone: "",
  email: "",
  telegram: "",
  doNotCall: false,
});

const taskData = ref<ListItem | null>();
const openModal = (task: ListItem) => {
  isOpen.value = true;
  taskData.value = task;
};

const closeModal = () => {
  isOpen.value = false;
  emit("close");
  document.body.style.overflow = "";
};
const submitForm = () => {
  emit("submit", { ...formValue.value, taskId: taskData.value?.id });
  closeModal();
  formValue.value = {
    comment: "",
    phone: "",
    email: "",
    telegram: "",
    doNotCall: false,
  };
};

const handleOverlayClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const modalInner = document.querySelector(".modal__inner");

  if (modalInner && !modalInner.contains(target)) {
    closeModal();
  }
};

defineExpose({ openModal });

function beforeEnter(el: Element) {
  (el as HTMLElement).style.opacity = "0";
}

function enter(el: Element) {
  void (el as HTMLElement).offsetHeight;
  (el as HTMLElement).style.transition = "opacity 0.3s ease";
  (el as HTMLElement).style.opacity = "1";
}

function leave(el: Element) {
  (el as HTMLElement).style.transition = "opacity 0.3s ease";
  (el as HTMLElement).style.opacity = "0";
}
</script>

<template>
  <transition
    name="fade"
    @enter="enter"
    @leave="leave"
    @before-enter="beforeEnter"
  >
    <div v-if="isOpen" class="modal" @click="handleOverlayClick">
      <div class="modal__inner">
        <div class="modal__header">
          <h2 class="modal__title">Информация по отклику</h2>
          <UiButton circle class="modal__close-button" icon @click="closeModal">
            <SvgoCross class="modal__close-icon" />
          </UiButton>
        </div>
        <form class="modal__form" @submit.prevent="submitForm">
          <UiInput
            v-model="formValue.comment"
            placeholder="Комментарий"
            type="textarea"
          />
          <UiInput
            v-model="formValue.phone"
            input-type="tel"
            placeholder="Телефон"
            type="input"
          />
          <UiInput
            v-model="formValue.email"
            input-type="email"
            placeholder="E-mail*"
            required
            type="input"
          />
          <UiInput
            v-model="formValue.telegram"
            input-type="text"
            placeholder="Телеграм*"
            required
            type="input"
          />
          <UiCheckbox v-model="formValue.doNotCall" class="modal__checkbox"
            >Прошу не звонить и написать мне в мессенджер
          </UiCheckbox>
          <UiButton class="modal__button" type="submit" yellow
            >Отправить
          </UiButton>
        </form>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  &__close-button {
    width: 24px;
    height: 24px;
    background-color: $card-background;

    &:hover {
      background-color: $text-fifth;
    }
  }

  &__close-icon {
    width: 9px;
    height: 9px;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  &__title {
    @include font-gothampro-bold;
    font-size: 20px;
    line-height: 120%;
  }

  &__inner {
    width: 100%;
    max-width: 490px;
    margin: 15px;
    padding: 36px 28px;
    border-radius: 8px;
    background: $background;
    box-shadow: 0 16px 36px 0 rgba(0, 0, 0, 0.12);
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__checkbox {
    margin-bottom: 8px;
  }

  &__button {
    width: fit-content;
  }
}
</style>
