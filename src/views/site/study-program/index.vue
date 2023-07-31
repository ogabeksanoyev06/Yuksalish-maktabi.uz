<template>
  <section class="section">
    <div class="container">
      <div
        style="background-color: #fff; border-radius: 0px 0px 16px 16px"
        class="py-60"
      >
        <div class="container">
          <app-text
            :size="isMobile ? 26 : 64"
            :line-height="isMobile ? 30 : 78"
            weight="500"
            class="mb-30 mx-auto text-center"
            maxWidth="680"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Yuksalish maktabi o'quv dasturi
          </app-text>
          <app-text
            :size="isMobile ? 16 : 20"
            :line-height="isMobile ? 22 : 32"
            weight="200"
            class="mb-30 mx-auto text-center"
            maxWidth="470"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            Qadryatlarga asoslangan, ta'lim va tarbiya birlashgan dargoh
          </app-text>
          <div data-aos="fade-up" data-aos-duration="900">
            <AppButton
              theme="main"
              :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
              :sides="isMobileSmall ? '15' : '20'"
              class="mb-30 mx-auto d-flex align-center"
              :height="isMobileSmall ? '40' : '50'"
              @click="modalTrue"
            >
              <span :class="isMobileSmall ? '' : 'mr-10'"> ONLAYN QABUL</span>
              <img src="/icons/angle-right.svg" alt="" v-if="!isMobileSmall" />
            </AppButton>
          </div>
        </div>
      </div>
    </div>
    <course-slider :color="true" />

    <div :class="isMobile ? 'py-30' : 'py-60'" class="selection">
      <div class="container">
        <app-text
          :size="isMobile ? 32 : 42"
          :line-height="isMobile ? 40 : 50"
          weight="700"
          class="text-start color-gray mb-60"
          data-aos="fade-up"
        >
          Sport to'garaklari
        </app-text>

        <div class="d-flex flex-wrap">
          <div
            v-for="(item, i) in tourarac"
            :key="i"
            class="selection__item"
            data-aos="fade-up"
            :data-aos-duration="(i + 1) * 100"
          >
            <app-text
              :size="isMobile ? 20 : 32"
              :line-height="isMobile ? 26 : 40"
              weight="400"
              class="color-gray"
            >
              {{ item[$localeKey("name")] }}
            </app-text>
            <!-- <div class="num">{{ i + 1 }}</div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="py-60" style="background-color: #f5f5f5">
      <div class="container">
        <div class="section__top" :class="isMobile ? 'mb-30' : 'mb-60'">
          <app-text
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 28 : 36"
            weight="500"
            data-aos="fade-up"
          >
            Kun tartibimiz
          </app-text>
          <div class="section__top-details" data-aos="fade-up">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 24 : 26"
              weight="400"
              max-width="500"
            >
              O'quvchularimizning kun davomida qilingan vazifalari va
              mashg'ulotlar haqida ma'lumot
            </app-text>
          </div>
        </div>
        <div class="agenda">
          <div
            class="agenda__item"
            v-for="(item, i) in dayList"
            :key="i"
            data-aos="fade-up"
            :data-aos-duration="(i + 1) * 300"
          >
            <div
              style="
                background: #d9c5ee;
                border-radius: 56px;
                padding: 6px 12px;
                width: fit-content;
              "
              :class="isMobile ? 'mb-20' : 'mb-40'"
            >
              <app-text
                :size="isMobile ? 14 : 16"
                :line-height="isMobile ? 20 : 24"
                weight="400"
                class=""
              >
                Kun tartibi
              </app-text>
            </div>
            <app-text
              :size="isMobile ? 20 : 28"
              :line-height="isMobile ? 26 : 36"
              weight="500"
              :class="isMobile ? 'mb-10' : 'mb-20'"
            >
              {{ item[$localeKey("title")] }}
            </app-text>
            <app-text
              :size="isMobile ? 16 : 20"
              :line-height="isMobile ? 20 : 28"
              weight="400"
              max-width="336"
            >
              {{ item[$localeKey("sub_title")] }}
            </app-text>
          </div>
        </div>
      </div>
    </div>

    <div class="py-60" style="background-color: #f4f2f7">
      <div class="container">
        <div class="section__top" :class="isMobile ? 'mb-30' : 'mb-60'">
          <app-text
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 28 : 36"
            weight="500"
            max-width="343"
            class=""
            data-aos="fade-up"
          >
            Yuksalish darslari
          </app-text>
          <div class="section__top-details" data-aos="fade-up">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 24 : 26"
              weight="400"
              max-width="500"
              class=""
            >
              Yuksalish maktabida o'quvchilarni shaxsiy rivojlanish,ilm olish
              sirlari,vaqtni to'g'ri sarflash,oliy maqsad qo'yish,uchun
              "yuksalish darslari " fan sifatida qo'yilgan.
            </app-text>
          </div>
        </div>
        <div class="special-course">
          <div
            class="special-course__item"
            v-for="(item, i) in courses"
            :key="i"
            data-aos="fade-up"
            :data-aos-duration="(i + 1) * 300"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="isMobile ? 'mb-20' : 'mb-40'"
            >
              <g clip-path="url(#clip0_454_1321)">
                <path
                  d="M28.2769 21.0095C24.1439 21.0095 20.7817 24.3721 20.7817 28.5047C20.7817 32.6376 24.1439 35.9998 28.2769 35.9998C32.4098 35.9998 35.7721 32.6376 35.7721 28.5047C35.7721 24.3721 32.4098 21.0095 28.2769 21.0095ZM28.2769 33.0018C25.7967 33.0018 23.7798 30.9849 23.7798 28.5047C23.7798 26.0248 25.7967 24.0076 28.2769 24.0076C30.7571 24.0076 32.774 26.0248 32.774 28.5047C32.774 30.9849 30.7571 33.0018 28.2769 33.0018Z"
                  fill="#381EF2"
                />
                <path
                  d="M0.210938 15.0134H17.3697L8.78975 0L0.210938 15.0134ZM5.37667 12.0153L8.78975 6.04261L12.2032 12.0153H5.37667Z"
                  fill="#381EF2"
                />
                <path
                  d="M20.7817 15.0134H35.7721V0.0230713H20.7817V15.0134ZM23.7798 3.02113H32.774V12.0153H23.7798V3.02113Z"
                  fill="#381EF2"
                />
                <path
                  d="M3.54282 35.8717L8.78943 30.6251L14.036 35.8717L16.1565 33.7513L10.9099 28.5046L16.1565 23.258L14.036 21.1379L8.78943 26.3846L3.54282 21.1379L1.42236 23.258L6.66897 28.5046L1.42236 33.7513L3.54282 35.8717Z"
                  fill="#381EF2"
                />
              </g>
              <defs>
                <clipPath id="clip0_454_1321">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <app-text
              :size="isMobile ? 20 : 24"
              :line-height="isMobile ? 26 : 32"
              weight="500"
              :class="isMobile ? 'mb-10' : 'mb-20'"
            >
              {{ item[$localeKey("name")] }}
            </app-text>
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 20 : 24"
              weight="400"
              max-width="336"
            >
              {{ item[$localeKey("info")] }}
            </app-text>
          </div>
        </div>
      </div>
    </div>
    <div class="py-60" style="background-color: #060032">
      <div class="container">
        <div
          class="d-flex justify-space-between"
          :class="isDesktopMedium ? 'flex-column' : ''"
        >
          <div :class="isDesktopMedium ? 'mb-30 text-center' : 'mr-20'">
            <app-text
              :size="isMobile ? 22 : 32"
              :line-height="isMobile ? 28 : 44"
              weight="500"
              max-width="480"
              class="mb-20 color-white"
              data-aos="fade-right"
            >
              Yuksalish maktabida qizlar uchun bir qancha amaliy to'garaklar
              yo'lga qo'yilgan
            </app-text>
            <router-link class="section__top-link" to="/about-us">
              <AppButton
                theme="white"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                sides="20"
                class="mb-10"
                :height="isMobileSmall ? '40' : '50'"
              >
                <span class="">MAKTAB HAQIDA BATAFSIL</span>
              </AppButton>
            </router-link>
          </div>
          <div
            style="position: relative; max-width: 750px; width: 100%"
            class="pb-60"
          >
            <swiper class="swiper" :options="swiperOptions">
              <swiper-slide
                v-for="(item, i) in girlsImages"
                :key="i"
                data-aos="fade-up"
                :data-aos-duration="(i + 1) * 500"
              >
                <div
                  style="max-width: 350px; width: 100%"
                  :style="isMobileSmall ? 'height:auto' : 'height: 547px;'"
                  class="mx-auto"
                >
                  <img
                    :src="item.img"
                    style="
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                      border-radius: 16px;
                    "
                  />
                </div>
              </swiper-slide>
            </swiper>
            <div class="navigation">
              <div class="slider-button swiper-button-prev prev">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7598 7.90674L4.6665 16.0001L12.7598 24.0934"
                    stroke="white"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.3336 16H4.89355"
                    stroke="white"
                    stroke-opacity="0.6"
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
                    d="M19.2402 7.90674L27.3335 16.0001L19.2402 24.0934"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.66644 16H27.1064"
                    stroke="white"
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
    <div class="py-60" style="background-color: #fff">
      <div class="container">
        <div class="section__top" :class="isMobile ? 'mb-30' : 'mb-60'">
          <app-text
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 28 : 36"
            weight="500"
            class=""
            data-aos="fade-up"
          >
            Dasturlash darslari
          </app-text>
          <div class="section__top-details" data-aos="fade-up">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 24 : 26"
              weight="400"
              max-width="500"
              class="mb-20"
            >
              Robotexnika togaragi darslari mobaynida dasturlash tillari
              oqitladi
            </app-text>
            <router-link class="section__top-link" to="/">
              <AppButton
                theme="main"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                sides="20"
                class="mb-10"
                :height="isMobileSmall ? '40' : '50'"
              >
                <span class="">ONLAYN QABUL</span>
              </AppButton>
            </router-link>
          </div>
        </div>
        <div style="max-width: 1180px; width: 100%" class="mx-auto">
          <swiper class="swiper" :options="swiperOptions2">
            <swiper-slide
              v-for="(item, i) in ItImages"
              :key="i"
              data-aos="fade-up"
              :data-aos-duration="(i + 1) * 500"
            >
              <div
                style="max-width: 590px; width: 100%; margin-bottom: 10px"
                :style="isMobileSmall ? 'height:auto' : 'height: 380px;'"
                class="mx-auto"
              >
                <img
                  :src="item.img"
                  style="
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 16px;
                  "
                />
              </div>
              <app-text :size="16" :line-height="24" weight="500">
                {{ item[$localeKey("title")] }}
              </app-text>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <app-modal v-if="onlineReception" @close="closeModal" />
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import CourseSlider from "@/components/pages/CourseSlider.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import AppModal from "@/components/shared-components/AppModal.vue";
export default {
  name: "StudyProgram",
  components: { AppButton, CourseSlider, Swiper, SwiperSlide, AppModal },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        grabCursor: true,
        breakpoints: {
          400: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
        },
        spaceBetween: 24,
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
        breakpoints: {
          400: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
        },
        spaceBetween: 12,
      },
      onlineReception: false,
      dayList: [],
      courses: [],
      tourarac: [],
      ItImages: [],
      girlsImages: [],
    };
  },
  methods: {
    closeModal() {
      this.onlineReception = false;
    },
    modalTrue() {
      this.onlineReception = true;
    },
    getDay() {
      this.$api
        .get(`day/`)
        .then((data) => {
          if (!data.error) {
            this.dayList = data;
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
    getCourses() {
      this.$api
        .get(`courses/`)
        .then((data) => {
          if (!data.error) {
            this.courses = data;
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
    getTourarac() {
      this.$api
        .get(`tourarac/`)
        .then((data) => {
          if (!data.error) {
            this.tourarac = data;
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
    getItImages() {
      this.loading = true;
      this.$api
        .get("gallery/?typ=5")
        .then((data) => {
          if (!data.error) {
            this.ItImages = data;
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
    getGirlsImages() {
      this.loading = true;
      this.$api
        .get("gallery/?typ=1")
        .then((data) => {
          if (!data.error) {
            this.girlsImages = data;
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
    this.getDay();
    this.getCourses();
    this.getTourarac();
    this.getItImages();
    this.getGirlsImages();
  },
};
</script>
<style lang="scss" scoped>
.agenda {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  &__item {
    display: inline-flex;
    flex-direction: column;
    min-height: 250px;
    background-color: #ebd8ff;
    border-radius: 16px;
    padding: 28px 24px;
  }
}
.special-course {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  &__item {
    background: #fffdff;
    border-radius: 16px;
    padding: 24px;
  }
}
.navigation {
  position: absolute;
  bottom: -0px;
  width: 100%;
  z-index: 2;
  .slider-button {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    border: 1px solid #111011;
    background: #060032;
    transition: all 0.3s ease-in-out;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 56px !important;
    &.prev {
      left: 0px;
    }
    &.next {
      left: 54px !important;
    }
  }
}
.selection {
  background-color: #fff;

  color: #fff;
  border-radius: 0px 0px 16px 16px;
  &__item {
    border-radius: 10px;
    background-color: rgb(245, 245, 245);

    max-width: 370px;
    width: 100%;
    height: 200px;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .num {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 32px;
    }
  }
}
@media (max-width: 991px) {
  .agenda {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    &__item {
      min-height: auto;
    }
  }
  .special-course {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 768px) {
  .agenda {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .special-course {
    grid-template-columns: 1fr;
  }
}
</style>
