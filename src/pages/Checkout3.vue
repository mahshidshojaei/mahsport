<script setup>
import {ref} from "vue";

const pay=[
  {id:1, title:'پرداخت امن درگاه سداد (ملی)' , image:'/src/assets/images/logo.png'},
  {id:2, title:'پرداخت قسطی با اسنپ پی' , image:'/src/assets/images/pay_logo.png'},
  {id:2, title:'پرداخت قسطی با اسنپ پی' , image:'/src/assets/images/pay_logo.png'},
]
const selectedBank = ref(null);
</script>

<template>
  <div class="grid grid-cols-4 p-4 container">
    <div class="col-span-3 relative flex flex-col gap-2">
      <hr class="w-full text-zinc-600">
      <hr class="w-[60px] bg-[#ff6b35] h-[3px] top-[-1px] absolute">

      <div class="flex items-center justify-between px-10 py-2">
        <div class="flex flex-col gap-1">
        <span class="w-[70px] rounded-lg h-[70px] bg-[#FFEDDF] flex items-center justify-center">
          <i class="fa-light fa-bag-shopping text-[29px] bg-gradient-to-r from-[#FF874F] via-[#FF6B35] to-[#FF4F1C] bg-clip-text text-transparent"></i>
        </span>
          <p class="text-[14px] text-[#FF4F1C] text-center">سبد خرید</p>
        </div>
        <span class="w-[100px] h-[1px] bg-gray-400"></span>
        <div class="flex flex-col gap-1">
        <span class="w-[70px] rounded-lg h-[70px] bg-[#FFEDDF] flex items-center justify-center">
          <i class="fa-light fa-map-location-dot text-[29px] bg-gradient-to-r from-[#FF874F] via-[#FF6B35] to-[#FF4F1C] bg-clip-text text-transparent"></i>
        </span>
          <p class="text-[14px] text-[#FF4F1C] text-center">آدرس</p>
        </div>
        <span class="w-[100px] h-[1px] bg-gray-400"></span>
        <div class="flex flex-col gap-1">
        <span class="w-[70px] rounded-lg h-[70px] bg-[#FFEDDF] flex items-center justify-center">
          <i class="fa-light fa-truck-fast text-[29px] bg-gradient-to-r from-[#FF874F] via-[#FF6B35] to-[#FF4F1C] bg-clip-text text-transparent"></i>
        </span>
          <p class="text-[14px] text-[#FF4F1C] text-center">نحوه ارسال</p>
        </div>
        <span class="w-[100px] h-[1px] bg-gray-400"></span>
        <div class="flex flex-col gap-1">
        <span class="w-[70px] rounded-lg h-[70px] bg-[#FFEDDF] flex items-center justify-center">
          <i class="fa-light fa-receipt text-[29px] bg-gradient-to-r from-[#FF874F] via-[#FF6B35] to-[#FF4F1C] bg-clip-text text-transparent"></i>
        </span>
          <p class="text-[14px] text-[#FF4F1C] text-center">پرداخت</p>
        </div>
      </div>
      <p class="px-4">انتخاب روش پرداخت</p>
      <div class="px-4 flex flex-col gap-4">
      <div v-for="(bank, index) in pay"
           :key="index"
           @click="selectedBank = index"
           :class="[
       'p-4 rounded-xl flex flex-col gap-2 items-start cursor-pointer',
       selectedBank === index ? 'bg-white border border-orange-500' : 'bg-zinc-200'
     ]"
      >
       <!-- <input type="checkbox" name="" id="" class="custom-checkbox"> -->

        <div class="flex flex-col gap-2">
          <img :src="bank.image" class="w-[50px]">
          <span>{{ bank.title }}</span>
        </div>
        <Transition name="fade-expand">
          <p v-if="selectedBank === index" class="text-[15px] text-gray-600 overflow-hidden">
            پرداخت امن به وسیله کلیه کارت های عضو شتاب از طریق درگاه سداد {{ bank.title }}
          </p>
        </Transition>
      </div>
    </div>
    </div>
    <div class="col-span-1">
      <div class="w-[300px] rounded-md bg-zinc-50 border border-zinc-300 p-4 flex flex-col gap-2">
        <div class="w-full p-2 text-[#62666d] text-[12px] font-medium flex justify-between">
          <span>تعداد اقلام</span>
          <span>۱۱۴,۰۰۰,۰۰۰ تومان</span>
        </div>
        <div class="w-full p-2 text-[#23254e] text-[12px] font-medium flex justify-between">
          <span>جمع سبد خرید</span>
          <span>۱۱۴,۰۰۰,۰۰۰ تومان</span>
        </div>
        <div class="w-full p-2 text-[#2e7b32] text-[12px] font-medium flex justify-between">
          <span>هزینه ارسال</span>
          <span>درانتظار انتخاب روش ارسال</span>
        </div>
        <hr class="w-full text-zinc-700">
        <div class="w-full p-2 text-zinc-700 text-[12px] font-medium flex justify-between">
          <span>قابل پرداخت</span>
          <span>۱۱۴,۰۰۰,۰۰۰ تومان</span>
        </div>
        <router-link to="/checkout3" class="w-full bg-[#ff6b35] p-2 text-[14px] text-white rounded-sm text-center">
          ورود و ادامه ثبت سفارش
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-checkbox {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-inline-end: 6px;
  background-color: white;
  cursor: pointer;
}

.custom-checkbox:checked {
  background-color: #ff6b35;
  border-color: #ff6b35;
}
.fade-expand-enter-active, .fade-expand-leave-active {
  transition: all 0.3s ease;
}
.fade-expand-enter-from, .fade-expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}
.fade-expand-enter-to, .fade-expand-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 100px; /* یه عدد مناسب با محتوا */
}

</style>