<script setup>
import { ref } from "vue";

const isMenuBarOpen = ref(false);
const ismegaMenuOpen = ref(false);
const selectedMenu = ref(null);


const Menus = ref([
  {
    name: 'لباس ورزشی زنانه',
    products: [
      "تاپ ورزشی زنانه",
      "اورال ورزشی زنانه",
      "شلوار ورزشی زنانه",
      "دورس، هودی و سویشرت ورزشی زنانه",
      "لباس زیر زنانه",
      "نیم تنه ورزشی زنانه",
      "بلوز و استرج زنانه",
      "شلوارک و کشاله‌بند ورزشی زنانه",
      "مایو شنا زنانه",
      "دمپایی اسپرت",
      "ست لباس ورزشی زنانه",
      "تیشرت ورزشی زنانه",
      "لگ و نیم لگ ورزشی زنانه",
      "دامن ورزشی زنانه",
      "کفش ورزشی زنانه",
      "جوراب ورزشی زنانه"
    ]
  },
  {name:
        'لباس ورزشی مردانه',
    products: [
      "رکابی بدنسازی مردانه",
      "شلوارک ورزشی مردانه",
      "شلوار ورزشی مردانه",
      "لباس زیر مردانه",
      "تیشرت ورزشی مردانه",
      "دورس، هودی و سویشرت مردانه",
      "لگ ورزشی مردانه",
      "دمپایی اسپرت",
      "جوراب ورزشی مردانه",
      "ست لباس ورزشی مردانه",
      "بلوز و استرج ورزشی مردانه",
      "نیم لگ و کشاله بند ورزشی مردانه",
      "کفش ورزشی مردانه",
      "مایو مردانه"
    ]
  },
  {
    name: 'لوازم ورزشی',
    products: ["توپ فوتبال","کتل بل","دستگاه چندکاره","نیمکت بدنسازی","طناب ورزشی","توپ سوئیسی", "کش مقاومتی", "هالتر", "دمبل"]
  },
  {
    name: 'انواع کتونی',
    products: ["کتونی رانینگ", "کتونی تمرینی", "کتونی پیاده‌روی", "کتونی مخصوص باشگاه"]
  },
  {
    name: 'انواع کیف و ساک ورزشی',
    products: ["کتونی رانینگ", "کتونی تمرینی", "کتونی پیاده‌روی", "کتونی مخصوص باشگاه"]
  },
  {
    name: 'لوازم شنا',
     products:[
      "لوازم فیتنس و بدنسازی",
      "گریپستر و تقویت مچ",
      "مچ بند و بند لیفت",
      "کوله و شورتیگ",
      "حوله ورزشی",
      "زانوبند و ساق بند بدنسازی",
      "لوازم یوگا، ایروبیک و پیلاتس",
      "کش بدنسازی",
      "دستکش بدنسازی",
      "کیف و ساک ورزشی",
      "ماساژور",
      "جا پودر و چاقی",
      "توپ ورزشی"
    ]
  },
  {
    name: 'لوازم ورزشی و بدنسازی',
    products: ["کتونی رانینگ", "کتونی تمرینی", "کتونی پیاده‌روی", "کتونی مخصوص باشگاه"]
  },
  {
    name: 'جاگ واتر، ماگ و شیکر',
    products : [
      "مخلوط کن و شیکر برقی",
      "شیکر بدنسازی دو تیکه",
      "فند و توپ شیکر",
      "ماگ و فلاسک",
      "شیکر بدنسازی",
      "شیکر بدنسازی یک تیکه",
      "شیکر دو محفظه",
      "قمقمه ورزشی",
      "جاک واتر",
      "شیکر استیل",
      "شیکر بدنسازی سه تیکه",
      "جا پودر و چاقی"
    ]
  },
]);

const clickMenuBar = () => {
  isMenuBarOpen.value = !isMenuBarOpen.value;
};

const megamMenuOpen = () => {
  ismegaMenuOpen.value = !ismegaMenuOpen.value;
};


const selectMenu = (menu) => {
  selectedMenu.value = menu;
  ismegaMenuOpen.value = false;
};
</script>

<template>
  <div class="py-[20px] mt-[20px] border-y border-zinc-300 sm:flex hidden">
    <div class="container">
      <nav class="relative">
        <ul class="flex gap-4 text-[13px] text-[#4A4A4A]">
          <li @click="megamMenuOpen" class="flex items-center gap-2 border-l border-[#FF6B35] pl-4 cursor-pointer">
            <i class="ki-filled ki-category text-[20px]"></i>
            دسته بندی محصولات
          </li>
          <li>
            <router-link to="/">خانه</router-link>
          </li>
          <li>
            <router-link to="/contact">تماس با ما</router-link>
          </li>
          <li>
            <router-link to="/about">درباره ما</router-link>
          </li>
        </ul>

        <div
            v-if="ismegaMenuOpen"
            class="absolute top-[40px] z-50 w-[1200px] max-w-full h-[500px] bg-white shadow-lg rounded-lg flex"
        >
          <ul class="flex flex-col bg-zinc-200 w-[280px] h-full text-[15px] overflow-auto no-scrollbar">
            <li
                v-for="menu in Menus"
                :key="menu.name"
                class="group hover:bg-white hover:border-y border-[#ff6b35] cursor-pointer"
                @click="selectMenu(menu)"
            >
              <div class="flex items-center justify-between p-4 border-b border-zinc-400">
                <router-link to="/product">{{ menu.name }}</router-link>
                <i class="ki-filled ki-left transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-75"></i>
              </div>
            </li>
          </ul>

          <!-- چپ: محتوا -->
          <div class="flex flex-col overflow-auto gap-2 p-4 w-full">
            <p class="text-[#ff6b35] font-bold text-[22px]" v-if="selectedMenu">{{ selectedMenu.name }}</p>
            <ul class="grid grid-cols-2 gap-4 text-sm text-gray-950" v-if="selectedMenu">
              <li v-for="(item, index) in selectedMenu.products" :key="index">
                <a href="#" class="hover:text-[#ff6b35]">{{ item }}</a>
              </li>
            </ul>
            <p v-else class="text-gray-500">برای مشاهده محصولات، یک دسته‌بندی را انتخاب کنید.</p>
          </div>
        </div>
      </nav>
    </div>
  </div>

  <button @click="clickMenuBar" class="flex items-center justify-center w-[34px] h-[34px] border rounded-[15px] border-[#e5e7eb] p-0 sm:hidden">
    <i class="fa-light fa-bars text-[#818181]"></i>
  </button>
</template>
