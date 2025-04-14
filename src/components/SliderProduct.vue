<template>
  <swiper
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper w-[250px] h-[300px]"
  >
    <swiper-slide><img src="/src/assets/images/1.png" alt=""></swiper-slide>
    <swiper-slide><img src="/src/assets/images/2.png" alt=""></swiper-slide>
    <swiper-slide><img src="/src/assets/images/1.png" alt=""></swiper-slide>
    <swiper-slide><img src="/src/assets/images/2.png" alt=""></swiper-slide>
    <swiper-slide><img src="/src/assets/images/1.png" alt=""></swiper-slide>
    
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
};
</script>