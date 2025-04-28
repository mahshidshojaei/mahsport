<script setup>
import {computed} from 'vue';

const emit = defineEmits(['update:checked']);

const props = defineProps({
  checked: {
    type: [Array, Boolean],
    required: true
  },
  value: {
    default: null
  },
  label: {
    default: null
  }
});

const id = 'modal-' + Math.random().toString(36).substr(2, 9);

const proxyChecked = computed({
  get() {
    return props.checked;
  },
  set(val) {
    emit('update:checked', val);
  }
});
</script>
<template>
  <label :for="id" class="inline-flex items-center cursor-pointer">
    <input :id="id" v-model="proxyChecked" :value="value" class="sr-only peer" type="checkbox"/>
    <span v-if="label" class="me-3 block text-sm text-zinc-600 dark:text-zinc-300">{{ label }}</span>
    <span class="relative w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition after:duration-300 after:ease-out dark:border-zinc-700 peer-checked:bg-[#ff6b35] dark:peer-checked:bg-blue-500"/>
  </label>
</template>
