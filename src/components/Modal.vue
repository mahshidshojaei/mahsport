<script setup>
import {onMounted, onUnmounted, watch} from 'vue';
import {modalManager} from '@/Utilities/modalManager.js';

const props = defineProps({
  show: {
    type: Boolean,
    default: true
  },
  autoWidth: {
    type: Boolean,
    default: true
  },
  closeable: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['close']);
const modalId = 'modal-' + Math.random().toString(36).substr(2, 9);

watch(
    () => props.show,
    (newVal) => {
      if (newVal) {
        modalManager.setActiveModal(modalId);
        document.body.style.overflow = 'hidden';
      } else {
        modalManager.clearActiveModal(modalId);
        document.body.style.overflow = null;
      }
    }
);

const close = () => {
  if (props.closeable) emit('close');
};

const closeOnEscape = (e) => {
  if (e.key === 'Escape' && props.show) close();
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));
onUnmounted(() => {
  document.removeEventListener('keydown', closeOnEscape);
  document.body.style.overflow = null;
});

</script>

<template>
  <Teleport to="body">
    <Transition leave-active-class="duration-200">
      <div v-show="show && modalManager.activeModalId === modalId" :id="modalId" :class="{'pointer-events-none': !show || modalManager.activeModalId !== modalId}" class="modal fixed w-full h-full !inset-0 !m-0 z-[1000000] flex items-center justify-center sm:p-12" scroll-region>
        <Transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="ease-out duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
          <span v-show="show && modalManager.activeModalId === modalId" :class="{'pointer-events-none': !show || modalManager.activeModalId !== modalId}" class="bg-zinc-500/75 dark:bg-zinc-900/75 backdrop-blur-[2px] w-full h-full !inset-0 !m-0 absolute" @click="close"/>
        </Transition>
        <Transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0 scale-90"
            enter-to-class="opacity-100 sm:scale-100"
            leave-active-class="ease-out duration-200"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-90">
          <div v-show="show && modalManager.activeModalId === modalId" :class="{'min-w-full sm:min-w-[768px] w-full': !autoWidth, 'w-full sm:w-auto sm:max-w-[600px]': autoWidth}" class="max-h-screen h-full sm:h-auto sm:max-h-[calc(100vh-98px)] sm:rounded-xl relative overflow-hidden">
            <slot v-if="show"/>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
