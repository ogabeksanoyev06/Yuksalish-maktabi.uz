<template>
  <section class="">
    <hero-banner />
    <!--  -->
    <cta-banner />
    <!--  -->
    <div :class="isMobile ? 'py-30' : 'py-60'">
      <div class="container">
        <div style="max-width: 750px" class="mx-auto">
          <app-text
            :size="isMobile ? 28 : 42"
            :line-height="isMobile ? 26 : 50"
            :class="isMobile ? 'mb-20' : 'mb-40'"
            weight="700"
            class="text-start color-orange-gradient"
            data-aos="fade-up"
          >
            Yuksalish maktabi haqida
          </app-text>
          <app-text
            :size="isMobile ? 16 : 18"
            :line-height="isMobile ? 24 : 32"
            :class="isMobile ? 'mb-20' : 'mb-40'"
            weight="500"
            data-aos="fade-up"
          >
            “Yuksalish maktabi” maktabi farzandingiz uchun har tomonlama ideal
            tanlovdir. Maktabda o’zbek, rus, ingiliz va arab tillarida ta’lim
            beriladi. 11 yillik ta’lim tizimiga mo’ljallangan bo’lib, bu vaqt
            davomida o’quvchilarimiz xorijiy tillarni hamda aniq fanlarni puxta
            o’zlashtiradilar. Shu bilan birga o’quvchilarimizning ahloqlariga
            alohida e’tibor bergan holatda ta’lim oladilar.
          </app-text>
        </div>
        <!-- <youtube-link-banner /> -->
      </div>
      <!--  -->
      <div style="max-width: 800px" class="mx-auto">
        <video
          style="width: 100%; height: auto"
          poster="/images/bg_video.png"
          controls
        >
          <source src="@/assets/maktab.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <!--  -->
    <div class="py-60">
      <div class="container">
        <app-text
          :size="isMobile ? 32 : 42"
          :line-height="isMobile ? 38 : 54"
          class="mb-40 mx-auto color-orange-gradient"
          weight="700"
          data-aos="fade-up"
        >
          Yuksalish maktablari
        </app-text>
        <div
          style="display: grid; gap: 30px"
          :style="
            isMobile
              ? 'grid-template-columns: 1fr'
              : isDesktopSmall
              ? 'grid-template-columns: 1fr 1fr'
              : 'grid-template-columns: 1fr 1fr'
          "
        >
          <div
            class="pa-30"
            style="
              background: linear-gradient(137deg, #ff6801 0%, #ffa365 100%);
              border-radius: 16px;
              min-height: 210px;
            "
            data-aos="fade-up"
          >
            <app-text
              :size="isMobile ? 24 : 32"
              :line-height="isMobile ? 28 : 36"
              class="mb-10 color-white"
              weight="700"
            >
              Maqsadi
            </app-text>
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 22 : 24"
              weight="400"
              class="color-white"
            >
              Taʼlim va tarbiyani barcha bosqichlarini oʼz ichiga olgan yaxlit
              tizim yaratish asnosida zamonaviy bilim va yuqori malakaga ega
              bo’lgan raqobatbardosh avlodni tayyorlash.
            </app-text>
          </div>
          <div v-if="!isMobile"></div>
          <div v-if="!isMobile"></div>
          <div
            class="pa-30"
            style="
              background: linear-gradient(133deg, #84a9ff 0%, #b2caff 100%);
              border-radius: 16px;
              min-height: 210px;
            "
            data-aos="fade-up"
          >
            <app-text
              :size="isMobile ? 24 : 32"
              :line-height="isMobile ? 28 : 36"
              class="mb-10 color-white"
              weight="700"
            >
              Missiyasi
            </app-text>
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 22 : 24"
              weight="400"
              class="color-white"
            >
              Yoshlarimizga barcha fanlar boʼyicha jahon andozalari darajasida
              bilim berish, ular intellektual salohiyatini oshirish, tafakkur
              qilish muhitini yaratish.
            </app-text>
          </div>

          <div
            class="pa-30"
            style="
              background: linear-gradient(99.18deg, #eeeeee 0%, #fbf9f9 100%);
              border-radius: 16px;
              min-height: 210px;
            "
            data-aos="fade-up"
          >
            <app-text
              :size="isMobile ? 24 : 32"
              :line-height="isMobile ? 28 : 36"
              class="mb-10"
              weight="700"
            >
              Qadriyati
            </app-text>
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 22 : 24"
              weight="400"
            >
              Yoshlarimizni oʼzligini, milliy qadriyatlarini unutmasdan, zamon
              talablari asosida tarbiyalash, jahon ilm-fanini oʼrgatgan
              ajdodlariga munosib avlod boʼlib yetishtirish.
            </app-text>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="py-60">
      <div class="container">
        <img
          src="/images/image.jpg"
          alt=""
          style="width: 100%; height: auto; border-radius: 15px"
        />
      </div>
    </div>
    <!--  -->
    <course-slider />
    <!--  -->
    <div :class="isMobile ? 'py-30' : 'py-60'" class="selection">
      <div class="container">
        <div class="d-flex align-center flex-wrap justify-space-between mb-30">
          <div class="mb-20">
            <app-text
              :size="isMobile ? 32 : 42"
              :line-height="isMobile ? 40 : 50"
              weight="700"
              class="text-start color-orange-gradient mb-20"
              data-aos="fade-up"
            >
              Bizning tanlovlar
            </app-text>
            <div class="d-flex align-center">
              <img
                src="/images/fanlar-min.webp"
                alt=""
                style="width: 60px; height: 60px"
                class="mr-20"
                v-if="!isMobileSmall"
              />
              <app-text
                :size="isMobile ? 18 : 23"
                :line-height="isMobile ? 24 : 35"
                class="color-white"
                weight="400"
                data-aos="fade-up"
                max-width="460"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </app-text>
            </div>
          </div>
          <div
            class="d-flex pa-20 mb-20"
            style="border: 1px solid #fff; border-radius: 10px"
          >
            <img
              src="/images/sinov-min.webp"
              alt=""
              style="width: 100px; height: 100px"
              v-if="!isMobileSmall"
            />
            <app-text
              :size="isMobile ? 18 : 23"
              :line-height="isMobile ? 24 : 35"
              weight="400"
              class="color-white"
              data-aos="fade-up"
              max-width="380"
            >
              Sinovdan o’tgan o’quvchilar 1 hafta davomida bepul ta’lim olish
              imkoniyatiga ega bo’ladilar
            </app-text>
          </div>
        </div>
        <div class="d-flex flex-wrap">
          <div
            v-for="(item, i) in 10"
            :key="i"
            class="selection__item"
            data-aos="fade-up"
            :data-aos-duration="(i + 1) * 100"
          >
            <app-text
              :size="isMobile ? 16 : 20"
              :line-height="isMobile ? 24 : 28"
              weight="400"
              class=""
              data-aos="fade-up"
            >
              Lorem ipsum dolor sit amet.
            </app-text>
            <div class="num">{{ i + 1 }}</div>
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
            weight="500"
            data-aos="fade-up"
          >
            Chegirma va <br />
            imkoniyatlar
          </app-text>
          <div class="section__top-details" data-aos="fade-up">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 24 : 26"
              class="mb-20"
              weight="400"
              max-width="500"
            >
              Bizning chegirma va imtiyozlarimiz yoshlarga motivatsiya bo'la
              oladi.
            </app-text>
          </div>
        </div>
        <div class="reliefs">
          <div class="items">
            <div
              class="item"
              v-for="(item, i) in 6"
              :key="i"
              data-aos="zoom-in"
              :data-aos-duration="(i + 1) * 2000"
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
    <!--  -->
    <div :class="isMobileSmall ? 'py-30' : 'py-60'" class="receptions">
      <div class="container">
        <div
          class="d-flex justify-space-between"
          :class="isDesktopSmall ? 'flex-wrap justify-content-center' : ''"
        >
          <div>
            <app-text
              :size="isMobile ? 32 : 44"
              :line-height="isMobile ? 40 : 52"
              weight="700"
              class="color-kok mb-20"
              data-aos="fade-up"
              max-width="620"
            >
              Qabulimiz 3 xil turga bolinadi
            </app-text>
            <app-text
              :size="isMobile ? 16 : 20"
              :line-height="isMobile ? 24 : 30"
              weight="500"
              class="mb-20"
              max-width="500"
              data-aos="fade-up"
            >
              Maktabizdagi imtihonlar bolalarning yoshiga qarab bo'lingan
              bo'lib, unda suhbat va test orqali bolalar sinaladi
            </app-text>
          </div>
          <div class="items" data-aos="fade-up" data-aos-duration="1000">
            <div class="item" data-aos="fade-up" data-aos-duration="100">
              <app-text :size="20" :line-height="30" class="color-white">
                01
              </app-text>
              <app-text
                :size="16"
                :line-height="22"
                weight="700"
                class="color-white"
              >
                Maktabgacha ta'lim
              </app-text>
            </div>
            <div class="item" data-aos="fade-up" data-aos-duration="200">
              <app-text :size="20" :line-height="30" class="color-white">
                02
              </app-text>
              <app-text
                :size="16"
                :line-height="22"
                weight="700"
                class="color-white"
              >
                Birinchi sinf qabuli
              </app-text>
            </div>
            <div class="item" data-aos="fade-up" data-aos-duration="300">
              <app-text :size="20" :line-height="30" class="color-white">
                03
              </app-text>
              <app-text
                :size="16"
                :line-height="22"
                weight="700"
                class="color-white"
              >
                Yuqori sinflar qabuli
              </app-text>
            </div>
            <div class="item" data-aos="fade-up" data-aos-duration="400">
              <app-text :size="20" :line-height="30" class="color-white">
                04
              </app-text>
              <app-text
                :size="16"
                :line-height="22"
                weight="700"
                class="color-white"
              >
                Matematika
              </app-text>
            </div>
            <div class="item" data-aos="fade-up" data-aos-duration="500">
              <app-text :size="20" :line-height="30" class="color-white">
                05
              </app-text>
              <app-text
                :size="16"
                :line-height="22"
                weight="700"
                class="color-white"
              >
                Ingliz tili
              </app-text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-60">
      <div class="container">
        <div class="section__top mb-30">
          <app-text
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 28 : 36"
            weight="500"
            data-aos="fade-up"
          >
            Maktabimizdan <br />
            fotogalereya
          </app-text>
          <div class="section__top-details" data-aos="fade-up">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 24 : 26"
              class="mb-20"
              weight="400"
              max-width="500"
            >
              Maktablarimiz bino, xona, bolalar o‘quv jarayonidan, turli xil
              sport musobaqalardan olingan rasmlar.
            </app-text>
            <router-link class="section__top-link" to="/about-us">
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
      <custom-slider :topLink="true" :bgGreen="false" />
    </div>
    <!--  -->
    <div class="bg" :class="isMobileSmall ? 'py-30' : 'py-60'">
      <div class="container">
        <div class="section__top mb-30">
          <app-text
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 28 : 36"
            class="color-white"
            weight="500"
            data-aos="fade-up"
          >
            Maktabga ekskursiya
          </app-text>
          <div class="section__top-details" data-aos="fade-up">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 24 : 26"
              class="mb-20 color-white"
              weight="400"
              max-width="500"
            >
              Yuksalish maktablariga tashrif buyuring. Maktab faoliyati va o'quv
              sharoiti bilan yaqindan tanishing.
            </app-text>
          </div>
        </div>
      </div>
      <youtube-link-banner
        :topLink="true"
        :bgGreen="true"
        :link="'https://youtu.be/rtWW7nRu4II'"
      />
    </div>
    <!--  -->
    <motiovation-video />
    <!-- <div
      style="background-color: #fff; border-radius: 0px 0px 16px 16px"
      class="mb-30"
    >
      <div class="container">
        <div
          style="
            background: linear-gradient(180deg, #2667ff 0%, #7497ff 100%);
            border-radius: 24px;
            padding-left: 10px;
            padding-right: 10px;
          "
          :class="isMobile ? 'py-30' : 'py-60'"
        >
          <div class="d-flex flex-column justify-content-center align-center">
            <app-text
              :size="isMobile ? 20 : 30"
              :line-height="isMobile ? 26 : 36"
              class="color-white text-center mb-20"
              weight="500"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Savollarinigiz bormi?
            </app-text>
            <app-text
              :size="isMobile ? 16 : 24"
              :line-height="isMobile ? 22 : 32"
              class="color-white text-center"
              weight="400"
              maxWidth="700"
              :class="isMobile ? 'mb-20' : 'mb-40'"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Ozingizni qiziqtirgan savollar bolsa quydagi formani toldiring va
              operatorlarimiz siz bilan tezda aloqaga chiqishadi
            </app-text>
            <div data-aos="fade-up" data-aos-duration="1000">
              <AppButton
                theme="white"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                sides="20"
                :height="isMobileSmall ? '40' : '50'"
              >
                ALOQAGA CHIQISH
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
import HeroBanner from "@/components/pages/HeroBanner.vue";
import AppButton from "@/components/shared-components/AppButton.vue";
import CustomSlider from "@/components/pages/CustomSlider.vue";
import MotiovationVideo from "@/components/pages/MotiovationVideo.vue";
import YoutubeLinkBanner from "@/components/pages/YoutubeLinkBanner.vue";
import CourseSlider from "@/components/pages/CourseSlider.vue";
import CtaBanner from "@/components/pages/CtaBanner.vue";
export default {
  name: "AppHome",
  components: {
    HeroBanner,
    AppButton,
    CustomSlider,
    MotiovationVideo,
    YoutubeLinkBanner,
    CourseSlider,
    CtaBanner,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
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
.bg {
  background-image: linear-gradient(
    0.33028155376282897turn,
    rgba(253, 125, 125, 1) 0%,
    rgba(255, 201, 72, 1) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
}
video::-webkit-media-controls-panel {
  // Your styling here
  background-image: linear-gradient(
    transparent,
    transparent
  ) !important; //Transparent for your case
}
video[poster] {
  width: 100%;
  height: auto;
}
.selection {
  background-image: linear-gradient(
    0.38451118195724093turn,
    rgba(43, 56, 94, 1) 0%,
    rgba(24, 31, 52, 1) 98%
  );
  color: #fff;
  border-radius: 0px 0px 16px 16px;
  &__item {
    border-radius: 10px;
    background-image: linear-gradient(
      0.33028155376282897turn,
      rgba(253, 125, 125, 1) 0%,
      rgba(255, 201, 72, 1) 100%
    );

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
.receptions {
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    .item {
      border-radius: 5px;
      background-image: linear-gradient(
        0.33028155376282897turn,
        rgba(253, 125, 125, 1) 14%,
        rgba(255, 201, 72, 1) 100%
      );
      border-color: transparent;
      border-style: solid;
      width: 180px;
      height: 115px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
  .receptions {
    .items {
      grid-template-columns: 1fr 1fr;
    }
  }
}
@media (max-width: 500px) {
  .receptions {
    .items {
      .item {
        border-radius: 5px;
        background-image: linear-gradient(
          0.33028155376282897turn,
          rgba(253, 125, 125, 1) 14%,
          rgba(255, 201, 72, 1) 100%
        );
        border-color: transparent;
        border-style: solid;
        width: 150px;
        min-height: 100px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
}
</style>
