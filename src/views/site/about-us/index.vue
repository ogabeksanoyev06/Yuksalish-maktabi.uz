<template>
  <section class="about-us">
    <div style="background-color: #fff; border-radius: 0px 0px 16px 16px">
      <div style="background-color: #f5f5f5">
        <div class="container">
          <div class="about__school">
            <div class="about__school-images">
              <div class="image" data-aos="fade-right">
                <img src="/images/1.jpg" alt="" />
              </div>
              <div class="image" data-aos="fade-right">
                <img src="/images/2.jpg" alt="" />
              </div>
              <div class="image" data-aos="fade-right">
                <img src="/images/3.jpg" alt="" />
              </div>
              <div class="image" data-aos="fade-right">
                <img src="/images/4.jpg" alt="" />
              </div>
            </div>
            <div class="about__school-info">
              <app-text
                :size="isMobile ? 32 : 48"
                :line-height="isMobile ? 46 : 54"
                class="mb-30 color-orange"
                weight="700"
                data-aos="fade-up"
              >
                Yuksalish maktabi
              </app-text>
              <div class="d-flex mb-20" data-aos="fade-up">
                <img
                  src="/icons/1-1.png"
                  alt=""
                  class="mr-15"
                  style="width: 50px; height: 50px"
                />
                <app-text
                  :size="16"
                  :line-height="22"
                  weight="500"
                  max-width="500"
                >
                  Maktabda o'zbek tilida va qadryatlarga asoslanib ta'lim
                  beriladi.11 yillik talim tizimiga mo'ljallangan bo'lib bu vaqt
                  davomida o'quvchilarimiz xorijiy tillardan
                  <span class="bold-text">
                    Ingliz tili ,arab tili, rus tili
                  </span>
                  shuningdek, aniq fanlar va IT sohalari chuqurlashtirib
                  o'rgatiladi.
                </app-text>
              </div>
              <div class="d-flex" data-aos="fade-up">
                <img
                  src="/icons/1-2.png"
                  alt=""
                  class="mr-15"
                  style="width: 50px; height: 50px"
                />
                <app-text
                  :size="16"
                  :line-height="22"
                  weight="500"
                  max-width="500"
                >
                  Yuksalish maktabida o'quvchilarimiz
                  <span class="bold-text">
                    ta'lim va tarbiyani birlashgan xolda
                  </span>
                  ilm oladilar. <br />
                  Yuksalish maktabida kitobxonlik darslariga ahlohida e'tibor
                  beriladi
                </app-text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="max-width: 1200px" class="mx-auto mb-30">
        <video
          style="width: 100%; height: auto"
          poster="/images/bg_video.png"
          controls
        >
          <source src="@/assets/school-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div
      class="py-60"
      style="background-color: #060032; border-radius: 0px 0px 16px 16px"
    >
      <div class="container">
        <div class="section__top mb-30">
          <app-text
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 28 : 36"
            class="color-blue"
            weight="500"
            data-aos="fade-up"
          >
            Maktabimiz haqida
          </app-text>
          <div class="section__top-details" data-aos="fade-up">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 24 : 26"
              class="mb-20 color-blue"
              weight="400"
              max-width="500"
            >
              Yuksalish maktabi 2022 - yilda ochilgan bo'lib, uning bosh
              asoschisi Muhammadali Eshonqulov.
            </app-text>
          </div>
        </div>
      </div>
      <custom-slider :topLink="true" :bgGreen="true" />
    </div>
    <!-- <div
      style="background-color: #fff; border-radius: 0px 0px 16px 16px"
      :class="isMobileSmall ? 'py-30' : 'py-60'"
    >
      <div class="container">
        <app-text
          :size="isMobile ? 22 : 44"
          :line-height="isMobile ? 30 : 52"
          weight="500"
          class="mb-30 color-gradient"
          maxWidth="620"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Maktabimiz zamon talablarga javob beradigan o‘qitish tizimiga ega
        </app-text>
        <div class="items">
          <div
            class="item"
            v-for="(item, i) in 6"
            :key="i"
            data-aos="fade-up"
            data-aos-duration="500"
          >
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
                class="mb-10 color-orange"
                weight="500"
              >
                Chorak reyting boyicha
              </app-text>
              <app-text
                :size="isMobile ? 14 : 18"
                :line-height="isMobile ? 20 : 24"
                class="color-kok"
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

        <app-text
          :size="isMobile ? 22 : 44"
          :line-height="isMobile ? 30 : 52"
          weight="500"
          class="color-gradient"
          maxWidth="758"
          :class="isDesktopSmall ? 'mb-30' : ' mb-40'"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Zamonaviy jihozlar bilan jihozlangan sinfxonalarimiz bilan tanishing
        </app-text>
        <div :class="isDesktopSmall ? '' : 'pb-120'" style="position: relative">
          <swiper
            class="swiper"
            :options="swiperOptions"
            data-aos="fade-up"
            data-aos-duration="500"
          >
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
    </div> -->
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
              Yuksalish maktabidan <br />
              kutilayotgan natijalar
            </app-text>
            <div class="section__top-details" data-aos="fade-up">
              <app-text
                :size="isMobile ? 16 : 24"
                :line-height="isMobile ? 24 : 32"
                weight="400"
                max-width="600"
              >
                Yuksalish makatbida ta'lim va tarbiya birlashtirlgan xolda
                ta'lim beriladi.
              </app-text>
            </div>
          </div>
          <div class="imkoniyat">
            <div
              class="imkoniyat__item"
              v-for="(item, i) in afzallikImages"
              :key="i"
              data-aos="fade-right"
              :data-aos-duration="(i + 1) * 500"
            >
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
                  Natija
                </app-text>
              </div>
              <app-text
                :size="isMobile ? 16 : 24"
                :line-height="isMobile ? 22 : 32"
                class="mb-15"
                weight="500"
              >
                {{ item[$localeKey("name")] }}
              </app-text>
              <app-text
                :size="isMobile ? 14 : 18"
                :line-height="isMobile ? 20 : 24"
                class=""
                weight="400"
              >
                {{ item[$localeKey("title")] }}
              </app-text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style="background-color: #f5f5f5; border-radius: 0px 0px 16px 16px"
      :class="isMobileSmall ? 'py-30' : 'py-60'"
    >
      <div class="container">
        <div class="section__top" :class="isMobile ? 'mb-30' : 'mb-60'">
          <app-text
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 28 : 36"
            class=""
            weight="500"
            data-aos="fade-up"
          >
            Yuksalish maktabida <br />
            Sog'lom ovqatlanish ilmga quvvatdir.
          </app-text>
          <div class="section__top-details" data-aos="fade-up">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 24 : 26"
              class=""
              weight="400"
              max-width="500"
            >
              Yuksalish makatbida O'quvchilarimiz issiq, sifatli va tabiiy halol
              mahsulotlardan taomlanishlari taminlanadi.Nonushta ,
              tushlik,tolmos choy ,barchasi halol, milliy taomlar.
            </app-text>
          </div>
        </div>
        <div :class="isDesktopSmall ? '' : 'pb-120'" style="position: relative">
          <swiper class="swiper" :options="swiperOptions2">
            <swiper-slide
              v-for="(item, index) in foodImage"
              :key="index"
              style="height: 300px; width: 250px"
            >
              <img
                :src="item.img"
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
    <div
      style="background-color: #fff; border-radius: 0px 0px 16px 16px"
      :class="isMobileSmall ? 'py-30' : 'py-60'"
    >
      <div class="container">
        <app-text
          :size="isMobile ? 22 : 44"
          :line-height="isMobile ? 30 : 52"
          class="color-gradient"
          weight="500"
          maxWidth="422"
          :class="isMobileSmall ? 'mb-30' : 'mb-60'"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Kitob bilim bulog'i - o'quvchining o'rtog'i
        </app-text>
      </div>
      <div style="position: relative">
        <swiper class="swiper" :options="swiperOptions3">
          <swiper-slide
            v-for="(item, i) in bookImages"
            :key="i"
            class="d-flex flex-column light"
            data-aos="fade-up"
            :data-aos-duration="(i + 1) * 500"
          >
            <img
              :src="item.img"
              :class="isMobile ? 'mb-20' : 'mb-30'"
              class="mx-auto"
              style="
                max-width: 1008px;
                width: 100%;
                height: auto;
                border-radius: 24px;
              "
            />
            <div style="max-width: 1008px; width: 100%" class="mx-auto">
              <app-text
                :size="isMobileSmall ? '16' : '30'"
                :line-height="isMobileSmall ? '20' : '42'"
                weight="500"
                :class="isMobileSmall ? 'mb-20' : 'mb-20'"
                class="color-trans-04"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                {{ item[$localeKey("title")] }}
              </app-text>
              <div
                class="d-flex flex-wrap"
                :style="isMobileSmall ? 'gap: 20px' : 'gap: 40px'"
              >
                <!-- <app-text
                    :size="isMobileSmall ? '16' : '30'"
                    :line-height="isMobileSmall ? '20' : '42'"
                    weight="600"
                    class="mb-10"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    50 dan ortiq
                  </app-text> -->
                <app-text
                  :size="isMobileSmall ? '14' : '20'"
                  :line-height="isMobileSmall ? '18' : '28'"
                  weight="500"
                  class="color-trans-04"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  {{ item[$localeKey("name")] }}
                </app-text>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div
      style="background-color: #660448"
      :class="isMobileSmall ? 'py-30' : isMobile ? 'py-60' : 'py-100'"
    >
      <div class="container">
        <div class="section__top">
          <app-text
            :size="isMobile ? 24 : 32"
            :line-height="isMobile ? 28 : 44"
            weight="500"
            max-width="330"
            class="color-red"
            data-aos="fade-up"
          >
            Biz haqimizda ko‘proq ma’lumot
          </app-text>
          <div class="section__top-details" data-aos="fade-up">
            <app-text
              :size="isMobile ? 16 : 24"
              :line-height="isMobile ? 24 : 32"
              weight="400"
              max-width="550"
              class="color-red mb-20"
            >
              Maktab haqida barcha ma’lumotlarni pdf katalog orqali oling
            </app-text>
            <router-link class="section__top-link" to="/">
              <AppButton
                theme="red"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                sides="20"
                :height="isMobileSmall ? '40' : '50'"
              >
                <span class="mr-10">PDF KATALOG</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.44 8.8999C20.04 9.2099 21.51 11.0599 21.51 15.1099V15.2399C21.51 19.7099 19.72 21.4999 15.25 21.4999H8.73998C4.26998 21.4999 2.47998 19.7099 2.47998 15.2399V15.1099C2.47998 11.0899 3.92998 9.2399 7.46998 8.9099"
                    stroke="#660448"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2V14.88"
                    stroke="#660448"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.3499 12.6499L11.9999 15.9999L8.6499 12.6499"
                    stroke="#660448"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </AppButton>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import CustomSlider from "@/components/pages/CustomSlider.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "AboutAs",
  components: {
    AppButton,
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
      swiperOptions3: {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 1.3,
        spaceBetween: 12,
        initialSlide: 0,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptions4: {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        grabCursor: true,
        loop: false,
        breakpoints: {
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        },
        spaceBetween: 12,
      },
      foodImage: [],
      bookImages: [],
      afzallikImages: [],
    };
  },
  methods: {
    getFoodImages() {
      this.loading = true;
      this.$api
        .get("gallery/?typ=4")
        .then((data) => {
          if (!data.error) {
            this.foodImage = data;
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
    getBookImages() {
      this.loading = true;
      this.$api
        .get("gallery/?typ=7")
        .then((data) => {
          if (!data.error) {
            this.bookImages = data;
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
    getAfzallikImages() {
      this.loading = true;
      this.$api
        .get("gallery/?typ=8")
        .then((data) => {
          if (!data.error) {
            this.afzallikImages = data;
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
    this.getFoodImages();
    this.getBookImages();
    this.getAfzallikImages();
  },
};
</script>

<style lang="scss" scoped>
.about-us {
  background-color: #fff;
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
.navigation.light {
  max-width: 1160px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
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
    svg {
      path {
        stroke: #000;
      }
    }

    &.prev {
      left: 0px !important;
    }
    &.next {
      right: 0px !important;
    }
  }
}
.swiper-slide.light {
  filter: blur(4px);
  -webkit-filter: blur(4px);
}
.swiper-slide-active.light {
  filter: blur(0px);
  -webkit-filter: blur(0px);
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
.about__school {
  display: flex;
  justify-content: space-between;
  border-radius: 20px;

  padding: 60px;
  margin-bottom: 30px;
  &-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    .image {
      width: 225px;
      height: 225px;
      background: linear-gradient(90deg, #ff6801 0.18%, #ff9e44 8.48%);
      border-radius: 5px;
      padding: 5px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    }
  }
  &-info {
    padding-left: 10px;
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
