<script setup>
import {defineExpose, nextTick, onMounted, onUnmounted, ref} from 'vue';

const props = defineProps({
  contentClasses: {
    type: String,
    default: 'py-1 bg-white dark:bg-zinc-800'
  }
});

const open = ref(false);
const dropdownRef = ref(null);
const triggerRef = ref(null);
const dropdownStyle = ref({top: '0px', left: '0px'});

const closeOnEscape = (e) => {
  if (open.value && e.key === 'Escape') {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener('keydown', closeOnEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', closeOnEscape);
});

const calculateDropdownPosition = () => {
  nextTick(() => {
    const triggerRect = triggerRef.value?.getBoundingClientRect();
    const dropdownRect = dropdownRef.value?.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    if (triggerRect && dropdownRect) {
      const spaceBelow = viewportHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;
      const spaceRight = viewportWidth - triggerRect.right;
      const spaceLeft = triggerRect.left;
      let top = (triggerRect.bottom + window.scrollY) + 5;
      let left = triggerRect.left + window.scrollX;
      if (spaceBelow < dropdownRect.height && spaceAbove > spaceBelow) top = (triggerRect.top - dropdownRect.height + window.scrollY) - 15;
      if (spaceRight < dropdownRect.width && spaceLeft > spaceRight) left = triggerRect.right - dropdownRect.width + window.scrollX;
      dropdownStyle.value = {
        top: `${top}px`,
        left: `${left}px`
      };
    }
  });
};

const toggleDropdown = () => {
  open.value = !open.value;
  if (open.value) calculateDropdownPosition();
};

defineExpose({
  toggleDropdown
});
</script>

<template>
  <div ref="triggerRef" class="relative" @click="toggleDropdown">
    <slot name="trigger"/>
  </div>
  <Teleport to="body">
    <div v-show="open" ref="dropdownRef" :style="dropdownStyle" class="fixed z-50 rounded-xl shadow-xl">
      <div :class="contentClasses" class="rounded-xl border border-zinc-200 dark:border-zinc-600 min-w-[10rem] max-w-[20rem]">
        <slot name="content"/>
      </div>
    </div>
    <div v-show="open" class="fixed inset-0 z-40" @click="open = false"/>
  </Teleport>
</template>
