<script setup>
import {ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const swiperIsBeginning = ref({
  'tags': true
});
const swiperIsEnd = ref({
  'tags': false
});
const swiperInstance = ref({
  'tags': null
});
const onSwiperInit = (instance, name) => {
  swiperInstance.value[name] = instance;
};
const onSlideChange = (name) => {
  if (!swiperInstance.value[name]) return;
  swiperIsBeginning.value[name] = swiperInstance.value[name].isBeginning;
  swiperIsEnd.value[name] = swiperInstance.value[name].isEnd;
};
</script>

<template>

  <div class="w-[1400px] mx-auto mt-10">
    <nav class="w-[calc(100%-32px)] mx-auto mt-4 relative flex items-center">
      <button v-show="!swiperIsBeginning.tags" aria-label="Previous Slide" class="prev absolute -left-4 z-50 flex items-center justify-center w-[32px] h-[32px] bg-white rounded-full border-2 border-zinc-100 cursor-pointer">
        <i class="ki-filled ki-left text-[15px]"/>
      </button>
      <swiper
          :loop="false"
          :modules="[Navigation]"
          :navigation="{prevEl: '.prev', nextEl: '.next'}"
          slides-per-view="auto"
          :space-between="10"
          :centered-slides="false"
          @slideChange="onSlideChange('tags')"
          @swiper="onSwiperInit($event, 'tags')">

        <swiper-slide class="!w-fit">
          <div class="group bg-[#f5f5f5] w-[250px] h-[300px] rounded-[15px] flex flex-col justify-between items-center hover:bg-[#f2cce2] p-4">
            <div class="bg-white w-[220px] flex justify-center items-center rounded-xl">
              <img src="/src/assets/images/نیم-تنه-ورزشی-زنانه-نایک-مدل-Dri-Fit-LL1-طوسی-تیره-222.jpg" alt="" class="w-[190px] ">
            </div>
            <div class="flex flex-col text-[15px]">
              <span class="text-[13px]">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</span>
              <span class="w-full text-end">1,480,000 <span class="text-[12px]">تومان</span></span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="!w-fit">
          <div class="group bg-[#f5f5f5] w-[250px] h-[300px] rounded-[15px] flex flex-col justify-between items-center hover:bg-[#f2cce2] p-4">
            <div class="bg-white w-[220px] flex justify-center items-center rounded-xl">
              <img src="/src/assets/images/نیم-تنه-ورزشی-زنانه-نایک-مدل-Dri-Fit-LL1-طوسی-تیره-222.jpg" alt="" class="w-[190px] ">
            </div>
            <div class="flex flex-col text-[15px]">
              <span class="text-[13px]">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</span>
              <span class="w-full text-end">1,480,000 <span class="text-[12px]">تومان</span></span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="!w-fit">
          <div class="group bg-[#f5f5f5] w-[250px] h-[300px] rounded-[15px] flex flex-col justify-between items-center hover:bg-[#f2cce2] p-4">
            <div class="bg-white w-[220px] flex justify-center items-center rounded-xl">
              <img src="/src/assets/images/نیم-تنه-ورزشی-زنانه-نایک-مدل-Dri-Fit-LL1-طوسی-تیره-222.jpg" alt="" class="w-[190px] ">
            </div>
            <div class="flex flex-col text-[15px]">
              <span class="text-[13px]">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</span>
              <span class="w-full text-end">1,480,000 <span class="text-[12px]">تومان</span></span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="!w-fit">
          <div class="group bg-[#f5f5f5] w-[250px] h-[300px] rounded-[15px] flex flex-col justify-between items-center hover:bg-[#f2cce2] p-4">
            <div class="bg-white w-[220px] flex justify-center items-center rounded-xl">
              <img src="/src/assets/images/نیم-تنه-ورزشی-زنانه-نایک-مدل-Dri-Fit-LL1-طوسی-تیره-222.jpg" alt="" class="w-[190px] ">
            </div>
            <div class="flex flex-col text-[15px]">
              <span class="text-[13px]">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</span>
              <span class="w-full text-end">1,480,000 <span class="text-[12px]">تومان</span></span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="!w-fit">
          <div class="group bg-[#f5f5f5] w-[250px] h-[300px] rounded-[15px] flex flex-col justify-between items-center hover:bg-[#f2cce2] p-4">
            <div class="bg-white w-[220px] flex justify-center items-center rounded-xl">
              <img src="/src/assets/images/نیم-تنه-ورزشی-زنانه-نایک-مدل-Dri-Fit-LL1-طوسی-تیره-222.jpg" alt="" class="w-[190px] ">
            </div>
            <div class="flex flex-col text-[15px]">
              <span class="text-[13px]">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</span>
              <span class="w-full text-end">1,480,000 <span class="text-[12px]">تومان</span></span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="!w-fit">
          <div class="group bg-[#f5f5f5] w-[250px] h-[300px] rounded-[15px] flex flex-col justify-between items-center hover:bg-[#f2cce2] p-4">
            <div class="bg-white w-[220px] flex justify-center items-center rounded-xl">
              <img src="/src/assets/images/نیم-تنه-ورزشی-زنانه-نایک-مدل-Dri-Fit-LL1-طوسی-تیره-222.jpg" alt="" class="w-[190px] ">
            </div>
            <div class="flex flex-col text-[15px]">
              <span class="text-[13px]">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</span>
              <span class="w-full text-end">1,480,000 <span class="text-[12px]">تومان</span></span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="!w-fit">
          <div class="group bg-[#f5f5f5] w-[250px] h-[300px] rounded-[15px] flex flex-col justify-between items-center hover:bg-[#f2cce2] p-4">
            <div class="bg-white w-[220px] flex justify-center items-center rounded-xl">
              <img src="/src/assets/images/نیم-تنه-ورزشی-زنانه-نایک-مدل-Dri-Fit-LL1-طوسی-تیره-222.jpg" alt="" class="w-[190px] ">
            </div>
            <div class="flex flex-col text-[15px]">
              <span class="text-[13px]">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</span>
              <span class="w-full text-end">1,480,000 <span class="text-[12px]">تومان</span></span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="!w-fit">
          <div class="group bg-[#f5f5f5] w-[250px] h-[300px] rounded-[15px] flex flex-col justify-between items-center hover:bg-[#f2cce2] p-4">
            <div class="bg-white w-[220px] flex justify-center items-center rounded-xl">
              <img src="/src/assets/images/نیم-تنه-ورزشی-زنانه-نایک-مدل-Dri-Fit-LL1-طوسی-تیره-222.jpg" alt="" class="w-[190px] ">
            </div>
            <div class="flex flex-col text-[15px]">
              <span class="text-[13px]">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</span>
              <span class="w-full text-end">1,480,000 <span class="text-[12px]">تومان</span></span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="!w-fit">
          <div class="group bg-[#f5f5f5] w-[250px] h-[300px] rounded-[15px] flex flex-col justify-between items-center hover:bg-[#f2cce2] p-4">
            <div class="bg-white w-[220px] flex justify-center items-center rounded-xl">
              <img src="/src/assets/images/نیم-تنه-ورزشی-زنانه-نایک-مدل-Dri-Fit-LL1-طوسی-تیره-222.jpg" alt="" class="w-[190px] ">
            </div>
            <div class="flex flex-col text-[15px]">
              <span class="text-[13px]">نیم تنه ورزشی زنانه نایک مدل Dri Fit-LL1 مشکی</span>
              <span class="w-full text-end">1,480,000 <span class="text-[12px]">تومان</span></span>
            </div>
          </div>
        </swiper-slide>

        <template v-if="!swiperIsEnd.tags" v-slot:container-start>
          <span class="absolute w-[60px] top-0 left-0 z-10 h-full bg-gradient-to-l from-transparent to-zinc-100 pointer-events-none"/>
        </template>
        <template v-if="!swiperIsBeginning.tags" v-slot:container-end>
          <span class="absolute w-[60px] top-0 right-0 z-10 h-full bg-gradient-to-r from-transparent to-zinc-100 pointer-events-none"/>
        </template>
      </swiper>
      <button v-show="!swiperIsEnd.tags" aria-label="Next Slide" class="next absolute -right-4 z-50 flex items-center justify-center w-[32px] h-[32px] bg-white rounded-full border-2 border-zinc-100 cursor-pointer">
        <i class="ki-filled ki-right text-[15px]"/>️
      </button>
    </nav>
  </div>
</template>

<style scoped>

</style>