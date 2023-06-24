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
    <app-modal
      class="test-answer__modal"
      v-if="onlineReception"
      @close="closeModal"
    >
      <div class="modal__wrap">
        <div class="modal__body">
          <div class="modal__body-left">
            <img src="/images/girls.png" alt="" />
          </div>
          <div class="modal__body-right py-30">
            <app-text
              :size="isMobileSmall ? '24' : '28'"
              :line-height="isMobileSmall ? '32' : '36'"
              weight="500"
              class="mb-20"
            >
              Qabulga yoziling
            </app-text>
            <app-text
              :size="isMobileSmall ? '16' : '20'"
              :line-height="isMobileSmall ? '22' : '28'"
              class="mb-30"
            >
              Qabul uchun bizga yoziling va biz sizga tez orada aloqaga
              chiqamiz.
            </app-text>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
              <el-form-item prop="name">
                <div class="d-flex align-center el-group-input">
                  <div class="icon">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.0007 2.33334C10.944 2.33334 8.45898 4.81834 8.45898 7.87501C8.45898 10.8733 10.804 13.3 13.8607 13.405C13.954 13.3933 14.0473 13.3933 14.1173 13.405C14.1407 13.405 14.1523 13.405 14.1757 13.405C14.1873 13.405 14.1873 13.405 14.199 13.405C17.1857 13.3 19.5307 10.8733 19.5423 7.87501C19.5423 4.81834 17.0573 2.33334 14.0007 2.33334Z"
                        fill="#F4BE9A"
                      />
                      <path
                        d="M19.9271 16.5083C16.6721 14.3383 11.3638 14.3383 8.08544 16.5083C6.60378 17.5 5.78711 18.8417 5.78711 20.2767C5.78711 21.7117 6.60378 23.0417 8.07378 24.0217C9.70711 25.1183 11.8538 25.6667 14.0004 25.6667C16.1471 25.6667 18.2938 25.1183 19.9271 24.0217C21.3971 23.03 22.2138 21.7 22.2138 20.2533C22.2021 18.8183 21.3971 17.4883 19.9271 16.5083Z"
                        fill="#F37221"
                      />
                    </svg>
                  </div>
                  <el-input
                    placeholder="Ismingizni yozing"
                    v-model="ruleForm.name"
                  />
                </div>
              </el-form-item>
              <el-form-item prop="phone">
                <div class="d-flex align-center el-group-input">
                  <div class="icon">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_454_1250)">
                        <path
                          d="M21.2871 18.5226C20.3724 17.6194 19.2304 17.6194 18.3214 18.5226C17.6281 19.2101 16.9347 19.8976 16.253 20.5968C16.0666 20.7891 15.9093 20.8299 15.682 20.7017C15.2334 20.457 14.7556 20.2589 14.3244 19.9908C12.3143 18.7265 10.6304 17.1009 9.13882 15.2714C8.39885 14.3624 7.74045 13.3894 7.28016 12.294C7.18693 12.0726 7.20441 11.9269 7.38503 11.7463C8.07839 11.0762 8.75427 10.3887 9.43597 9.70118C10.3857 8.74563 10.3857 7.62694 9.43015 6.66556C8.88828 6.11786 8.34641 5.58182 7.80454 5.03413C7.2452 4.47478 6.69168 3.90961 6.1265 3.35609C5.21174 2.46463 4.06973 2.46463 3.16079 3.36191C2.46161 4.04944 1.79156 4.75445 1.08072 5.43033C0.422323 6.05377 0.0902101 6.81705 0.0202916 7.70851C-0.0904125 9.15932 0.265006 10.5286 0.766088 11.8628C1.79156 14.6246 3.35307 17.0776 5.24669 19.3266C7.80454 22.3681 10.8576 24.7744 14.4293 26.5107C16.0374 27.2915 17.7038 27.8916 19.5159 27.9907C20.7628 28.0606 21.8465 27.746 22.7146 26.7729C23.309 26.1087 23.979 25.5027 24.6083 24.8677C25.5405 23.9238 25.5463 22.7818 24.6199 21.8495C23.5129 20.7366 22.4 19.6296 21.2871 18.5226Z"
                          fill="#F37221"
                        />
                        <path
                          d="M20.1744 13.8788L22.3244 13.5117C21.9864 11.5365 21.0542 9.7478 19.6383 8.32612C18.1409 6.8287 16.2473 5.8848 14.1614 5.59348L13.8584 7.75512C15.4723 7.98236 16.9406 8.71067 18.1001 9.87015C19.1955 10.9655 19.9122 12.3523 20.1744 13.8788Z"
                          fill="#F4BE9A"
                        />
                        <path
                          d="M23.5359 4.53304C21.0538 2.05094 17.9133 0.483602 14.4465 0L14.1436 2.16164C17.1384 2.58116 19.8536 3.93874 21.9977 6.07708C24.0312 8.11054 25.3655 10.68 25.8491 13.5059L27.9991 13.1388C27.4339 9.86433 25.8899 6.89279 23.5359 4.53304Z"
                          fill="#F4BE9A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_454_1250">
                          <rect width="28" height="28" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <el-input
                    placeholder="+998"
                    v-model="ruleForm.phone"
                    v-mask="'998-#########'"
                  />
                </div>
              </el-form-item>
              <el-form-item prop="region">
                <div class="d-flex align-center el-group-input">
                  <div class="icon">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.0563 9.85833C22.8313 4.46833 18.1296 2.04167 13.9996 2.04167C13.9996 2.04167 13.9996 2.04167 13.988 2.04167C9.86962 2.04167 5.15629 4.45667 3.93129 9.84667C2.56629 15.8667 6.25296 20.965 9.58962 24.1733C10.8263 25.3633 12.413 25.9583 13.9996 25.9583C15.5863 25.9583 17.173 25.3633 18.398 24.1733C21.7346 20.965 25.4213 15.8783 24.0563 9.85833Z"
                        fill="#F4BE9A"
                      />
                      <path
                        d="M14.0002 15.7033C16.0298 15.7033 17.6752 14.058 17.6752 12.0283C17.6752 9.99869 16.0298 8.35333 14.0002 8.35333C11.9705 8.35333 10.3252 9.99869 10.3252 12.0283C10.3252 14.058 11.9705 15.7033 14.0002 15.7033Z"
                        fill="#F37221"
                      />
                    </svg>
                  </div>
                  <el-select
                    v-model="ruleForm.region"
                    placeholder="Filialni tanlang"
                    class="w-100"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option
                  ></el-select>
                </div>
              </el-form-item>
              <app-button
                sides="20"
                class="w-100"
                font-size="14"
                theme="main"
                @click="submitForm('ruleForm')"
              >
                Yuborish
              </app-button>
            </el-form>
          </div>
        </div>
      </div>
    </app-modal>
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
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      ruleForm: {
        name: "",
        phone: "",
        region: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Ismingizni kiriting",
            trigger: "blur",
          },
          {
            min: 3,
            message: "Eng kamida 3ta belgidan iborat bo'lishi kerak",
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            message: "Telefoningizni kiriting",
            trigger: "blur",
          },
          {
            min: 9,
            message: "Kamida 9 ya belgidan iborat bo'lishi kerak",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "Viloyatni tanlang",
            trigger: "change",
          },
        ],
      },
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
.modal__body {
  display: flex;
  &-left {
    max-width: 590px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      vertical-align: middle;
    }
  }
  &-right {
    width: calc(100% - 590px);
    padding: 60px 40px;
    padding-bottom: 30px;
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
