<template>
  <section class="about-us section">
    <div style="background-color: #fff" class="py-60">
      <div class="container">
        <app-text
          :size="isMobile ? 26 : 64"
          :line-height="isMobile ? 30 : 78"
          weight="500"
          class="mb-30 mx-auto text-center"
          maxWidth="680"
        >
          O‘zbekistondagi sifatli hususiy maktab
        </app-text>
        <app-text
          :size="isMobile ? 16 : 20"
          :line-height="isMobile ? 22 : 32"
          weight="200"
          class="mb-30 mx-auto text-center"
          maxWidth="470"
        >
          Maktabimiz haqida barcha ma’lumotlar, maktabga ekskursiyalar vva
          boshqalar bilan tanishing
        </app-text>
        <AppButton
          theme="main"
          :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
          :sides="isMobileSmall ? '15' : '20'"
          class="mb-10 mx-auto d-flex align-center"
          :height="isMobileSmall ? '40' : '50'"
        >
          <span :class="isMobileSmall ? '' : 'mr-10'"> ONLAYN QABUL </span>
          <img src="/icons/angle-right.svg" alt="" v-if="!isMobileSmall" />
        </AppButton>
      </div>
      <YoutubeLinkBanner :topLink="false" :bgGreen="false" />
    </div>
    <div
      class="py-60"
      style="background-color: #091f00; border-radius: 0px 0px 16px 16px"
    >
      <div class="container">
        <div class="section__top mb-30">
          <app-text
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 28 : 36"
            class="color-green"
            weight="400"
            data-aos="fade-up"
          >
            Qoshimcha kurs va <br />
            to‘garaklarimiz
          </app-text>
          <div class="section__top-details" data-aos="fade-up">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 24 : 26"
              class="mb-20 color-green"
              weight="400"
              max-width="500"
            >
              Maktabimizlarimiz bino, xona, bolalar o‘quv jarayonidan, turli xil
              sport musobaqalardan olingan rasimlar.
            </app-text>
            <router-link class="section__top-link" to="/">
              <AppButton
                theme="main"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                sides="20"
                class="mb-10"
                :height="isMobileSmall ? '40' : '50'"
              >
                <span class="mr-10">MAKTAB HAQIDA BATAFSIL</span>
              </AppButton>
            </router-link>
          </div>
        </div>
      </div>
      <custom-slider :topLink="true" :bgGreen="true" />
    </div>
    <div style="background-color: #1e1d1e; border-radius: 0px 0px 16px 16px">
      <div class="py-60">
        <div class="container">
          <app-text
            :size="isMobile ? 22 : 44"
            :line-height="isMobile ? 30 : 52"
            weight="500"
            class="mb-30 color-gradient"
            maxWidth="620"
          >
            Maktabimiz zamon talablarga javob beradigan o‘qitish tizimiga ega
          </app-text>
          <div class="items">
            <div class="item" v-for="(item, i) in 3" :key="i">
              <svg
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.33329 10.9668H1.66667C0.75 10.9668 0 11.7168 0 12.6335V27.0001C0 27.9168 0.75 28.6668 1.66667 28.6668H4.33329C5.24996 28.6668 5.99996 27.9168 5.99996 27.0001V12.6335C5.99996 11.7001 5.24996 10.9668 4.33329 10.9668Z"
                  fill="#F37221"
                />
                <path
                  d="M16.3333 5.65039H13.6667C12.75 5.65039 12 6.40039 12 7.31706V27.0004C12 27.9171 12.75 28.6671 13.6667 28.6671H16.3333C17.25 28.6671 18 27.9171 18 27.0004V7.31706C18 6.40039 17.25 5.65039 16.3333 5.65039Z"
                  fill="#F37221"
                />
                <path
                  d="M28.3333 0.333496H25.6667C24.75 0.333496 24 1.0835 24 2.00016V27.0002C24 27.9168 24.75 28.6668 25.6667 28.6668H28.3333C29.25 28.6668 30 27.9168 30 27.0002V2.00016C30 1.0835 29.25 0.333496 28.3333 0.333496Z"
                  fill="#F37221"
                />
              </svg>
              <div class="item__content">
                <app-text
                  :size="isMobile ? 18 : 24"
                  :line-height="isMobile ? 24 : 32"
                  class="mb-10"
                  weight="500"
                >
                  Chorak reyting boyicha
                </app-text>
                <app-text
                  :size="isMobile ? 14 : 18"
                  :line-height="isMobile ? 20 : 24"
                  class=""
                  weight="400"
                >
                  Har chorak reytingida eng yuqori natija korsatgan oquvchilar
                  uchun 50% chegirma
                </app-text>
              </div>
            </div>
          </div>
          <div
            style="
              background-color: rgba(255, 255, 255, 0.4);
              margin: 30px 0;
              height: 0.5px;
              width: 100%;
            "
          />
          <div class="items mb-60">
            <div class="item" v-for="(item, i) in 3" :key="i">
              <svg
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.33329 10.9668H1.66667C0.75 10.9668 0 11.7168 0 12.6335V27.0001C0 27.9168 0.75 28.6668 1.66667 28.6668H4.33329C5.24996 28.6668 5.99996 27.9168 5.99996 27.0001V12.6335C5.99996 11.7001 5.24996 10.9668 4.33329 10.9668Z"
                  fill="#F37221"
                />
                <path
                  d="M16.3333 5.65039H13.6667C12.75 5.65039 12 6.40039 12 7.31706V27.0004C12 27.9171 12.75 28.6671 13.6667 28.6671H16.3333C17.25 28.6671 18 27.9171 18 27.0004V7.31706C18 6.40039 17.25 5.65039 16.3333 5.65039Z"
                  fill="#F37221"
                />
                <path
                  d="M28.3333 0.333496H25.6667C24.75 0.333496 24 1.0835 24 2.00016V27.0002C24 27.9168 24.75 28.6668 25.6667 28.6668H28.3333C29.25 28.6668 30 27.9168 30 27.0002V2.00016C30 1.0835 29.25 0.333496 28.3333 0.333496Z"
                  fill="#F37221"
                />
              </svg>
              <div class="item__content">
                <app-text
                  :size="isMobile ? 18 : 24"
                  :line-height="isMobile ? 24 : 32"
                  class="mb-10"
                  weight="500"
                >
                  Chorak reyting boyicha
                </app-text>
                <app-text
                  :size="isMobile ? 14 : 18"
                  :line-height="isMobile ? 20 : 24"
                  class=""
                  weight="400"
                >
                  Har chorak reytingida eng yuqori natija korsatgan oquvchilar
                  uchun 50% chegirma
                </app-text>
              </div>
            </div>
          </div>
          <app-text
            :size="isMobile ? 22 : 44"
            :line-height="isMobile ? 30 : 52"
            weight="500"
            class="color-gradient"
            maxWidth="758"
            :class="isDesktopSmall ? 'mb-30' : ' mb-40'"
          >
            Zamonaviy jihozlar bilan jihozlangan sinfxonalarimiz bilan tanishing
          </app-text>
          <div
            :class="isDesktopSmall ? '' : 'pb-120'"
            style="position: relative"
          >
            <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
              <swiper-slide v-for="(item, index) in 10" :key="index">
                <div class="swiper__item">
                  <div class="swiper__item-photo mb-10">
                    <img src="/images/girls.png" alt="" />
                  </div>
                  <app-text
                    :size="isMobile ? 16 : 24"
                    :line-height="isMobile ? 20 : 32"
                    weight="500"
                    class="color-white"
                  >
                    Kimyo xonasi
                  </app-text>
                </div>
              </swiper-slide>
            </swiper>
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
          </div>
        </div>
      </div>
    </div>
    <div
      style="
        background-color: rgba(244, 242, 247, 1);
        border-radius: 0px 0px 16px 16px;
      "
    >
      <div class="py-60">
        <div class="container">
          <div class="section__top" :class="isMobileSmall ? 'mb-30' : 'mb-60'">
            <app-text
              :size="isMobile ? 24 : 32"
              :line-height="isMobile ? 28 : 44"
              weight="500"
              data-aos="fade-up"
            >
              Maktabimizning <br />
              afkaliklari
            </app-text>
            <div class="section__top-details" data-aos="fade-up">
              <app-text
                :size="isMobile ? 16 : 24"
                :line-height="isMobile ? 24 : 32"
                weight="400"
                max-width="600"
              >
                Bizning maxsus chegirmalar va imtiyozlarimiz oilangiz byudjetiga
                foyda va yoshlarga mativatsiya bola oladi
              </app-text>
            </div>
          </div>
          <div class="imkoniyat">
            <div class="imkoniyat__item" v-for="item in 4" :key="item">
              <div
                style="
                  background: #ebedeb;
                  backdrop-filter: blur(12px);
                  border-radius: 32px;
                  display: inline-flex;
                  flex-direction: row;
                  align-items: flex-start;
                  padding: 8px 16px;
                "
                :class="isMobileSmall ? 'mb-20' : 'mb-30'"
              >
                <app-text
                  :size="isMobile ? 14 : 16"
                  :line-height="isMobile ? 20 : 24"
                  weight="400"
                >
                  Imkoniyatlar
                </app-text>
              </div>
              <app-text
                :size="isMobile ? 16 : 24"
                :line-height="isMobile ? 22 : 32"
                class="mb-15"
                weight="500"
              >
                Qoshimcha togaraklar
              </app-text>
              <app-text
                :size="isMobile ? 14 : 18"
                :line-height="isMobile ? 20 : 24"
                class=""
                weight="400"
              >
                DTS darslaridan song biz farzandlaringiz rivoji uchun qoshimcha
                tograklar ham tashkil etganmiz
              </app-text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style="background-color: #1e1d1e; border-radius: 0px 0px 16px 16px"
      :class="isMobileSmall ? 'py-30' : 'py-60'"
    >
      <div class="container">
        <div class="section__top mb-30">
          <app-text
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 28 : 36"
            class="color-white"
            weight="400"
            data-aos="fade-up"
          >
            Soglom ovqatlanish <br />
            ilimga quvvatdir
          </app-text>
          <div class="section__top-details" data-aos="fade-up">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 24 : 26"
              class="mb-20 color-white"
              weight="400"
              max-width="500"
            >
              Maktabimizda bolalarimiz 3 mahal ovqatlanish imkoniyatiga ega
              boladi. Unda bolalar issiq ovqatm, shirinlik va ichimliklarni
              turli xili turlari bilan ovqatlanishligi mumkin
            </app-text>
            <router-link class="section__top-link" to="/">
              <AppButton
                theme="white"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                sides="20"
                class="mb-10"
                :height="isMobileSmall ? '40' : '50'"
              >
                <span class="mr-10">KONSULTATSIYAGA YOZILING</span>
              </AppButton>
            </router-link>
          </div>
        </div>
        <div :class="isDesktopSmall ? '' : 'pb-120'" style="position: relative">
          <swiper class="swiper" :options="swiperOptions2">
            <swiper-slide
              v-for="(item, index) in 10"
              :key="index"
              style="height: 300px; width: 250px"
            >
              <img
                src="/images/girls.png"
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 16px;
                "
                class="mb-10"
              />
            </swiper-slide>
          </swiper>
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
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import YoutubeLinkBanner from "@/components/pages/YoutubeLinkBanner.vue";
import CustomSlider from "@/components/pages/CustomSlider.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "AboutAs",
  components: {
    AppButton,
    YoutubeLinkBanner,
    CustomSlider,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed: 500,
        grabCursor: true,
        breakpoints: {
          400: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.1,
          },
          990: {
            slidesPerView: 2.4,
          },
          1200: {
            slidesPerView: 3.4,
          },
        },
        spaceBetween: 12,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptions2: {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed: 500,
        grabCursor: true,
        breakpoints: {
          400: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.1,
          },
          990: {
            slidesPerView: 2.4,
          },
          1200: {
            slidesPerView: 2.4,
          },
        },
        spaceBetween: 12,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.about-us {
  background-color: #1e1d1e;
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    .item {
      width: 100%;
      min-height: 276px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all ease-in-out 0.3s;
      color: #fff;
      padding: 28px 24px;
      border-right: 0.5px solid rgba(255, 255, 255, 0.4);
      &:nth-child(3n) {
        border-right: none;
      }
      // &:hover {
      //   // background: #f2741e;
      //   padding: 30px 30px 70px 30px;
      //   box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.18);
      //   p {
      //     color: #fff !important;
      //   }
      // }
    }
  }
  .navigation {
    position: absolute;
    bottom: 60px;
    right: 100px;
    width: 100%;
    z-index: 2;
    .slider-button {
      cursor: pointer;
      position: absolute;
      z-index: 1;
      border: 1px solid #111011;
      background: #111011;
      transition: all 0.3s ease-in-out;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 56px !important;
      svg {
        path {
          stroke: #fff;
        }
      }

      &.prev {
        left: calc(100% - 120px) !important;
      }
      &.next {
        right: 0px !important;
      }
    }
  }
}
.swiper {
  &__item {
    &-photo {
      max-width: 380px;
      max-height: 240px;
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
      }
    }
  }
}
.imkoniyat {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  &__item {
    background: #fffdff;
    border-radius: 16px;
    padding: 24px;
    min-height: 288px;
  }
}

@media (max-width: 991px) {
  .about-us {
    .items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      .item {
        min-height: 220px;
      }
    }
  }
  .imkoniyat {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 576px) {
  .about-us {
    .items {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      .item {
        min-height: 220px;
      }
    }
  }
  .imkoniyat {
    grid-template-columns: 1fr;
    &__item {
      min-height: 220px;
    }
  }
}
</style>
