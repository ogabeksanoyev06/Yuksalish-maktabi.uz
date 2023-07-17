<template>
  <section class="section py-60">
    <div class="container">
      <div class="slider" style="position: relative">
        <!-- <div class="navigation" v-if="!isDesktopSmall">
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
        </div> -->
        <!-- <swiper class="swiper items" :options="swiperOptions">
          <swiper-slide class="item" v-for="(item, i) in 10" :key="i">
            <app-text
              :size="isMobileSmall ? '20' : '32'"
              :line-height="isMobileSmall ? '28' : '44'"
              weight="500"
              :class="isMobile ? 'mb-15' : 'mb-20'"
              maxWidth="580"
              class="text-center"
            >
              “Chegirmalarni zo‘r o‘ylagansizlar, bu bolalarga motivatsiya va
              ota-onalarga ham katta yordam.”
            </app-text>
            <app-text
              :size="isMobileSmall ? '16' : '20'"
              :line-height="isMobileSmall ? '20' : '28'"
              weight="400"
              class="d-flex align-center"
            >
              <img
                src="/images/author.jpg"
                alt=""
                class="mr-10"
                style="width: 44px; height: 44px; object-fit: cover"
              />
              Anvar Berdiyev
            </app-text>
          </swiper-slide>
        </swiper> -->
      </div>
      <div class="animation-video">
        <div class="animation-video__item" data-aos="fade-up">
          <video
            loop
            muted
            @mouseover="playVideo(0)"
            @mouseleave="stopVideo(0)"
            ref="video1"
            :class="isMobile ? 'mb-10' : 'mb-20'"
          >
            <source src="@/assets/header.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          class="animation-video__item"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <video
            loop
            muted
            @mouseover="playVideo(1)"
            @mouseleave="stopVideo(1)"
            ref="video2"
            :class="isMobile ? 'mb-10' : 'mb-20'"
          >
            <source src="@/assets/header.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          class="animation-video__item"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <video
            loop
            muted
            @mouseover="playVideo(2)"
            @mouseleave="stopVideo(2)"
            ref="video3"
            :class="isMobile ? 'mb-10' : 'mb-20'"
          >
            <source src="@/assets/header.mp4" type="video/mp4" />
          </video>
          <!-- <app-text
            :size="isMobileSmall ? '16' : '20'"
            :line-height="isMobileSmall ? '20' : '28'"
            weight="500"
            class="mb-5"
          >
            Abdulaziz Abdukarimov
          </app-text>
          <app-text
            :size="isMobileSmall ? '14' : '16'"
            :line-height="isMobileSmall ? '18' : '24'"
            weight="400"
          >
            Matkabimizning binosining tashqi korinishi
          </app-text> -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "MotivationVdeo",
  components: {},
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 1,
        initialSlide: 0,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      videos: [],
    };
  },
  methods: {
    playVideo(index) {
      for (let i = 0; i < this.videos.length; i++) {
        if (i !== index) {
          this.videos[i].pause();
          this.videos[i].classList.remove("active");
        }
      }
      const video = this.videos[index];
      if (video.paused) {
        video.play();
        video.classList.add("active");
      } else {
        video.pause();
        video.classList.remove("active");
      }
    },
    stopVideo(index) {
      const video = this.videos[index];
      video.pause();
      video.currentTime = 0; // Videoni boshidan boshlash uchun
    },
  },
  mounted() {
    this.videos = [this.$refs.video1, this.$refs.video2, this.$refs.video3];
  },
};
</script>
<style lang="scss" scoped>
.swiper-button-prev:after,
.swiper-button-next:after {
  content: "";
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.animation-video {
  display: flex;
  gap: 12px;
  margin-top: 50px;
  &__item {
    display: flex;
    flex-direction: column;
    video {
      max-width: 390px;
      height: 500px;
      width: 100%;
      object-fit: cover;
      transition: max-width 0.35s cubic-bezier(0, 0, 0.58, 1);
      border-radius: 12px;
      position: relative;
      z-index: 1;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.35);
        z-index: 2;
      }

      &.active {
        max-width: 500px;
      }
    }
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
  .animation-video {
    display: grid;
    grid-template-columns: 1fr 1fr;
    &__item {
      display: flex;
      justify-content: center;
      video {
        max-width: 390px;
        &.active {
          max-width: 500px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .animation-video {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    &__item {
      video {
        max-width: 390px;
        height: 350px;
        &.active {
          max-width: 500px;
        }
      }
    }
  }
}
@media (max-width: 500px) {
}
</style>
