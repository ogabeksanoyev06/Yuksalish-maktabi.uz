<template>
  <section>
    <div class="slider">
      <swiper class="swiper" :options="swiperOptions">
        <swiper-slide>
          1111<img
            data-v-46bd6466=""
            src="https://images.uzum.uz/chmi07l6sfhndlbmppv0/main_page_banner.jpg"
            alt="Uzum aksiyalari, mahsulotlar termasi va xabarlari"
            style="width: 100%; height: auto"
          />
        </swiper-slide>
        <swiper-slide
          >2222<img
            data-v-46bd6466=""
            src="https://images.uzum.uz/chmi07l6sfhndlbmppv0/main_page_banner.jpg"
            alt="Uzum aksiyalari, mahsulotlar termasi va xabarlari"
            style="width: 100%; height: auto"
        /></swiper-slide>
        <swiper-slide
          >3333<img
            data-v-46bd6466=""
            src="https://images.uzum.uz/chmi07l6sfhndlbmppv0/main_page_banner.jpg"
            alt="Uzum aksiyalari, mahsulotlar termasi va xabarlari"
            style="width: 100%; height: auto"
        /></swiper-slide>
        <swiper-slide
          >4444<img
            data-v-46bd6466=""
            src="https://images.uzum.uz/chmi07l6sfhndlbmppv0/main_page_banner.jpg"
            alt="Uzum aksiyalari, mahsulotlar termasi va xabarlari"
            style="width: 100%; height: auto"
        /></swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "AppSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        // autoplay: {
        //   delay: 4000,
        //   disableOnInteraction: false,
        // },

        // Slaydlarni chiziq bilan aylantirish mumkinligini yoqish
        grabCursor: true,

        // Slaydlarni bo'sh joyga tushirish
        centeredSlides: true,

        // Davomiy charka (loop) imkoniyatini yoqish
        loop: true,

        // Sliderdagi slaydlarni bir marta yoki bir necha marta ko'rsatish (integer)
        slidesPerView: 1,

        // Slide o'rtasida joylashtirilgan slayd (center slide)
        initialSlide: 0,

        // Slaydlarni yonaltirish (vertical) holatda aylantirish
        direction: "horizontal",

        // Sliderda chiqqan slaydlarni bosib o'tish uchun joyni aniqlash
        spaceBetween: 20,

        // Slider tugmasi (navigatsiya)
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>
<style lang="scss">
.swiper-slide {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  width: 90% !important;
}
</style>
