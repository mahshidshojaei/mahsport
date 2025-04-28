<template>
  <label class="flex items-center text-[14px] cursor-pointer relative">
    <input
        type="checkbox"
        v-model="checked"
        class="custom-checkbox"
    />
      <i class="fa-light fa-check text-white text-[11px] absolute right-[3px] top-[5px]"></i>
    <slot />
  </label>
</template>

<script setup>
import { ref } from 'vue';
const checked = ref(false);
</script>

<style scoped>
.custom-checkbox {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-inline-end: 6px;
  position: relative;
  background-color: white;
  cursor: pointer;
}

.custom-checkbox:checked {
  background-color: #ff6b35;
  border-color: #ff6b35;
}

.check-icon {
  position: absolute;
  left: 3px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
</style>
