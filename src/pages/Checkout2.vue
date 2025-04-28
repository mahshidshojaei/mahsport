<script setup>

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
        <span class="w-[70px] rounded-lg h-[70px] bg-gray-200 flex items-center justify-center">
          <i class="fa-light fa-receipt text-[29px] text-gray-400"></i>
        </span>
          <p class="text-[14px] text-gray-500 text-center">پرداخت</p>
        </div>
      </div>
      <p class="px-4">روش های ارسال</p>
      <div class="flex flex-col gap-5 px-4">
      <div class="flex flex-col gap-3 bg-gray-50 rounded-xl p-4 text-gray-700">
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center gap-2">
            <input type="checkbox" class="custom-checkbox">
        <span>پیک عادی:</span>
          </div>
          <span>۷۵.۰۰۰ تومان</span>
        </div>
        <p>زمان تحویل، اولین روز کاری بعدی بین ساعت 14:00 الی 20:00 می‌باشد.</p>
        <a href="#" class="flex items-center gap-2 text-[#FF4F1C]">نمایش محدوده <i class="ki-filled ki-left"></i></a>
        <span>درصورتی که آدرس شما در محدوده نباشد به طور خودکار با روش پست پیشتاز ارسال میشود</span>
      </div>
      <div class="flex flex-col gap-3 bg-gray-50 rounded-xl p-4 text-gray-700">
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center gap-2">
            <input type="checkbox" class="custom-checkbox">
            <span>پیک فوری (هزینه ارسال برعهده مشتری)</span>
          </div>
          <span>۷۵.۰۰۰ تومان</span>
        </div>
        <span>الوپیک یا اسنپ‌باکس (تحویل 3 ساعته در ساعات کاری بین 09:00 الی 17:00 | هزینه ارسال را درب محل به پیک پرداخت کنید. ارسال از محدوده چیتگر)</span>
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
</style>