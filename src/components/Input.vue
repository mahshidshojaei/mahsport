<script setup>
defineProps({
  placeholder: {
    type: String,
    default: 'جستجوی محصول'
  }
});
</script>

<template>
  <div class="sm:w-[700px] relative w-full">
    <input :placeholder="placeholder" class="w-full p-2 text-[12px] border border-zinc-200 rounded-[8px]" />
    <i class="fa-thin fa-magnifying-glass absolute left-[10px] top-[10px]"></i>
  </div>
</template>
