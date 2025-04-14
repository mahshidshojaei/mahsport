<!-- Layout.vue -->
<script setup>
import Header from './Header.vue'
import Slider from "./Slider.vue";
import SliderProduct from "./SliderProduct.vue";

</script>

<template>
  <div class="layout bg-zinc-100">
    <Header />
<!-- <Menu/>-->

    <main>
      <slot>
        <Slider/>
        <div class="mt-20 relative">
        <img src="/src/assets/images/Rectangle%201.png" alt="" class="w-full h-[400px] absolute" />
          <p class="absolute text-[20px] top-[-18px] right-2 text-[#4A4A4A] z-50">پیشنهاد شگفت انگیز</p>
          <img src="/src/assets/images/Component 2.png" alt="" class="w-[150px] absolute top-[-70px]">
          <div class="container flex h-[400px] items-center justify-between overflow-x-auto gap-2">
            <div class="min-w-[220px] bg-white rounded-xl overflow-hidden border border-gray-200 z-50 ">
              <div class="flex justify-between items-center px-3 pt-2">
                <div class="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-t-[20px] rounded-bl-[20px]">
                  19%
                </div>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="text-gray-400 hover:text-red-500 transition-colors" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                  </svg>
                </button>
              </div>
              <div class="flex justify-center items-center p-3">
                <img src="/src/assets/images/1.png" alt="product" class="w-[100px] h-auto object-contain">
              </div>


              <div class="px-3 pb-4 text-right">
                <p class="text-sm font-medium text-gray-700 mb-2">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</p>
                <div class="flex justify-between items-center text-sm">
                  <del class="text-gray-400">۳۸۵,۰۰۰</del>
                  <p class="text-pink-700 font-semibold">
                    ۳۱۰,۰۰۰ <span class="text-xs text-gray-500">تومان</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="min-w-[220px] bg-white rounded-xl overflow-hidden border border-gray-200 z-50 ">
              <div class="flex justify-between items-center px-3 pt-2">
                <div class="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-t-[20px] rounded-bl-[20px]">
                  19%
                </div>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="text-gray-400 hover:text-red-500 transition-colors" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                  </svg>
                </button>
              </div>


              <div class="flex justify-center items-center p-3">
                <img src="/src/assets/images/1.png" alt="product" class="w-[100px] h-auto object-contain">
              </div>


              <div class="px-3 pb-4 text-right">
                <p class="text-sm font-medium text-gray-700 mb-2">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</p>
                <div class="flex justify-between items-center text-sm">
                  <del class="text-gray-400">۳۸۵,۰۰۰</del>
                  <p class="text-pink-700 font-semibold">
                    ۳۱۰,۰۰۰ <span class="text-xs text-gray-500">تومان</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="min-w-[220px] bg-white rounded-xl  overflow-hidden border border-gray-200 z-50 ">
              <div class="flex justify-between items-center px-3 pt-2">
                <div class="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-t-[20px] rounded-bl-[20px]">
                  19%
                </div>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="text-gray-400 hover:text-red-500 transition-colors" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                  </svg>
                </button>
              </div>
              <div class="flex justify-center items-center p-3">
                <img src="/src/assets/images/1.png" alt="product" class="w-[100px] h-auto object-contain">
              </div>
              <div class="px-3 pb-4 text-right">
                <p class="text-sm font-medium text-gray-700 mb-2">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</p>
                <div class="flex justify-between items-center text-sm">
                  <del class="text-gray-400">۳۸۵,۰۰۰</del>
                  <p class="text-pink-700 font-semibold">
                    ۳۱۰,۰۰۰ <span class="text-xs text-gray-500">تومان</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="min-w-[220px] bg-white rounded-xl  overflow-hidden border border-gray-200 z-50">
              <div class="flex justify-between items-center px-3 pt-2">
                <div class="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-t-[20px] rounded-bl-[20px]">
                  19%
                </div>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="text-gray-400 hover:text-red-500 transition-colors" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                  </svg>
                </button>
              </div>


              <div class="flex justify-center items-center p-3">
                <img src="/src/assets/images/1.png" alt="product" class="w-[100px] h-auto object-contain">
              </div>


              <div class="px-3 pb-4 text-right">
                <p class="text-sm font-medium text-gray-700 mb-2">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</p>
                <div class="flex justify-between items-center text-sm">
                  <del class="text-gray-400">۳۸۵,۰۰۰</del>
                  <p class="text-pink-700 font-semibold">
                    ۳۱۰,۰۰۰ <span class="text-xs text-gray-500">تومان</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="min-w-[220px] bg-white rounded-xl  overflow-hidden border border-gray-200 z-50 ">
              <div class="flex justify-between items-center px-3 pt-2">
                <div class="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-t-[20px] rounded-bl-[20px]">
                  19%
                </div>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="text-gray-400 hover:text-red-500 transition-colors" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                  </svg>
                </button>
              </div>


              <div class="flex justify-center items-center p-3">
                <img src="/src/assets/images/1.png" alt="product" class="w-[100px] h-auto object-contain">
              </div>


              <div class="px-3 pb-4 text-right">
                <p class="text-sm font-medium text-gray-700 mb-2">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</p>
                <div class="flex justify-between items-center text-sm">
                  <del class="text-gray-400">۳۸۵,۰۰۰</del>
                  <p class="text-pink-700 font-semibold">
                    ۳۱۰,۰۰۰ <span class="text-xs text-gray-500">تومان</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="min-w-[220px] bg-white rounded-xl  overflow-hidden border border-gray-200 z-50 ">
              <div class="flex justify-between items-center px-3 pt-2">
                <div class="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-t-[20px] rounded-bl-[20px]">
                  19%
                </div>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="text-gray-400 hover:text-red-500 transition-colors" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                  </svg>
                </button>
              </div>


              <div class="flex justify-center items-center p-3">
                <img src="/src/assets/images/1.png" alt="product" class="w-[100px] h-auto object-contain">
              </div>


              <div class="px-3 pb-4 text-right">
                <p class="text-sm font-medium text-gray-700 mb-2">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</p>
                <div class="flex justify-between items-center text-sm">
                  <del class="text-gray-400">۳۸۵,۰۰۰</del>
                  <p class="text-pink-700 font-semibold">
                    ۳۱۰,۰۰۰ <span class="text-xs text-gray-500">تومان</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="mt-10 relative">
            <p class="absolute top-[50%] right-[20px] text-[#4A4A4A]">پر فروش ترین ها</p>
            <SliderProduct/>
        </div>
        <div class="mt-20 relative h-[330px] border-t border-zinc-200">
          <div class="rounded-lg w-[160px] h-[50px] bg-[#FF6B35] flex justify-center items-center absolute left-1/2 transform -translate-x-1/2 -top-[25px] border-[5px] border-zinc-100">
            <span class="text-[15px] text-stone-100">بر اساس سلیقه شما</span>
          </div>
          <div class="flex gap-4 items-center overflow-x-auto px-4 py-10 no-scrollbar container">
            <div class="min-w-[200px] bg-white rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300 shrink-0">
              <div class="w-full h-[180px] flex justify-center items-center bg-white">
                <img src="/src/assets/images/1.png" alt="product" class="w-[150px] h-[150px] object-contain rounded-full border-4 border-white " />
              </div>
              <div class="p-4 flex flex-col gap-2">
                <span class="text-[12px]">لباس ورزشی زنانه مدل k-150103</span>
                <div class="flex items-center justify-between">
                  <i class="fa-light fa-plus"></i>
                  <span class="text-[13px]">4,890,000</span>
                </div>
              </div>
            </div>
            <div class="min-w-[200px] bg-white rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300 shrink-0">
              <div class="w-full h-[180px] flex justify-center items-center bg-white">
                <img src="/src/assets/images/1.png" alt="product" class="w-[150px] h-[150px] object-contain rounded-full border-4 border-white " />
              </div>
              <div class="p-4 flex flex-col gap-2">
                <span class="text-[12px]">لباس ورزشی زنانه مدل k-150103</span>
                <div class="flex items-center justify-between">
                  <i class="fa-light fa-plus"></i>
                  <span class="text-[13px]">4,890,000</span>
                </div>
              </div>
            </div>
            <div class="min-w-[200px] bg-white rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300 shrink-0">
              <div class="w-full h-[180px] flex justify-center items-center bg-white">
                <img src="/src/assets/images/1.png" alt="product" class="w-[150px] h-[150px] object-contain rounded-full border-4 border-white " />
              </div>
              <div class="p-4 flex flex-col gap-2">
                <span class="text-[12px]">لباس ورزشی زنانه مدل k-150103</span>
                <div class="flex items-center justify-between">
                  <i class="fa-light fa-plus"></i>
                  <span class="text-[13px]">4,890,000</span>
                </div>
              </div>
            </div>
            <div class="min-w-[200px] bg-white rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300 shrink-0">
              <div class="w-full h-[180px] flex justify-center items-center bg-white">
                <img src="/src/assets/images/1.png" alt="product" class="w-[150px] h-[150px] object-contain rounded-full border-4 border-white " />
              </div>
              <div class="p-4 flex flex-col gap-2">
                <span class="text-[12px]">لباس ورزشی زنانه مدل k-150103</span>
                <div class="flex items-center justify-between">
                  <i class="fa-light fa-plus"></i>
                  <span class="text-[13px]">4,890,000</span>
                </div>
              </div>
            </div>
            <div class="min-w-[200px] bg-white rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300 shrink-0">
              <div class="w-full h-[180px] flex justify-center items-center bg-white">
                <img src="/src/assets/images/1.png" alt="product" class="w-[150px] h-[150px] object-contain rounded-full border-4 border-white " />
              </div>
              <div class="p-4 flex flex-col gap-2">
                <span class="text-[12px]">لباس ورزشی زنانه مدل k-150103</span>
                <div class="flex items-center justify-between">
                  <i class="fa-light fa-plus"></i>
                  <span class="text-[13px]">4,890,000</span>
                </div>
              </div>
            </div>
            <div class="min-w-[200px] bg-white rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300 shrink-0">
              <div class="w-full h-[180px] flex justify-center items-center bg-white">
                <img src="/src/assets/images/1.png" alt="product" class="w-[150px] h-[150px] object-contain rounded-full border-4 border-white " />
              </div>
              <div class="p-4 flex flex-col gap-2">
                <span class="text-[12px]">لباس ورزشی زنانه مدل k-150103</span>
                <div class="flex items-center justify-between">
                  <i class="fa-light fa-plus"></i>
                  <span class="text-[13px]">4,890,000</span>
                </div>
              </div>
            </div>
            <div class="min-w-[200px] bg-white rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300 shrink-0">
              <div class="w-full h-[180px] flex justify-center items-center bg-white">
                <img src="/src/assets/images/1.png" alt="product" class="w-[150px] h-[150px] object-contain rounded-full border-4 border-white " />
              </div>
              <div class="p-4 flex flex-col gap-2">
                <span class="text-[12px]">لباس ورزشی زنانه مدل k-150103</span>
                <div class="flex items-center justify-between">
                  <i class="fa-light fa-plus"></i>
                  <span class="text-[13px]">4,890,000</span>
                </div>
              </div>
            </div>
            <div class="min-w-[200px] bg-white rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300 shrink-0">
              <div class="w-full h-[180px] flex justify-center items-center bg-white">
                <img src="/src/assets/images/1.png" alt="product" class="w-[150px] h-[150px] object-contain rounded-full border-4 border-white " />
              </div>
              <div class="p-4 flex flex-col gap-2">
                <span class="text-[12px]">لباس ورزشی زنانه مدل k-150103</span>
                <div class="flex items-center justify-between">
                  <i class="fa-light fa-plus"></i>
                  <span class="text-[13px]">4,890,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 grid grid-cols-6 gap-3 w-[800px] mx-auto relative">
          <img src="/src/assets/images/Lovepik_com-380584880-running-shoes-vector-cartoon-sticker.png" alt="" class="absolute w-[60px] right-[-10px] top-[-20px]">

          <div class="col-span-4 grid grid-cols-3 gap-3">
            <div class="flex">
              <div class="group bg-white w-[200px] h-[220px] rounded-[10px] flex flex-col justify-between items-center border border-zinc-400 p-5 hover:scale-105 duration-300">
                <div class="flex justify-center items-center rounded-xl">
                  <img src="/src/assets/images/ed.png" alt="" class="w-[80px] h-[100px] object-contain">
                </div>
                  <span class="text-[9px] sm:text-[20px] leading-4">Nike</span>
              </div>
            </div>
            <div class="flex">
              <div class="group bg-white w-full h-[220px] rounded-[10px] flex flex-col justify-between items-center border border-zinc-400 p-5 hover:scale-105 duration-300">
                <div class="flex justify-center items-center rounded-xl">
                  <img src="/src/assets/images/ست-سویشرت-و-شلوار-ورزشی-مردانه-نایک-مدل-DS-2B1311-مشکی-1.jpg" alt="" class="w-[80px] h-[100px] object-contain">
                </div>
                  <span class="text-[9px] sm:text-[20px] leading-4">Nike</span>
              </div>
            </div>
            <div class="flex">
              <div class="group bg-white w-full h-[220px] rounded-[10px] flex flex-col justify-between items-center border border-zinc-400 p-5 hover:scale-105 duration-300">
                <div class="flex justify-center items-center rounded-xl">
                  <img src="/src/assets/images/ست-سویشرت-و-شلوار-ورزشی-مردانه-نایک-مدل-DS-2B1311-مشکی-1.jpg" alt="" class="w-[80px] h-[100px] object-contain">
                </div>
                <div class="flex flex-col text-[13px] text-center">
                  <span class="text-[9px] sm:text-[11px] leading-4">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1</span>
                  <span class="text-[10px] sm:text-[13px] text-end">1,480,000 <span class="text-[11px]">تومان</span></span>
                </div>
              </div>
            </div>


            <div class="flex col-span-2 justify-end">
              <div class="group bg-white w-[220px] h-full rounded-[10px] flex flex-col justify-between items-center border border-zinc-400 p-5 hover:scale-105 duration-300">
                <div class="flex justify-center items-center rounded-xl">
                  <img src="/src/assets/images/ست-سویشرت-و-شلوار-ورزشی-مردانه-نایک-مدل-DS-2B1311-مشکی-1.jpg" alt="" class="w-[180px] object-contain">
                </div>
                <div class="flex flex-col text-[13px] text-center">
                  <span class="text-[9px] sm:text-[11px] leading-4">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1</span>
                  <span class="text-[10px] sm:text-[13px] text-end">1,480,000 <span class="text-[11px]">تومان</span></span>
                </div>
              </div>
            </div>
            <div class="flex col-span-1 justify-start">
              <div class="group bg-white w-[220px] h-full rounded-[10px] flex flex-col justify-between items-center border border-zinc-400 p-5 hover:scale-105 duration-300">
                <div class="flex justify-center items-center rounded-xl">
                  <img src="/src/assets/images/ست-سویشرت-و-شلوار-ورزشی-مردانه-نایک-مدل-DS-2B1311-مشکی-1.jpg" alt="" class="w-[180px] object-contain">
                </div>
                <div class="flex flex-col text-[13px] text-center">
                  <span class="text-[9px] sm:text-[11px] leading-4">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1</span>
                  <span class="text-[10px] sm:text-[13px] text-end">1,480,000 <span class="text-[11px]">تومان</span></span>
                </div>
              </div>
            </div>

          </div>
          <div class="col-span-2 flex flex-col gap-3">
            <div class="group bg-white w-full h-[250px] rounded-[10px] flex flex-col justify-between items-center border border-zinc-400 p-5 hover:scale-105 duration-300">
              <div class="flex justify-center items-center rounded-xl">
                <img src="/src/assets/images/ست-سویشرت-و-شلوار-ورزشی-مردانه-نایک-مدل-DS-2B1311-مشکی-1.jpg" alt="" class="w-[120px] h-[130px] object-contain">
              </div>
              <div class="flex flex-col text-[13px] text-center">
                <span class="text-[9px] sm:text-[11px] leading-4">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1</span>
                <span class="text-[10px] sm:text-[13px] text-end">1,480,000 <span class="text-[11px]">تومان</span></span>
              </div>
            </div>

            <div class="group bg-white w-full h-[250px] rounded-[10px] flex flex-col justify-between items-center border border-zinc-400 p-5 hover:scale-105 duration-300">
              <div class="flex justify-center items-center rounded-xl">
                <img src="/src/assets/images/ست-سویشرت-و-شلوار-ورزشی-مردانه-نایک-مدل-DS-2B1311-مشکی-1.jpg" alt="" class="w-[120px] h-[130px] object-contain">
              </div>
              <div class="flex flex-col text-[13px] text-center">
                <span class="text-[9px] sm:text-[11px] leading-4">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1</span>
                <span class="text-[10px] sm:text-[13px] text-end">1,480,000 <span class="text-[11px]">تومان</span></span>
              </div>
            </div>

          </div>

        </div>
      </slot>
    </main>
   <div>
      <hr class="w-full text-[#E5E7EB]">
      <div class="flex container justify-end gap-2 py-4">
      <div class="border border-[#E5E7EB] p-2 flex justify-center items-center rounded-t-full rounded-full">
        <i class="fa-brands fa-instagram "></i>
      </div>
      <div class="border border-[#E5E7EB] p-2 flex justify-center items-center rounded-t-full rounded-full">
        <i class="fa-brands fa-telegram"></i>
      </div>
        <div class="border border-[#E5E7EB] p-2 flex justify-center items-center rounded-t-full rounded-full">
          <i class="fa-brands fa-whatsapp"></i>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

</style>
