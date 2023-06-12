<template>
  <section class="section py-30">
    <hero-banner />
    <div class="py-60 course">
      <div class="container">
        <div class="section__top mb-30">
          <app-text
            :size="isMobile ? 20 : 30"
            :line-height="isMobile ? 26 : 36"
            class="color-violet"
            weight="400"
          >
            Qoshimcha kurs va <br />
            to‘garaklarimiz
          </app-text>

          <div class="section__top-details">
            <app-text
              :size="isMobile ? 14 : 18"
              :line-height="isMobile ? 20 : 26"
              class="color-violet mb-20"
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
                <span class="mr-10">ONLAYN QABUL</span>
                <img src="/icons/angle-right.svg" alt="" />
              </AppButton>
            </router-link>
          </div>
        </div>
        <swiper class="swiper items" ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item, index) in 10" :key="index">
            <div class="item">
              <div class="item__photo">
                <img src="/images/girls.png" alt="" />
              </div>
              <p class="item__title">IXTISOSLASHGAN FANLAR</p>
              <div class="item__info">
                <app-text
                  :size="isMobile ? '18' : '24'"
                  :line-height="isMobile ? '24' : '30'"
                  weight="400"
                  class="color-white mb-10"
                >
                  Robototexnika darslari
                </app-text>
                <app-text
                  :size="16"
                  :line-height="24"
                  weight="400"
                  class="color-white d-flex align-center"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-5"
                  >
                    <g filter="url(#filter0_b_35_40)">
                      <path
                        d="M16.82 1.91003H7.18001C5.06001 1.91003 3.32001 3.65003 3.32001 5.77003V19.86C3.32001 21.66 4.61001 22.42 6.19001 21.55L11.07 18.84C11.59 18.55 12.43 18.55 12.94 18.84L17.82 21.55C19.4 22.43 20.69 21.67 20.69 19.86V5.77003C20.68 3.65003 18.95 1.91003 16.82 1.91003Z"
                        fill="white"
                        fill-opacity="0.6"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_35_40"
                        x="-8.67999"
                        y="-10.09"
                        width="41.37"
                        height="44.0065"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="6"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_35_40"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_35_40"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <span>Start • 3 sinifdan</span>
                </app-text>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="py-60">
      <div class="container">
        <div class="section__top mb-30">
          <app-text
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 28 : 36"
            class=""
            weight="400"
          >
            Qoshimcha kurs va <br />
            to‘garaklarimiz
          </app-text>

          <div class="section__top-details">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 24 : 26"
              class="mb-20"
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
    </div>
    <!--  -->
    <div class="py-60" style="background-color: #091f00">
      <div class="container">
        <div class="section__top mb-30">
          <app-text
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 28 : 36"
            class="color-green"
            weight="400"
          >
            Qoshimcha kurs va <br />
            to‘garaklarimiz
          </app-text>
          <div class="section__top-details">
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
        <div class="excursion">
          <img
            src="/images/girls.png"
            style="
              width: auto;
              max-width: 100%;
              height: auto;
              border-radius: 24px;
            "
          />
          <div class="icon">
            <svg
              width="38"
              height="40"
              viewBox="0 0 38 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.333313 19.9999V11.6932C0.333313 1.37992 7.63665 -2.84341 16.5733 2.31325L23.7833 6.46658L30.9933 10.6199C39.93 15.7766 39.93 24.2233 30.9933 29.3799L23.7833 33.5332L16.5733 37.6866C7.63665 42.8433 0.333313 38.6199 0.333313 28.3066V19.9999Z"
                fill="#F47820"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="py-60">
      <div class="container">
        <div class="section__top mb-30">
          <app-text
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 28 : 36"
            class=""
            weight="400"
          >
            Qoshimcha kurs va <br />
            to‘garaklarimiz
          </app-text>
          <div class="section__top-details">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 24 : 26"
              class="mb-20"
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
        <div class="reliefs">
          <div class="items">
            <div class="item" v-for="(item, i) in 6" :key="i">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroBanner from "@/components/pages/HeroBanner.vue";
import AppButton from "@/components/shared-components/AppButton.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "AppHome",
  components: { HeroBanner, AppButton, Swiper, SwiperSlide },
  data() {
    return {
      mySwiper: null,
      swiperOptions: {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed: 500,
        breakpoints: {
          400: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          990: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        },
        spaceBetween: 30,
      },
      swiperOptions1: {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 30,
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.course {
  background-color: #130024;
  .items {
    .item {
      position: relative;
      max-width: 350px;
      width: 100%;
      height: 480px;
      &__photo {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 24px;
        }
      }
      &__title {
        font-size: 16px;
        line-height: 24px;
        text-transform: uppercase;
        position: absolute;
        top: 16px;
        left: 16px;
        background: rgba(255, 255, 255, 0.75);
        border-radius: 24px;
        padding: 8px 12px;
      }
      &__info {
        position: absolute;
        bottom: 16px;
        left: 16px;
      }
    }
  }
}
.excursion {
  position: relative;
  .icon {
    position: absolute;
    top: 50%;
    right: 50%;
    width: 90px;
    height: 90px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transform: translate(50%, -50%);
  }
}
.reliefs {
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    .item {
      width: 100%;
      min-height: 270px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #f8f6f8;
      border-radius: 12px;
      padding: 28px 24px;
      transition: all ease-in-out 0.3s;
      &:hover {
        // background: #f2741e;
        padding: 30px 30px 70px 30px;
        box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.18);
        p {
          color: #fff !important;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
}
@media (max-width: 991px) {
  .reliefs {
    .items {
      grid-template-columns: 1fr 1fr;
    }
  }
}
@media (max-width: 768px) {
  .reliefs {
    .items {
      grid-template-columns: 1fr;
    }
  }
}
@media (max-width: 500px) {
  .course {
    background-color: #130024;
    .items {
      .item {
        max-width: 300px !important;
        height: 350px;
        margin: 0 auto;

        &__photo {
          img {
          }
        }
        &__title {
          font-size: 16px;
          line-height: 24px;
          text-transform: uppercase;
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(255, 255, 255, 0.75);
          border-radius: 24px;
          padding: 8px 12px;
        }
        &__info {
          position: absolute;
          bottom: 16px;
          left: 16px;
        }
      }
    }
  }
  .excursion {
    position: relative;
    .icon {
      width: 50px;
      height: 50px;
      svg {
        width: 18px;
      }
    }
  }
}
</style>
