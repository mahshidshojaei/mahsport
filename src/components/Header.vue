<script setup>

import Input from "./Input.vue";

</script>

<template>
  <div class="flex flex-col md:flex-row justify-between items-center mt-4 container max-w-[1400px] mx-auto gap-2 sm:gap-4 md:gap-0 px-4">
    <div class="flex justify-between items-center w-full md:w-auto">
      <img src="/src/assets/images/Component 6.png" alt="" class="w-[70px] sm:w-[90px]">
      <div class="flex gap-2 md:hidden">
        <div class="p-2 w-[35px] h-[35px] sm:w-[40px] sm:h-[38px] rounded-full flex justify-center items-center bg-[#0E8A81] text-white">
          <i class="fa-light fa-cart-shopping text-[15px]"></i>
        </div>
        <div class="p-2 w-[35px] h-[35px] sm:w-[40px] sm:h-[38px] rounded-full flex justify-center items-center bg-[#0E8A81] text-white">
          <i class="fa-light fa-user text-[15px]"></i>
        </div>
      </div>
    </div>
    <hr class="w-full text-zinc-800 sm:hidden"/>
    <div class="w-full md:w-auto">
      <Input />
    </div>
    <div class="hidden md:flex gap-2">
      <div class="p-2 w-[40px] h-[38px] rounded-full flex justify-center items-center bg-[#0E8A81] text-white">
        <i class="fa-light fa-cart-shopping text-[15px]"></i>
      </div>
      <div class="p-2 w-[40px] h-[38px] rounded-full flex justify-center items-center bg-[#0E8A81] text-white">
        <i class="fa-light fa-user text-[15px]"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>