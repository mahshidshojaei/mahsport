<script setup>
import {onMounted, onUnmounted, ref} from 'vue';

const model = defineModel({
  type: String,
  required: false
});

const input = ref(null);

const emit = defineEmits(['submit']);
const submitOnEnter = (e) => {
  if (e.key === 'Enter') emit('submit');
};

onMounted(() => {
  if (input.value.hasAttribute('autofocus')) input.value.focus();
  document.addEventListener('keydown', submitOnEnter);
});

onUnmounted(() => {
  document.removeEventListener('keydown', submitOnEnter);
});

defineExpose({focus: () => input.value.focus()});
</script>
<template>
  <input ref="input" v-model="model" class="h-[46px] text-sm py-3 border-zinc-200 dark:border-zinc-600 bg-transparent dark:text-zinc-300 focus:border-blue-500 dark:focus:border-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 rounded-lg placeholder:text-[13px]"/>
</template>
