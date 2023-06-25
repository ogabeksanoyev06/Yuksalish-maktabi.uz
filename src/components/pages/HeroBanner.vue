<template>
  <div class="hero-banner">
    <app-header />
    <div class="container">
      <div class="hero-banner__inner py-30">
        <div
          class="hero-banner__content"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <!-- :class="isMobile ? '' : 'color-white'" -->
          <h1 class="hero-banner__title" :class="isMobile ? '' : 'color-white'">
            Yuksalish maktabi - ta’lim va tarbiya birlashgan dargoh
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!isMobile"
            >
              <path
                d="M28.8166 17.5717L31.6767 23.2917C32.0667 24.0717 33.1066 24.8517 33.9733 24.9817L39.1517 25.8483C42.4667 26.4117 43.2466 28.795 40.8633 31.1783L36.8333 35.2083C36.1617 35.88 35.7716 37.2017 35.9883 38.155L37.1367 43.16C38.0467 47.1033 35.945 48.6417 32.4567 46.5833L27.6033 43.7017C26.715 43.1817 25.285 43.1817 24.3967 43.7017L19.5433 46.5833C16.055 48.6417 13.9533 47.1033 14.8633 43.16L16.0117 38.155C16.2284 37.2233 15.8383 35.9017 15.1667 35.2083L11.1367 31.1783C8.75336 28.795 9.53332 26.39 12.8483 25.8483L18.0267 24.9817C18.8933 24.83 19.9333 24.0717 20.3233 23.2917L23.1834 17.5717C24.7217 14.4733 27.2783 14.4733 28.8166 17.5717Z"
                fill="#F2741E"
              />
              <g opacity="0.6">
                <path
                  opacity="0.6"
                  d="M13 21.125C12.1117 21.125 11.375 20.3883 11.375 19.5V4.33334C11.375 3.44501 12.1117 2.70834 13 2.70834C13.8883 2.70834 14.625 3.44501 14.625 4.33334V19.5C14.625 20.3883 13.8883 21.125 13 21.125Z"
                  fill="#F2741E"
                />
              </g>
              <g opacity="0.6">
                <path
                  opacity="0.6"
                  d="M39 21.125C38.1117 21.125 37.375 20.3883 37.375 19.5V4.33334C37.375 3.44501 38.1117 2.70834 39 2.70834C39.8883 2.70834 40.625 3.44501 40.625 4.33334V19.5C40.625 20.3883 39.8883 21.125 39 21.125Z"
                  fill="#F2741E"
                />
              </g>
              <g opacity="0.6">
                <path
                  opacity="0.6"
                  d="M26 10.2917C25.1117 10.2917 24.375 9.55501 24.375 8.66668V4.33334C24.375 3.44501 25.1117 2.70834 26 2.70834C26.8883 2.70834 27.625 3.44501 27.625 4.33334V8.66668C27.625 9.55501 26.8883 10.2917 26 10.2917Z"
                  fill="#F2741E"
                />
              </g>
            </svg>
          </h1>
          <div class="hero-banner__cta">
            <div class="hero-banner__info">
              <app-text
                :size="isMobileSmall ? '14' : '18'"
                :line-height="isMobileSmall ? '20' : '26'"
                weight="400"
                maxWidth="490"
                class="mb-30"
                :class="isMobile ? '' : 'color-white'"
              >
                Bizning vazifamiz - intellektual va tandiqiy fikrovchi, o‘zini
                namoyon qila oladigan yoshlarni tayyorlash
              </app-text>
              <!-- :class="isMobile ? '' : 'color-white'" -->

              <AppButton
                theme="main"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="isMobileSmall ? '15' : '20'"
                class="mr-10 mb-10 d-flex align-center"
                :height="isMobileSmall ? '40' : '50'"
                @click="modalTrue"
              >
                <span :class="isMobileSmall ? '' : 'mr-10'">
                  ONLAYN QABUL
                </span>
                <img src="/icons/angle-right.svg" alt="" />
              </AppButton>
            </div>
            <div class="hero-banner__photo" v-if="isMobile">
              <div class="cards">
                <div
                  class="cards__item"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <video
                    :controls="false"
                    style="width: 100%; height: 100%; object-fit: cover"
                    id="videoPlayerOne"
                  >
                    <source src="@/assets/maktab.mp4" type="video/mp4" />
                  </video>
                  <div class="cards__item-icon" @click="togglePlayOne">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.666626 10V5.84667C0.666626 0.690004 4.31829 -1.42166 8.78663 1.15667L12.3916 3.23334L15.9966 5.31C20.465 7.88834 20.465 12.1117 15.9966 14.69L12.3916 16.7667L8.78663 18.8433C4.31829 21.4217 0.666626 19.31 0.666626 14.1533V10Z"
                        fill="#F47820"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  class="cards__item"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <video
                    :controls="false"
                    style="width: 100%; height: 100%; object-fit: cover"
                    id="videoPlayerTwo"
                  >
                    <source src="@/assets/header.mp4" type="video/mp4" />
                  </video>
                  <div class="cards__item-icon" @click="togglePlayTwo">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.666626 10V5.84667C0.666626 0.690004 4.31829 -1.42166 8.78663 1.15667L12.3916 3.23334L15.9966 5.31C20.465 7.88834 20.465 12.1117 15.9966 14.69L12.3916 16.7667L8.78663 18.8433C4.31829 21.4217 0.666626 19.31 0.666626 14.1533V10Z"
                        fill="#F47820"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-modal v-if="onlineReception" @close="closeModal" />
  </div>
</template>

<script>
import AppHeader from "../layouts/default/app-header/AppHeader.vue";
import AppButton from "../shared-components/AppButton.vue";
import AppModal from "../shared-components/AppModal.vue";

export default {
  name: "HeroBanner",
  components: { AppButton, AppHeader, AppModal },
  data() {
    return {
      search: "",
      isPlayingOne: false,
      isPlayingTwo: false,
      onlineReception: false,
    };
  },
  methods: {
    togglePlayOne() {
      const video = document.getElementById("videoPlayerOne");
      if (this.isPlayingOne) {
        video.pause();
      } else {
        video.play();
      }
      this.isPlayingOne = !this.isPlayingOne;
    },
    togglePlayTwo() {
      const video = document.getElementById("videoPlayerTwo");
      if (this.isPlayingTwo) {
        video.pause();
      } else {
        video.play();
      }
      this.isPlayingTwo = !this.isPlayingTwo;
    },
    closeModal() {
      this.onlineReception = false;
    },
    modalTrue() {
      this.onlineReception = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-banner {
  background-color: #fff;
  background-image: url("@/assets/home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(100vh - 0px);
  background-attachment: fixed;
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    background: #000;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.2;
    z-index: -1;
  }
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 99;
  }

  &__title {
    font-weight: 500;
    font-size: 64px;
    line-height: 78px;
    margin-bottom: 30px;
    max-width: 810px;
    width: 100%;
  }

  &__content {
    width: 100%;
  }

  &__photo {
    .cards {
      display: flex;
      &__item {
        width: 280px;
        height: 450px;
        border-radius: 24px;
        margin-right: 20px;
        transition: 0.3s;
        overflow: hidden;
        position: relative;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 1px 10px 0px;
        &-icon {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 44px;
          height: 44px;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          cursor: pointer;
        }
        &:last-child {
          margin-top: -250px;
          margin-right: 0;
        }
      }
    }
  }

  &__cta {
    display: flex;
    justify-content: space-between;
  }
}

@media (max-width: 1300px) {
  .hero-banner {
    &__photo {
      .cards {
        display: flex;
        &__item {
          width: 300px;
          height: 450px;
          border-radius: 24px;
          margin-right: 20px;
          transition: 0.3s;
          &:last-child {
            margin-top: 0px;
          }
        }
      }
    }
  }
}
@media (max-width: 1150px) {
  .hero-banner {
    &__title {
      font-size: 52px;
      line-height: 64px;
    }
  }
}
@media (max-width: 991px) {
  .modal__body {
    &-left {
      max-width: 40%;
    }
    &-right {
      width: calc(100% - 40%);
      padding: 20px;
    }
  }
}
@media (max-width: 876px) {
  .hero-banner__inner {
    flex-wrap: wrap;
    justify-content: unset;
  }
  .hero-banner__title {
    font-size: 36px;
    line-height: 42px;
    max-width: 100%;
  }
  .hero-banner__content {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  .hero-banner__cta {
    flex-direction: column;
    align-items: center;
  }
  .hero-banner__photo {
    .cards {
      flex-wrap: wrap;
      justify-content: center;
      &__item {
        width: 300px;
        height: 450px;
        // background-color: #d9d9d9;
        border-radius: 24px;
        margin-right: 20px;
        transition: 0.3s;
        &:last-child {
          margin-top: 0px;
        }
      }
    }
  }
}
@media (max-width: 801px) {
  .hero-banner {
    background-color: #fff;
    background-image: none;
    height: auto;
    &__inner {
      display: flex;
      justify-content: space-between;
      width: 100%;
      min-height: calc(100vh - 0px);

      padding: 30px 0;
    }
  }
  .modal__body {
    flex-direction: column;
    width: 100%;
    &-left {
      max-width: 100%;
      width: 100%;
    }
    &-right {
      max-width: 100%;
      width: 100%;
      padding: 20px;
    }
  }
}
@media (max-width: 500px) {
  .hero-banner__info {
    margin-bottom: 30px;
  }
  .hero-banner {
    &__title {
      font-size: 24px;
      line-height: 30px;
    }
    &__photo {
      .cards {
        &__item {
          margin-right: 0;
          margin-bottom: 20px;
          height: 300px;
        }
      }
    }

    &__cta {
    }
  }
}
</style>
