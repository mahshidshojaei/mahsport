<script setup>
import Dropdown from "@/components/Dropdown.vue";
import {useRoute} from "vue-router";
import {computed} from "vue";
const route = useRoute();
const productId = computed(() => route.params.id);
const products = [
  {
    id: 1,
    title: "ست ورزشیGymshark",
    price: "1,480,000",
    image: "/src/assets/images/3Pcs%20Criss%20Cross%20Drawstring%20Sports%20Set%20Concert%20Workout%20Outfit.png"
  },
  {
    id: 2,
    title: "ست ورزشیSpeedo",
    price: "2,480,000",
    image: "/src/assets/images/12.png"
  },
  {
    id: 3,
    title: "ست ورزشیNew Balance",
    price: "3,480,000",
    image: "/src/assets/images/16.png"
  },
  {
    id: 4,
    title: "ست ورزشیLee",
    price: "2,480,000",
    image: "/src/assets/images/111.png"
  },
  {
    id: 5,
    title: "ست ورزشیFilla",
    price: "1,900,000",
    image: "/src/assets/images/116.png"
  },
  {
    id: 6,
    title: "ست ورزشیVenum",
    price: "6,480,000",
    image: "/src/assets/images/113.png"
  },
  {
    id: 7,
    title: "ست ورزشیAsics",
    price: "7,480,000",
    image: "/src/assets/images/114.png"
  },
  {
    id: 8,
    title: "ست ورزشیUFC",
    price: "7,880,000",
    image: "/src/assets/images/115.png"
  },
  {
    id: 9,
    title: "ست ورزشیReebok",
    price: "10,480,000",
    image: "/src/assets/images/112.png"
  },
  {
    id: 10,
    title: "ست ورزشیNike",
    price: "1,180,700",
    image: "/src/assets/images/119.png"
  }
]
const product = computed(() => products.find(p => p.id === parseInt(productId.value)));


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
          <p class="text-[14px] text-center text-[#FF4F1C]">سبد خرید</p>
        </div>
        <span class="w-[100px] h-[1px] bg-gray-400"></span>
        <div class="flex flex-col gap-1">
        <span class="w-[70px] rounded-lg h-[70px] bg-gray-200 flex items-center justify-center">
          <i class="fa-light fa-map-location-dot text-[29px] text-gray-400"></i>
        </span>
          <p class="text-[14px] text-gray-500 text-center">آدرس</p>
        </div>
        <span class="w-[100px] h-[1px] bg-gray-400"></span>
        <div class="flex flex-col gap-1">
        <span class="w-[70px] rounded-lg h-[70px] bg-gray-200 flex items-center justify-center">
          <i class="fa-light fa-truck-fast text-[29px] text-gray-400"></i>
        </span>
          <p class="text-[14px] text-gray-500 text-center">نحوه ارسال</p>
        </div>
        <span class="w-[100px] h-[1px] bg-gray-400"></span>
        <div class="flex flex-col gap-1">
        <span class="w-[70px] rounded-lg h-[70px] bg-gray-200 flex items-center justify-center">
          <i class="fa-light fa-receipt text-[29px] text-gray-400"></i>
        </span>
          <p class="text-[14px] text-gray-500 text-center">پرداخت</p>
        </div>
      </div>
      <div class="flex w-full justify-between px-10 py-2">
        <span class="font-semibold">سبد خرید شما</span>
        <Dropdown>
          <template #trigger>
            <i class="fa-light fa-ellipsis-vertical"></i>
          </template>
          <template #content>
            <div class="p-2 flex gap-1 items-center cursor-pointer text-[13px]"><i class="fa-thin fa-bring-forward"></i>انتقال همه به خرید بعدی</div>
            <div class="p-2 flex gap-1 items-center cursor-pointer text-[13px]"><i class="fa-thin fa-trash"></i>حذف همه</div>
          </template>
        </Dropdown>
      </div>
      <div class="px-10 py-2 flex flex-col gap-3">
          <div class="bg-white w-full rounded-md p-2 flex gap-10 overflow-hidden">
            <img src="/src/assets/images/116.png" alt="" class="w-[150px] rounded-md">
            <div class="flex flex-col justify-evenly">
              <div>
              <span>ست ورزشیFilla</span>
              <hr class="w-[50px] bg-zinc-900 h-[2px]">
              <span>M</span>
              </div>
              <div class="flex flex-col"><span>قیمت نهایی:</span>
              <span>8,800,000</span></div>
            </div>
          </div>
        <div class="bg-white w-full rounded-md p-2 flex gap-10 overflow-hidden">
          <img src="/src/assets/images/116.png" alt="" class="w-[150px] rounded-md">
          <div class="flex flex-col justify-evenly">
            <div>
              <span>ست ورزشیFilla</span>
              <hr class="w-[50px] bg-zinc-900 h-[2px]">
              <span>M</span>
            </div>
            <div class="flex flex-col"><span>قیمت نهایی:</span>
              <span>8,800,000</span></div>
          </div>
        </div>
        <div class="bg-white w-full rounded-md p-2 flex gap-10 relative overflow-hidden">

          <img src="/src/assets/images/116.png" alt="" class="w-[150px] rounded-md">
          <div class="flex flex-col justify-evenly">
            <div>
              <span>ست ورزشیFilla</span>
              <hr class="w-[50px] bg-zinc-900 h-[2px]">
              <span>M</span>
            </div>
            <div class="flex flex-col"><span>قیمت نهایی:</span>
              <span>8,800,000</span></div>
          </div>
        </div>
        <div class="bg-white w-full rounded-md p-2 flex gap-10 relative overflow-hidden">

          <img src="/src/assets/images/116.png" alt="" class="w-[150px] rounded-md">
          <div class="flex flex-col justify-evenly">
            <div>
              <span>ست ورزشیFilla</span>
              <hr class="w-[50px] bg-zinc-900 h-[2px]">
              <span>M</span>
            </div>
            <div class="flex flex-col"><span>قیمت نهایی:</span>
              <span>8,800,000</span></div>
          </div>
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
        <router-link to="/checkout" class="w-full bg-[#ff6b35] p-2 text-[14px] text-white rounded-sm text-center">
          ورود و ادامه ثبت سفارش
        </router-link>
      </div>
    </div>
  </div>
</template>
