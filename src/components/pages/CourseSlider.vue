<template>
  <section class="section">
    <div class="py-60 course">
      <div class="container">
        <div class="section__top mb-30">
          <app-text
            :size="isMobile ? 20 : 30"
            :line-height="isMobile ? 26 : 36"
            class="color-white"
            weight="500"
            data-aos="fade-up"
          >
            Fanlar
          </app-text>
          <div class="section__top-details" data-aos="fade-up">
            <app-text
              :size="isMobile ? 14 : 18"
              :line-height="isMobile ? 20 : 26"
              class="mb-20 color-white"
              weight="400"
              max-width="500"
            >
            </app-text>
            <router-link class="section__top-link" to="/study-program">
              <app-button
                theme="white"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                sides="20"
                class="mb-10 d-flex align-center"
                :height="isMobileSmall ? '40' : '50'"
              >
                TO'LIQ TANISHISH
              </app-button>
            </router-link>
          </div>
        </div>
        <swiper class="swiper items" ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item, index) in science" :key="index">
            <div class="item">
              <div class="item__photo">
                <img
                  :src="'http://api.yuksalishmaktabi.uz' + item.img"
                  alt=""
                />
              </div>
              <p class="item__title">{{ item[$localeKey("info")] }}</p>
              <div class="item__info">
                <app-text
                  :size="isMobile ? '16' : '20'"
                  :line-height="isMobile ? '20' : '24'"
                  weight="400"
                  class="color-white mb-10"
                >
                  {{ item[$localeKey("name")] }} darslari
                </app-text>
                <!-- <app-text
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
                </app-text> -->
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import AppButton from "../shared-components/AppButton.vue";
export default {
  name: "CourseSlider",
  components: { Swiper, SwiperSlide, AppButton },
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
            slidesPerView: 3,
          },
          990: {
            slidesPerView: 2.4,
          },
          1200: {
            slidesPerView: 3.4,
          },
        },
        spaceBetween: 24,
      },
      science: [],
    };
  },
  props: {
    color: Boolean,
  },
  methods: {
    getScience() {
      this.$api
        .get(`science/`)
        .then((data) => {
          if (!data.error) {
            this.science = data;
          }
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        })
        .finally(() => {
          console.log("im finally");
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getScience();
  },
};
</script>
<style lang="scss" scoped>
.course {
  background-color: rgb(43, 56, 94);

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
        font-size: 14px;
        line-height: 20px;
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
@media (max-width: 500px) {
  .course {
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
}
</style>
