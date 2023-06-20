<template>
  <section class="section">
    <div style="background-color: #111011">
      <div
        style="background-color: #fff; border-radius: 0px 0px 16px 16px"
        class="py-60"
      >
        <div class="container">
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
              Qabul haqida malumotlarimiz
            </app-text>
            <app-text
              :size="isMobile ? 16 : 20"
              :line-height="isMobile ? 22 : 32"
              weight="200"
              class="mb-30 mx-auto text-center color-trans-04"
              maxWidth="415"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              Maktablarimizga bolalarni qabul qilish tartibi bilan tanishing
            </app-text>
            <div data-aos="fade-up" data-aos-duration="900">
              <app-button
                theme="main"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="isMobileSmall ? '15' : '20'"
                class="mb-30 mx-auto d-flex align-center"
                :height="isMobileSmall ? '40' : '50'"
              >
                <span :class="isMobileSmall ? '' : 'mr-10'">
                  QABULGA YOZILISH
                </span>
                <img src="/icons/angle-right.svg" alt="" />
              </app-button>
            </div>
          </div>
        </div>
        <youtube-link-banner :topLink="false" :bgGreen="false" />
      </div>
      <div class="py-60">
        <div class="container">
          <div class="section__top" :class="isMobile ? 'mb-30' : 'mb-60'">
            <app-text
              :size="isMobile ? 24 : 30"
              :line-height="isMobile ? 28 : 36"
              weight="500"
              class="color-white"
              max-width="272"
              data-aos="fade-up"
            >
              Qabul tartibi bilan tanishing
            </app-text>
          </div>
          <div
            class="d-flex align-center"
            :class="
              (isMobile ? 'flex-column' : '', isMobile ? 'mb-30' : 'mb-60')
            "
          >
            <div
              :style="isMobile ? 'margin-bottom:30px' : 'width:400px'"
              class="mr-20"
            >
              <app-text
                :size="isMobile ? 24 : 41"
                :line-height="isMobile ? 32 : 50"
                weight="500"
                class="color-gradient mb-15"
                :class="isMobileSmall ? 'mx-auto' : ''"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                Rezin Art
              </app-text>
              <app-text
                :size="isMobile ? 24 : 41"
                :line-height="isMobile ? 32 : 50"
                weight="500"
                class="color-gradient mb-15"
                data-aos="fade-right"
                data-aos-duration="600"
              >
                Imtihon.
              </app-text>
              <app-text
                :size="isMobile ? 24 : 41"
                :line-height="isMobile ? 32 : 50"
                weight="500"
                class="color-gradient mb-15"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                Suhbat.
              </app-text>
              <app-text
                :size="isMobile ? 24 : 41"
                :line-height="isMobile ? 32 : 50"
                weight="500"
                class="color-gradient"
                :class="isMobileSmall ? 'mb-15' : 'mb-30'"
                data-aos="fade-right"
                data-aos-duration="750"
              >
                Test.
              </app-text>
              <app-text
                :size="isMobile ? 16 : 20"
                :line-height="isMobile ? 22 : 28"
                weight="400"
                class="color-trans-05"
                :class="isMobileSmall ? 'mb-15' : 'mb-30'"
                data-aos="fade-right"
                data-aos-duration="1000"
                :max-width="isMobileSmall ? '400' : '302'"
              >
                Maktabizdagi imtihonlar bolalarning yoshiga qarab bolinggan
                bolib, unda suhbat va test orqali bolalar sinaladi
              </app-text>
              <app-text
                :size="isMobile ? 16 : 22"
                :line-height="isMobile ? 22 : 26"
                weight="500"
                class="color-gradient"
                data-aos="fade-right"
                data-aos-duration="800"
                :max-width="isMobileSmall ? '' : '154'"
              >
                Qabulimiz 3 xil turga bolinadi
              </app-text>
            </div>
            <div
              style="max-width: 800px; width: 100%"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <img
                src="/images/girls.png"
                alt=""
                style="width: 100%; height: auto; border-radius: 16px"
              />
            </div>
          </div>
          <div class="d-flex flex-wrap" style="gap: 20px" data-aos="fade-up">
            <div style="max-width: 384px; width: 100%" class="pa-20">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                :class="isMobileSmall ? 'mb-15' : 'mb-30'"
              >
                <g clip-path="url(#clip0_453_1106)">
                  <path
                    d="M20 0C8.97195 0 0 8.97195 0 20C0 31.028 8.97195 40 20 40C31.028 40 40 31.028 40 20C40 8.97195 31.028 0 20 0ZM20 37.5C10.3505 37.5 2.5 29.6495 2.5 20C2.5 10.3505 10.3505 2.5 20 2.5C29.6495 2.5 37.5 10.3505 37.5 20C37.5 29.6495 29.6495 37.5 20 37.5ZM30.5356 26.0938C28.3502 29.8785 24.4118 32.1381 20.0003 32.1382C15.5887 32.1383 11.65 29.8787 9.46445 26.0938C9.11922 25.4959 9.32398 24.7314 9.9218 24.3863C10.5198 24.041 11.2842 24.2459 11.6293 24.8436C13.363 27.8459 16.4923 29.6383 20.0002 29.6382C23.508 29.6381 26.6371 27.8458 28.3706 24.8436C28.7158 24.2457 29.4803 24.0409 30.0781 24.3862C30.676 24.7314 30.8808 25.4959 30.5356 26.0938ZM9.27172 15.0737C9.27172 13.6946 10.3937 12.5726 11.7728 12.5726C13.152 12.5726 14.2739 13.6945 14.2739 15.0737C14.2739 16.4528 13.152 17.5748 11.7728 17.5748C10.3937 17.5748 9.27172 16.4528 9.27172 15.0737ZM30.7284 15.0737C30.7284 16.4527 29.6064 17.5748 28.2273 17.5748C26.8481 17.5748 25.7262 16.4528 25.7262 15.0737C25.7262 13.6945 26.8481 12.5726 28.2273 12.5726C29.6063 12.5727 30.7284 13.6946 30.7284 15.0737Z"
                    fill="url(#paint0_linear_453_1106)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_453_1106"
                    x1="-7.1637"
                    y1="20"
                    x2="57.0134"
                    y2="19.3015"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0001" stop-color="#289FB1" />
                    <stop offset="0.00857493" stop-color="#5C9DA9" />
                    <stop offset="0.133133" stop-color="#4A91D8" />
                    <stop offset="0.250546" stop-color="#6D69CB" />
                    <stop offset="0.412769" stop-color="#ED389B" />
                    <stop offset="0.85592" stop-color="#B1FF9D" />
                  </linearGradient>
                  <clipPath id="clip0_453_1106">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <app-text
                :size="isMobile ? 20 : 24"
                :line-height="isMobile ? 26 : 32"
                weight="500"
                class="color-gradient mb-15"
              >
                Maktabgacha talim
              </app-text>
              <app-text
                :size="isMobile ? 16 : 20"
                :line-height="isMobile ? 22 : 28"
                weight="400"
                class="color-white"
              >
                Har chorak reytingida eng yuqori natija korsatgan oquvchilar
                uchun 50% chegirma
              </app-text>
            </div>
            <div style="max-width: 384px; width: 100%" class="pa-20">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                :class="isMobileSmall ? 'mb-15' : 'mb-30'"
              >
                <g clip-path="url(#clip0_453_1108)">
                  <path
                    d="M22.8241 3.9177L36.0824 17.176M22.8241 3.9177C26.4853 0.256527 32.4216 0.256637 36.0828 3.91781C39.744 7.57898 39.7436 13.5148 36.0824 17.176M22.8241 3.9177C20.8748 5.867 19.964 8.46125 20.0904 11.0135M36.0824 17.176C34.1331 19.1253 31.5394 20.0366 28.9871 19.9102M20.0904 11.0135L1.57617 33.8203L6.18031 38.4245L28.9871 19.9102M20.0904 11.0135L28.9871 19.9102M4.54613 30.1614L9.83894 35.4542M10.1819 23.2188C8.6671 25.0848 8.80741 27.7937 10.5069 29.4932C12.2064 31.1927 14.9153 31.3331 16.7813 29.8183M17.1196 14.6723L25.3277 22.8804"
                    stroke="url(#paint0_linear_453_1108)"
                    stroke-width="2.34375"
                    stroke-miterlimit="10"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_453_1108"
                    x1="-6.99951"
                    y1="23"
                    x2="56.5005"
                    y2="8"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4C92D4" />
                    <stop offset="0.333357" stop-color="#8D5DBF" />
                    <stop offset="0.533424" stop-color="#E3599C" />
                    <stop offset="1" stop-color="#C4C29D" />
                  </linearGradient>
                  <clipPath id="clip0_453_1108">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <app-text
                :size="isMobile ? 20 : 24"
                :line-height="isMobile ? 26 : 32"
                weight="500"
                class="color-gradient mb-15"
              >
                Birinchi sinf qabuli
              </app-text>
              <app-text
                :size="isMobile ? 16 : 20"
                :line-height="isMobile ? 22 : 28"
                weight="400"
                class="color-white"
              >
                Har chorak reytingida eng yuqori natija korsatgan oquvchilar
                uchun 50% chegirma
              </app-text>
            </div>
            <div style="max-width: 384px; width: 100%" class="pa-20">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                :class="isMobileSmall ? 'mb-15' : 'mb-30'"
              >
                <path
                  d="M33.3333 11.7334V28.2667C33.3333 30.8 33.1 32.6 32.5 33.8834C32.5 33.9 32.4833 33.9334 32.4666 33.95C32.1 34.4167 31.6167 34.65 31.05 34.65C30.1667 34.65 29.1 34.0667 27.95 32.8334C26.5834 31.3667 24.4833 31.4834 23.2833 33.0834L21.6 35.3167C20.9334 36.2167 20.05 36.6667 19.1667 36.6667C18.2833 36.6667 17.4 36.2167 16.7333 35.3167L15.0334 33.0667C13.85 31.4834 11.7667 31.3667 10.4 32.8167L10.3833 32.8334C8.49997 34.85 6.83337 35.15 5.8667 33.95C5.85003 33.9334 5.83333 33.9 5.83333 33.8834C5.23333 32.6 5 30.8 5 28.2667V11.7334C5 9.20004 5.23333 7.40004 5.83333 6.1167C5.83333 6.10004 5.83337 6.08337 5.8667 6.06671C6.8167 4.85004 8.49997 5.15004 10.3833 7.16671L10.4 7.18338C11.7667 8.63338 13.85 8.51671 15.0334 6.93337L16.7333 4.68338C17.4 3.78338 18.2833 3.33337 19.1667 3.33337C20.05 3.33337 20.9334 3.78338 21.6 4.68338L23.2833 6.91671C24.4833 8.51671 26.5834 8.63337 27.95 7.16671C29.1 5.93337 30.1667 5.35004 31.05 5.35004C31.6167 5.35004 32.1 5.60004 32.4666 6.06671C32.5 6.08337 32.5 6.10004 32.5 6.1167C33.1 7.40004 33.3333 9.20004 33.3333 11.7334Z"
                  stroke="url(#paint0_linear_453_1075)"
                  stroke-width="2.34375"
                  stroke-miterlimit="10"
                />
                <path
                  d="M13.333 17.0834H26.6663"
                  stroke="url(#paint1_linear_453_1075)"
                  stroke-width="2.34375"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M13.333 22.9166H23.333"
                  stroke="url(#paint2_linear_453_1075)"
                  stroke-width="2.34375"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_453_1075"
                    x1="-1.52248"
                    y1="22.865"
                    x2="47.4931"
                    y2="13.0232"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4C92D4" />
                    <stop offset="0.333357" stop-color="#8D5DBF" />
                    <stop offset="0.533424" stop-color="#E3599C" />
                    <stop offset="1" stop-color="#C4C29D" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_453_1075"
                    x1="10.2636"
                    y1="17.6693"
                    x2="12.461"
                    y2="10.7483"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4C92D4" />
                    <stop offset="0.333357" stop-color="#8D5DBF" />
                    <stop offset="0.533424" stop-color="#E3599C" />
                    <stop offset="1" stop-color="#C4C29D" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_453_1075"
                    x1="11.031"
                    y1="23.5026"
                    x2="13.766"
                    y2="17.0417"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4C92D4" />
                    <stop offset="0.333357" stop-color="#8D5DBF" />
                    <stop offset="0.533424" stop-color="#E3599C" />
                    <stop offset="1" stop-color="#C4C29D" />
                  </linearGradient>
                </defs>
              </svg>
              <app-text
                :size="isMobile ? 20 : 24"
                :line-height="isMobile ? 26 : 32"
                weight="500"
                class="color-gradient mb-15"
              >
                Yuqori sinflar qabuli
              </app-text>
              <app-text
                :size="isMobile ? 16 : 20"
                :line-height="isMobile ? 22 : 28"
                weight="400"
                class="color-white"
              >
                Har chorak reytingida eng yuqori natija korsatgan oquvchilar
                uchun 50% chegirma
              </app-text>
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
export default {
  name: "AppAcceptance",
  components: { AppButton, YoutubeLinkBanner },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
