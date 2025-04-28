<script setup>
import {ref , computed} from "vue";
import {useRoute} from "vue-router";
import Modal from "@/components/Modal.vue";

const sizes=["۲Xl","Xl","M","L"]
const selectedSize = ref(null)
const counter=ref(1)
const plusCount=()=>{
  counter.value++
}
const minusCount=()=>{
  if(counter.value>0){
    counter.value--;
  }
}
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
const isModalOpen=ref(false);
const openCloseModal=()=>{
  isModalOpen.value= !isModalOpen.value;
}
const isPostModalOpen=ref(false);
const postModalOpen=()=>{
  isPostModalOpen.value= !isPostModalOpen.value;
}
const isTruckModalOpen=ref(false);
const isPostModalTruckOpen=()=>{
  isTruckModalOpen.value= !isTruckModalOpen.value;
}
</script>

<template>
<div class="container grid grid-cols-2 py-8 px-4">
  <div class="col-span-1 flex flex-col items-center px-8 gap-3">
    <div class="flex gap-5">
    <div class="flex flex-col gap-5 items-end overflow-hidden h-[480px] overflow-y-auto">
      <img :src="product.image" alt="" class="w-[80px] object-contain" />
      <img :src="product.image" alt="" class="w-[80px] object-contain" />
      <img :src="product.image" alt="" class="w-[80px] object-contain" />
      <img :src="product.image" alt="" class="w-[80px] object-contain" />
      <img :src="product.image" alt="" class="w-[80px] object-contain" />
      <img :src="product.image" alt="" class="w-[80px] object-contain" />
      <img :src="product.image" alt="" class="w-[80px] object-contain" />
      <img :src="product.image" alt="" class="w-[80px] object-contain" />
      <img :src="product.image" alt="" class="w-[80px] object-contain" />
      <img :src="product.image" alt="" class="w-[80px] object-contain" />
    </div>
    <div class="w-[550px] h-[489px] overflow-hidden flex items-start">
      <img :src="product.image" alt="" class="w-full object-contain" />
    </div>
    </div>
    <div class="bg-[#f7f9ff] p-4 flex flex-col gap-5 w-full">
      <div class="bg-white border border-[#2e82e1] flex items-center h-[80px] gap-5 p-5">
        <img src="/src/assets/images/free-shipping.png" alt="" class="w-[30px] h-[30px] object-contain" />
        <div class="flex flex-col h-full justify-center gap-2 text-[15px]">
          <span>با سفارش این محصول  <span class="text-[#2e82e1]">ارسال رایگان</span> دریافت کنید</span>
          <span>ارسال رایگان فقط شامل پیک عادی و پست پیشتاز میباشد</span>
        </div>
      </div>
      <div class="flex flex-col gap-3 w-full">
      <span class="text-[#2e82e1]">روش های ارسال</span>
        <div @click="postModalOpen" class="w-full justify-between flex items-center text-[14px]">
          <span><span class="text-[#4c4c4c]">شهر تهران</span>:  پیک عادی یک روزه یا پیک فوری 3 ساعته</span>
          <i class="ki-filled ki-left"></i>
        </div>
        <hr class="w-full">
        <div @click="isPostModalTruckOpen" class="w-full justify-between flex items-center text-[14px]">
          <span><span class="text-[#4c4c4c]">شهرستان</span>: پست پیشتاز یا تیپاکس</span>
          <i class="ki-filled ki-left"></i>
        </div>
      </div>
    </div>
  </div>
  <Modal :show="isPostModalOpen" @close="isPostModalOpen = false">
    <template #default>
      <div class="p-6 bg-white rounded-lg text-black flex flex-col items-center justify-center w-[500px] text-[#636669] font-medium">
        <img src="/src/assets/images/tehran-delivery-popup-2.png" class="w-[80px]">
        <h2 class="text mt-4 mb-2">ارسال شهر تهران</h2>
        <p class="text-[15px]"> <span class="text-blue-500">پیک عادی:</span><br> در اولین روز کاری بعد بین ساعت 14 الی 20 تحویل مشتریان می‌شود. هزنیه‌ی ارسال 60 هزار تومان می‌باشد.
          <br><span class="text-blue-500">پیک فوری:</span><br>
          طی 3 ساعت کاری تحویل ارسال می‌شود. هزینه پیک فوری درب منزل باید به پیک پرداخت شود.
        </p>
        <button @click="isPostModalOpen = false" class="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded">
         متوجه شدم
        </button>
      </div>
    </template>
  </Modal>

  <Modal :show="isTruckModalOpen" @close="isTruckModalOpen = false">
    <template #default>
      <div class="p-6 bg-white rounded-lg text-black flex flex-col items-center justify-center w-[500px] text-[#636669] font-medium">
        <img src="/src/assets/images/delivery-truck-1.png" class="w-[80px]">
        <h2 class="text mt-4 mb-2">ارسال شهرستان</h2>
        <p class="text-[15px]"> <span class="text-blue-500">پست پیشتاز:</span> در اولین روز کاری بعد ساعت 8 صبح به اداره پست تحویل داده می‌شود. هزینه ارسال 60 هزار تومان می‌باشد. عموما بین 2 تا 5 روز کاری بدست مشتریان می‌رسد.  <span class="text-blue-500">تیپاکس:</span> در اولین روز کاری بعد به شرکت تیپاکس تحویل داده می‌شود. هزینه ارسال بر عهده مشتری است و لازم است درب منزل به مامور تیپاکس پرداخت شود. عموما بین 1 تا 4 روز کاری بدست مشتریان می‌رسد.</p>
        <button @click="isTruckModalOpen = false" class="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded">
          متوجه شدم
        </button>
      </div>
    </template>
  </Modal>

  <div class="col-span-1 relative flex flex-col">
<div class="flex flex-col gap-2 absolute left-[50px] top-10 right-auto">
    <div class="w-[38px] h-[38px]  p-2 flex justify-center items-center bg-zinc-300 rounded-full">
      <i class="fa-light fa-heart text-zinc-800 text-[20px]"></i>
    </div>
    <div class="w-[38px] h-[38px]  p-2 flex justify-center items-center bg-zinc-300 rounded-full">
      <i class="fa-light fa-share-nodes text-zinc-800 text-[20px]"></i>
    </div>
</div>
    <div class="flex items-center gap-2">
      <span class="text-[#999999] text-[13px]">مه اسپرت</span>
      <i class="ki-filled ki-left text-[10px] text-[#999999]"></i>
      <span class="text-[#999999] text-[13px]">لباس ورزشی زنانه</span>
      <i class="ki-filled ki-left text-[10px] text-[#999999]"></i>
      <span class="text-[#ff6b35] text-[13px]">ست لباس ورزشی زنانه</span>
    </div>
    <div class="mt-5">
      <span class="text-[20px] font-medium">{{ product.title }}</span>
      <div class="flex gap-2 text-[14px] font-medium mt-2">
      <span class="text-[#999999]">کد محصول :</span>
        <span>214879</span>
      </div>
      <div class="flex gap-2 text-[14px] font-medium mt-2">
        <span class="text-[#999999]">طرح برند :</span>
        <span>214879</span>
      </div>
      <div class="flex gap-2 text-[15px] mt-2">
        <span class="text-[#999999]">دسته بندی :</span>
        <span>ست لباس ورزشی زنانه , نیم تنه ورزشی زنانه , لگ و نیم لگ ورزشی زنانه</span>
      </div>
      <div class="flex gap-3 items-center bg-zinc-200 p-2 max-w-sm rounded-l-full mt-5">
        <img src="/src/assets/images/free-shipping.png" class="w-[30px] h-full" />
        <span class="text-[16px]">با سفارش این محصول <span class="text-[#1c65f4]"> ارسال رایگان </span>دریافت کنید </span>
      </div>
    </div>
    <div class="mt-5 flex flex-col gap-2">
      <span class="text-[15px] font-medium border-s-2 px-2 border-[#ff6b35]">ویژگی ها</span>
      <ul class="flex flex-col gap-2">
        <li>جنس: ترکیب پلی استر و اسپاندکس</li>
        <li>وارداتی: ساخت ویتنام (بالاترین کیفیت نزدیک به اورجینال)</li>
        <li>قواره: جذب</li>
        <li>قد لگ: بلند تا قوزک پا</li>
        <li>پهنای کمر: 10 سانتی متر</li>
        <li>نوع فاق: بلند</li>
        <li>دارای نیم تنه کاپ دار</li>
        <li>دارای بند های پهن</li>
      </ul>
    </div>
    <span class="mt-3 pb-5 border-b-4 border-gray-200"><a href="#" class="flex items-center gap-2 text-[#1c65f4]">مشاهده بیشتر <i class="ki-filled ki-down"></i></a></span>
    <div class="p-4 rounded-xl border border-zinc-300 mt-5 flex justify-between items-center">
      <span class="text-[20px] font-medium">{{product.price}}<span class="text-[13px]">تومان</span></span>
      <div class="border-s-4 border-e-4 border-y border-[#1c65f4] px-4 py-2 rounded-s-full rounded-e-full">امکان پرداخت در <span class="text-[#1c65f4]">4 قسط</span> ۷۴۸,۷۵۰ تومانی</div>
    </div>
    <div class="flex flex-col p-4 bg-zinc-200 mt-5 gap-5 rounded-xl">
      <div class="flex justify-between">
      <span class="text-[14px] font-medium border-s-2 px-2 border-[#ff6b35]">سایز لباس</span>
        <span class="flex items-center text-[14px] font-medium text-[#1c65f4] gap-x-2 cursor-pointer">راهنمای سایز <i class="ki-filled ki-left"></i></span>
      </div>
      <div class="flex gap-4">
      <div v-for="size in sizes" :key="size" @click="selectedSize = size"  :class="[
      'p-2 border bg-white w-[70px] h-[31px] flex justify-center items-center rounded-md text-[15px] cursor-pointer relative',
      selectedSize === size ? 'border-orange-500' : 'border-zinc-900'
    ]"><span class="absolute w-[10px] h-[10px] rounded-full"></span>
        {{size}}</div>
      </div>
    </div>
    <div class="flex gap-2 mt-5">
      <div class="bg-white w-[120px] flex justify-between p-2 items-center rounded-md border border-zinc-400 text-[15px]"><i @click="minusCount" class="fa-light fa-minus cursor-pointer"  :class="counter > 0 ? 'text-zinc-800' : 'text-zinc-400'"></i>{{counter}}<i @click="plusCount" class="fa-light fa-plus text-zinc-800 cursor-pointer"></i></div>
      <button @click="openCloseModal" class="bg-[#ff6b35] text-[15px] py-2 px-8 text-white rounded-md">افزودن به سبد خرید</button>
    </div>
  </div>
  <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
  <div class="modal w-[460px] h-[435px] bg-white flex flex-col p-4 rounded-md">
    <div @click="openCloseModal" class="w-[20px] h-[20px] flex justify-center items-center rounded-full border border-[#ff6b35] p-3 cursor-pointer">
      <i class="fa-thin fa-xmark"></i>
    </div>
  <div class="flex flex-col items-center gap-[15px]">
    <img :src="product.image" alt="" class="w-[120px] object-contain" />
    <div class="flex items-center gap-2">
      <span class="w-[20px] h-[20px] p-2 flex items-center justify-center bg-[#ff6b35] rounded-full"><i class="fa-light fa-check text-white text-[13px]"></i></span>
      <span class="text-zinc-700">به سبد خرید اضافه شد!</span>
    </div>
    <div class="w-full bg-[#ffeee1] p-4 rounded-md flex flex-col gap-2">
      <div class="flex items-center gap-2">
      <img src="/src/assets/images/free-delivery.png" alt="" class="w-[35px]">
        <span class="text-[#ff6b35]">هزینه ارسال رو مهمون ما شدی!</span>
      </div>
      <hr class="bg-[#ff6b35] w-full h-[5px] rounded-xl">
      <span class="text-[#9c4300]">ارسال رایگان (فقط پیک عادی و پست پیشتاز)</span>
    </div>
    <div class="flex w-full gap-2">
      <button @click="openCloseModal" class="bg-[#f5f5f5] text-[15px] w-[50%] py-2  text-zinc-700 rounded-md">ادامه خرید</button>
      <router-link to="/cart" class="bg-[#ff6b35] text-[15px] w-[50%] py-2 text-white rounded-md flex justify-center items-center">
        تکمیل خرید
      </router-link>
    </div>
  </div>
  </div>
  </div>
</div>
</template>

<style scoped>

</style>