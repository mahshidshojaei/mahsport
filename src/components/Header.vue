<script setup>

import Input from "./Input.vue";
</script>

<template>
 <div class="flex justify-between items-center mt-4 container max-w-[1400px] mx-auto">
   <img src="/src/assets/images/Component 6.png" alt="" class="w-[90px]">
    <Input/>
   <div class="flex gap-2">
     <div class="p-2 rounded-full flex jc-between items-center bg-[#2dd9cd]">
      <i class="fa-light fa-cart-shopping"></i>
     </div>
     <div class="p-2 rounded-full flex jc-between items-center bg-[#2dd9cd]">
       <i class="fa-light fa-user"></i>
     </div>
   </div>
 </div>
</template>

<style scoped>

</style>