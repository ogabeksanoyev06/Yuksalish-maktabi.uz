<template>
  <div class="modal" :class="{ visible: !hidden }">
    <div class="modal__content">
      <button class="modal__close" @click="close">
        <!--        <dynamic-icon icon="close"/>-->
        <img src="/icons/close.svg" alt="" />
      </button>

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
                    v-mask="'#########'"
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
    </div>
    <div class="overlay" @click="close"></div>
  </div>
</template>

<script>
import "../../assets/styles/components/app-modal.scss";
import AppButton from "./AppButton.vue";

export default {
  components: { AppButton },
  name: "AppModal",
  data() {
    return {
      hidden: true,
      options: [
        {
          value: "Toshkent",
          label: "Toshkent",
        },
        {
          value: "Farg'ona",
          label: "Farg'ona",
        },
        {
          value: "Samarqand",
          label: "Samarqand",
        },
        {
          value: "Jizzah",
          label: "Jizzah",
        },
        {
          value: "Andijon",
          label: "Andijon",
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
    close() {
      this.hidden = true;
      this.$emit("close");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          try {
            this.$api
              .post(`feedback/`, {
                name: this.ruleForm.name,
                message: this.ruleForm.region,
                number: this.ruleForm.phone,
              })
              .then((data) => {
                if (data.success) {
                  this.successNotification("Yuborildi");
                }
              })
              .catch((error) => {
                console.log("Error" + ": " + error);
              })
              .finally(() => {});
          } catch (e) {
            console.log(e);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  async mounted() {
    setTimeout(() => {
      this.hidden = false;
    }, 10);
  },
};
</script>

<style lang="scss" scoped>
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

@media (max-width: 801px) {
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
</style>
