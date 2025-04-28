<!-- Master.vue -->
<script setup>
import Header from '@/components/Header.vue'
import Menu from "@/components/Menu.vue";

</script>

<template>
  <div class="layout bg-zinc-100">
    <Header />
    <Menu/>
    <div>
      <nav>
        <router-link to="/"></router-link>
        <router-link to="/about"></router-link>
        <router-link to="/contact"></router-link>
        <router-link to="/product"></router-link>
        <router-link to="/productDetails"></router-link>
        <router-link to="/cart"></router-link>
      </nav>
    </div>
    <main>
      <router-view />
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
</style>
