<script setup>
import {Link} from '@inertiajs/vue3';
import {computed, defineProps} from 'vue';

const props = defineProps({
  type: {type: String, default: 'button'},
  disabled: {type: Boolean, default: false},
  href: {type: String, default: null},
  color: {type: String, default: 'primary'}
});
const buttonClasses = computed(() => (props.type === 'text' ? {
  'opacity-25 pointer-events-none': props.disabled,
  'text-blue-600 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-400': ['primary', 'add', 'edit', 'update', 'bluePastel'].includes(props.color),
  'text-redPastel-600 dark:text-redPastel-500 hover:text-redPastel-500 dark:hover:text-redPastel-400': ['danger', 'remove', 'delete', 'redPastel'].includes(props.color),
  'text-yellow-600 dark:text-yellow-500 hover:text-yellow-500 dark:hover:text-yellow-400': ['warning', 'yellow'].includes(props.color),
  'text-zinc-900 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-50': ['info', 'outline', 'gray'].includes(props.color),
  'text-zinc-100 dark:text-zinc-200 hover:text-zinc-200 dark:hover:text-zinc-100': ['black'].includes(props.color)
} : {
  'opacity-25 pointer-events-none': props.disabled,
  'bg-blue-600 dark:bg-blue-500 border-transparent text-white dark:text-blue-50 hover:bg-blue-500 dark:hover:bg-blue-400': ['primary', 'add', 'edit', 'update', 'bluePastel'].includes(props.color),
  'bg-redPastel-600 dark:bg-redPastel-500 border-transparent text-white dark:text-redPastel-50 hover:bg-redPastel-500 dark:hover:bg-redPastel-400': ['danger', 'remove', 'delete', 'redPastel'].includes(props.color),
  'bg-yellow-600 dark:bg-yellow-500 border-transparent text-white dark:text-yellow-50 hover:bg-yellow-500 dark:hover:bg-yellow-400': ['warning', 'yellow'].includes(props.color),
  'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 border-zinc-200 dark:border-zinc-600': ['info', 'outline', 'gray'].includes(props.color),
  'bg-zinc-900 dark:bg-zinc-700 border-transparent text-zinc-100 dark:text-zinc-200 hover:bg-zinc-800 dark:hover:bg-zinc-600': ['black'].includes(props.color),
  'bg-white dark:bg-zinc-200 border-transparent text-zinc-900 dark:text-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-300': ['white'].includes(props.color)
}));
const typeClasses = computed(() => (props.type === 'text' ? 'bg-transparent border-0 p-1' : 'border rounded-lg hover:shadow-xl hover:shadow-zinc-900/5 dark:hover:shadow-zinc-900/30 px-3 py-2.5'));
</script>
<template>
  <component
      :is="href ? Link : 'button'"
      :class="[
            buttonClasses,
            typeClasses,
            'inline-flex items-center text-xs !outline-none !ring-0 !ring-offset-0'
        ]"
      :disabled="disabled"
      :href="href || undefined"
      :type="href ? undefined : type">
    <slot/>
  </component>
</template>
