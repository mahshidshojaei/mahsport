<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goToProduct = (id) => {
  router.push(`/product/${id}`)
}
import Checkbox from "@/components/Checkbox.vue";
import Input from "@/components/Input.vue";
import Toggle from "@/components/Toggle.vue";
import {ref} from "vue";
const filteredBrands=ref([])
const brands = [
  "Adidas",
  "Jordan",
  "Nike",
  "Reebok",
  "UFC",
  "Asics",
  "Venum",
  "Filla",
  "Lee",
  "New Balance",
  "Speedo",
  "Gymshark",
  "Ronnie coleman",
  "NBA"
];
const sizes = [
  "2XL", "3XL", "4XL", "5XL", "6XL", "Free Size",
  "2XL", "2XL", "2XL", "2XL", "2XL", "2XL", "2XL", "2XL", "2XL",
  "3XL", "4XL", "5XL", "6XL", "Free Size",
  "2XL", "2XL", "2XL", "2XL", "2XL", "2XL", "2XL", "2XL"
];

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
    price: "1,480,000",
    image: "/src/assets/images/12.png"
  },
  {
    id: 3,
    title: "ست ورزشیNew Balance",
    price: "1,480,000",
    image: "/src/assets/images/16.png"
  },
  {
    id: 4,
    title: "ست ورزشیLee",
    price: "1,480,000",
    image: "/src/assets/images/111.png"
  },
  {
    id: 5,
    title: "ست ورزشیFilla",
    price: "1,480,000",
    image: "/src/assets/images/116.png"
  },
  {
    id: 6,
    title: "ست ورزشیVenum",
    price: "1,480,000",
    image: "/src/assets/images/113.png"
  },
  {
    id: 7,
    title: "ست ورزشیAsics",
    price: "1,480,000",
    image: "/src/assets/images/114.png"
  },
  {
    id: 8,
    title: "ست ورزشیUFC",
    price: "1,480,000",
    image: "/src/assets/images/115.png"
  },
  {
    id: 9,
    title: "ست ورزشیReebok",
    price: "1,480,000",
    image: "/src/assets/images/112.png"
  },
  {
    id: 10,
    title: "ست ورزشیNike",
    price: "1,480,000",
    image: "/src/assets/images/119.png"
  }
]


const typing = (event) => {
  const typedLetter = event.target.value.toLowerCase();
   filteredBrands.value = brands.filter(brand => brand.toLowerCase().startsWith(typedLetter));
};


</script>

<template>
<div class="grid grid-cols-5">
  <div class="flex flex-col gap-2 col-span-1 px-6 py-4">
    <div class="p-4 border border-[#ff6b35] flex flex-col gap-2 rounded-lg overflow-y-auto overflow-x-hidden no-scrollbar">
      <span class="text-[12px]">نمایش</span>
      <hr class="w-full">
      <Toggle label="نمایش کالا های تخفیف ویژه" class="w-full justify-between"/>
      <Toggle label="نمایش کالا های موجود" class="w-full justify-between"/>
      <div>

      </div>
    </div>
    <div class="relative p-4 border border-[#ff6b35] flex flex-col gap-2 rounded-lg h-[400px] overflow-y-auto overflow-x-hidden no-scrollbar">
    <span class="text-[12px]">برند</span>
    <hr class="w-full">
    <Input class="!w-[215px]" placeholder="جستجو..." @input="typing($event)"/>
    <div v-for="brand in brands">
      <Checkbox class="w-[150px]">{{brand}}</Checkbox>
    </div>
      <div v-for="filtered in filteredBrands" class="absolute z-20 top-0 bg-white p-4 w-full flex flex-col">
        <span>{{filtered}}</span>
      </div>
  </div>
    <div class="p-4 border border-[#ff6b35] flex flex-col gap-2 rounded-lg h-[400px] overflow-y-auto overflow-x-hidden no-scrollbar">
    <div class="flex flex-col gap-2 sticky top-0 z-10">
    <span class="text-[12px]">سایز</span>
    <hr class="w-full">
    <Input class="!w-[215px]" placeholder="جستجو..." />
    </div>
    <div v-for="size in sizes">
      <Checkbox class="w-[150px]">{{size}}</Checkbox>
    </div>
  </div>
  </div>

  <div class="col-span-4 px-6 py-4 grid grid-cols-4 gap-3">
    <div
        v-for="product in products"
        :key="product.id"
        class="group bg-white h-[250px] sm:h-[300px] rounded-[15px] flex flex-col justify-between items-center cursor-pointer p-4"
        @click="goToProduct(product.id)"
    >
      <div class="bg-white sm:w-[220px] flex justify-center items-center rounded-xl">
          <img :src="product.image" class="w-[150px] sm:w-[150px] ">
        </div>
        <div class="flex flex-col text-[15px] w-full gap-2">
          <span class="text-[10px] sm:text-[13px]">{{product.title}}</span>
          <span class="text-[11px] sm:text-[15px] w-full text-end">{{product.price}}<span class="text-[12px]">تومان</span></span>
        </div>
      </div>
  </div>
</div>
</template>

<style scoped>

</style>