<template>
  <section class="">
    <div class="slider" style="position: relative">
      <div class="navigation" v-if="!isDesktopSmall">
        <div class="slider-button swiper-button-prev prev">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.76 7.90662L4.66667 16L12.76 24.0933"
              stroke="black"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.3333 16H4.89334"
              stroke="black"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="slider-button swiper-button-next next">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.24 7.90662L27.3334 16L19.24 24.0933"
              stroke="black"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.66669 16H27.1067"
              stroke="black"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <swiper
        class="swiper custom__slide"
        :options="swiperOptions"
        ref="swiper"
      >
        <swiper-slide
          class="custom__slide-item"
          v-for="(item, i) in 10"
          :key="i"
        >
          <img src="/images/girls.png" :class="isMobile ? 'mb-10' : 'mb-20'" />
          <app-text
            :size="isMobileSmall ? '16' : '24'"
            :line-height="isMobileSmall ? '20' : '32'"
            weight="500"
            :class="isMobile ? 'mb-5' : 'mb-20'"
          >
            Maktab binosi
          </app-text>
          <app-text
            :size="isMobileSmall ? '14' : '20'"
            :line-height="isMobileSmall ? '20' : '26'"
            weight="400"
          >
            Matkabimizning binosining tashqi korinishi
          </app-text>
        </swiper-slide>
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
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 1.2,
        initialSlide: 0,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.swiper-button-prev:after,
.swiper-button-next:after {
  content: "";
}
.custom__slide {
  position: relative;
  &-item {
    padding: 0 10px;
    img {
      max-width: 100%;
      width: 100%;
      height: auto;
      border-radius: 24px;
      margin-right: auto;
      margin-left: auto;
    }
  }
  .swiper-slide {
    filter: blur(2px);
    -webkit-filter: blur(2px);
  }
  .swiper-slide-active {
    filter: blur(0px);
    -webkit-filter: blur(0px);
  }
}
.navigation {
  position: absolute;
  top: calc(50% - 20px);
  width: 100%;
  z-index: 2;
  .slider-button {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #fff;
    transition: all 0.3s ease-in-out;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 56px !important;
    &.prev {
      left: 20px;
    }
    &.next {
      right: 20px !important;
    }
  }
}
@media (max-width: 991px) {
  .custom__slide {
    &-item {
      img {
        max-width: 100%;
      }
    }
  }
}
@media (max-width: 500px) {
  .custom__slide {
    &-item {
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
