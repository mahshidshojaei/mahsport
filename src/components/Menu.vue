<script setup>
import {ref} from "vue";
const isMenuBarOpen=ref(false);


const clickMenuBar= ()=>{
  isMenuBarOpen.value = !isMenuBarOpen.value;
}

</script>


<template>
<div class="py-[20px] mt-[20px] border-y border-[#E5E7EB] sm:flex hidden">
  <div class="container">
    <nav>
      <ul class="flex gap-8 text-[13px] text-[#4A4A4A]">
        <li><a href="#">لباس ورزشی زنانه</a></li>
        <li><a href="#">لباس ورزشی مردانه</a></li>
        <li><a href="#">لوازم ورزشی</a></li>
        <li><a href="#">انواع کتونی</a></li>
        <li><a href="#">انواع کیف و ساک ورزشی</a></li>
        <li><a href="#">لوازم شنا</a></li>
      </ul>
    </nav>
  </div>
</div>
  <button @click="clickMenuBar" class="flex items-center justify-center w-[34px] h-[34px] border rounded-[15px] border-[#e5e7eb] p-0 sm:hidden">
    <i class="fa-light fa-bars text-[#818181]"></i>
  </button>
</template>

<style scoped>

</style>