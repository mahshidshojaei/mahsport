<!-- Layout.vue -->
<script setup>
import Header from './Header.vue'
import Menu from "./Menu.vue";
import Slider from "./Slider.vue";
</script>

<template>
  <div class="layout">
    <Header />
    <Menu/>
    <!-- بخش محتوای تغییرپذیر که بر اساس هر صفحه تغییر می‌کنه -->
    <main>
      <slot>
        <Slider/>
        <div class="mt-10 relative">
        <img src="/src/assets/images/Vector 4.png" alt="" class="w-full h-[400px] absolute" />
          <p class="absolute text-[20px] top-[-18px] right-2">پیشنهاد شگفت انگیز</p>
          <img src="/src/assets/images/Vector 5.png" alt="" class="absolute top-[-50px]">
          <div class="container flex h-[400px] items-center justify-evenly">
            <div class="w-full max-w-[200px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 z-50 ">
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
            <div class="w-full max-w-[200px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 z-50 ">
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
            <div class="w-full max-w-[200px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 z-50 z-50">
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
            <div class="w-full max-w-[200px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 z-50 ">
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
            <div class="w-full max-w-[200px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 z-50 ">
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
      </slot> <!-- محتوای هر صفحه در اینجا نمایش داده میشه -->
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* اطمینان از اینکه کل صفحه پوشش داده بشه */
}

</style>
