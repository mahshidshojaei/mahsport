<script setup>
import { reactive, ref } from "vue";
import Modal from "@/components/Modal.vue";
import TextInput from "@/components/TextInput.vue";
import Neshan from "@/components/Neshan.vue";

const isRegistrationModalOpen = ref(false);
const RegistrationModal = () => {
  isRegistrationModalOpen.value = !isRegistrationModalOpen.value;
};

const addAddressArray = ref([
  { label: 'نام', key: 'firstName', required: true, minLength: 3 },
  { label: 'نام خانوادگی', key: 'lastName', required: true, minLength: 3 },
  { label: 'موبایل', key: 'mobile', required: true, pattern: /^09\d{9}$/ },
  { label: 'استان', key: 'province', required: true },
  { label: 'شهر', key: 'city', required: true },
  { label: 'آدرس کامل', key: 'fullAddress', required: true, minLength: 10 },
  { label: 'کدپستی (اختیاری)', key: 'postalCode', required: false, pattern: /^\d{10}$/ }
]);

const formData = reactive({
  firstName: '',
  lastName: '',
  mobile: '',
  province: '',
  city: '',
  fullAddress: '',
  postalCode: ''
});

const errors = reactive({
  firstName: '',
  lastName: '',
  mobile: '',
  province: '',
  city: '',
  fullAddress: '',
  postalCode: ''
});

const validateForm = () => {
  let isValid = true;
  addAddressArray.value.forEach(field => {
    const value = formData[field.key];
    if (field.required && !value) {
      errors[field.key] = `وارد کردن ${field.label} الزامی است.`;
      isValid = false;
    } else if (field.minLength && value.length < field.minLength) {
      errors[field.key] = `${field.label} باید حداقل ${field.minLength} کاراکتر باشد.`;
      isValid = false;
    } else if (field.pattern && !field.pattern.test(value)) {
      errors[field.key] = `${field.label} فرمت صحیحی ندارد.`;
      isValid = false;
    } else {
      errors[field.key] = '';
    }
  });
  return isValid;
};


const userAddressDetails = ref([]);


const savedAddresses = localStorage.getItem('userAddressDetails');
if (savedAddresses) {
  userAddressDetails.value = JSON.parse(savedAddresses);
}

const submitUserAddress = () => {
  if (validateForm()) {
    alert("اطلاعات با موفقیت ثبت شد!");
    userAddressDetails.value.push({...formData});
    localStorage.setItem('userAddressDetails', JSON.stringify(userAddressDetails.value));
    isRegistrationModalOpen.value = false;
  }
};
const removeCart=()=>{
  localStorage.removeItem('userAddressDetails');
}
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

      <div class="flex justify-between items-center px-10 py-2">
        <span>آدرس های شما</span>
        <button @click="RegistrationModal" class="flex items-center gap-2 text-[13px] text-white rounded-lg flex-row-reverse bg-blue-500 p-3">
          افزودن آدرس جدید
          <i class="fa-light fa-plus"></i>
        </button>
      </div>


          <div class="px-10 rounded-lg">
            <div v-if="userAddressDetails.length > 0" class="flex flex-col gap-4">
              <div v-for="(address, index) in userAddressDetails" :key="index" class="border border-[#FF6B34] p-4 rounded-lg shadow-sm bg-gray-50 flex justify-between items-end">
                <div class="flex flex-col gap-1">
                <p>{{ address.fullAddress }}</p>
                <p class="flex items-center gap-2 text-[14px] text-zinc-700"><i class="fa-thin fa-phone-flip"></i>{{ address.mobile }}</p>
               <p class="text-[14px] text-zinc-700">{{address.firstName}}{{address.lastName}}</p>
                </div>
                <div @click="removeCart" class="flex gap-2 text-[12px] text-[#FF6B34]"><a href="#">پاک کردن</a>
                  <span>|</span>
                <a href="#">ویرایش نشانی</a></div>
              </div>
            </div>
            <div v-else class="text-center text-gray-400">
              <div v-if="!savedAddresses" class="flex flex-col justify-between items-center px-10 py-2 text-[#abadae] font-medium gap-2">
                <i class="fa-thin fa-circle-exclamation text-[30px]"></i>
                <span>شما آدرسی وارد نکرده اید</span>
                <span>لطفا ابتدا "افزودن آدرس جدید" را بزنید</span>
              </div>
            </div>
          </div>
      <router-link to="/cart" class="flex items-center px-10 py-2 text-[13px] gap-2">
        <span class="text-[#ff6b35]">
          <i class="ki-filled ki-right text-gray-900"></i>
          بازگشت به سبد خرید
        </span>
      </router-link>
    </div>

    <Modal :show="isRegistrationModalOpen" @close="isRegistrationModalOpen=false">
      <template #default>
        <div class="bg-white w-[550px] h-[600px] flex flex-col relative rounded-xl overflow-hidden">

          <div class="flex items-center gap-2 bg-white p-4 sticky top-0 z-10 border-b border-gray-200">
            <i @click="RegistrationModal" class="fas fa-times"></i>
            <span>جزئیات نشانی</span>
          </div>

          <div class="flex-1 overflow-auto px-4 py-2 space-y-3">
            <div v-for="field in addAddressArray" :key="field.key" class="flex flex-col gap-1">
              <label class="text-[12px] font-medium">{{ field.label }}:</label>
              <TextInput
                  v-model="formData[field.key]"
                  placeholder=""
                  class="border border-gray-400 p-2"
              />
              <span v-if="errors[field.key]" class="text-[11px] text-red-400">{{ errors[field.key] }}</span>
            </div>
            <Neshan class="mx-auto !mt-4"/>
          </div>
          <div class="w-full flex sticky bottom-0 p-4 gap-2 border-t border-gray-200 bg-white z-10">
            <button @click="isRegistrationModalOpen=false" class="bg-gray-400 w-1/2 text-[13px] py-2 px-8 text-white rounded-md h-[40px]">
              لغو
            </button>
            <button @click="submitUserAddress" class="bg-[#ff6b35] w-1/2 text-[13px] py-2 px-8 text-white rounded-md h-[40px]">
              تایید و ثبت سفارش
            </button>
          </div>

        </div>
      </template>
    </Modal>
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
        <router-link to="/checkout2" class="w-full bg-[#ff6b35] p-2 text-[14px] text-white rounded-sm text-center">
          ورود و ادامه ثبت سفارش
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
