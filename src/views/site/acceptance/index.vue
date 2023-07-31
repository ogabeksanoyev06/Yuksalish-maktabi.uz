<template>
  <section class="section">
    <div style="background-color: #060032; border-radius: 0 0 16px 16px">
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
            Qabul haqida ma'lumotlarimiz
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
            <AppButton
              theme="main"
              :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
              :sides="isMobileSmall ? '15' : '20'"
              class="mb-30 mx-auto d-flex align-center"
              :height="isMobileSmall ? '40' : '50'"
              @click="modalTrue"
            >
              <span :class="isMobileSmall ? '' : 'mr-10'">
                QABULGA YOZILISH
              </span>
              <img src="/icons/angle-right.svg" alt="" />
            </AppButton>
          </div>
        </div>

        <div class="container">
          <img
            src="/images/people.jpg"
            style="width: 100%; height: auto; object-fit: cover"
          />
        </div>
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
              Yuksalish maktabida qabul boshqichlari
            </app-text>
          </div>
          <div
            class="d-flex align-center mb-30"
            :class="isMobile ? 'flex-column' : ''"
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
                data-aos="fade-right"
                data-aos-duration="600"
              >
                Test.
              </app-text>
              <app-text
                :size="isMobile ? 24 : 41"
                :line-height="isMobile ? 32 : 50"
                weight="500"
                class="color-gradient mb-15"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                Psixologik suhbat.
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
                Shartnoma imzolash.
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
                Maktabimizdagi imtihonlar bolalarning yoshiga qarab bo'lingan
                bo'lib, unda test va suhbat orqali bolalar sinaladi
              </app-text>
              <!-- <app-text
                :size="isMobile ? 16 : 22"
                :line-height="isMobile ? 22 : 26"
                weight="500"
                class="color-gradient"
                data-aos="fade-right"
                data-aos-duration="800"
                :max-width="isMobileSmall ? '' : '154'"
              >
                Qabulimiz 3 xil turga bolinadi
              </app-text> -->
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
                Maktabgacha ta'lim
              </app-text>
              <app-text
                :size="isMobile ? 16 : 20"
                :line-height="isMobile ? 22 : 28"
                weight="400"
                class="color-white"
              >
                Maktabgacha tayyorgarlik tizimini ham yo'lga qo'ygan holda biz
                bolalarning maktabga tayyorgarligini olib boramiz.
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
                Birinchi sinfga suhbat asosida qabul qilinadi, malakali ustozlar
                tamonidan.
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
                Biz bunda bolalarni bilim darajasiga qarab test 30 ta beramiz va
                qisqa suhbat asosida qabul qilib olamiz
              </app-text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="background-color: #130024">
      <div
        style="background-color: #fff; border-radius: 0 0 16px 16px"
        :class="isMobile ? 'py-30' : 'py-60'"
      >
        <div class="container">
          <div class="section__top" :class="isMobile ? 'mb-30' : 'mb-60'">
            <app-text
              :size="isMobile ? 24 : 30"
              :line-height="isMobile ? 28 : 36"
              weight="500"
              class=""
              data-aos="fade-up"
            >
              Yuqori sinflarni <br />
              imtihoni haqida ma'lumot
            </app-text>
            <div class="section__top-details" data-aos="fade-up">
              <app-text
                :size="isMobile ? 16 : 18"
                :line-height="isMobile ? 24 : 26"
                weight="400"
                max-width="500"
                class="mb-20"
              >
                2 sinfdan yuqori bo'lgan bolalarni qabul qilish tartibi haqida
                ma'lumot.
              </app-text>
            </div>
          </div>
          <div class="d-flex flex-wrap" style="gap: 20px">
            <div
              style="
                background: #f8f6f8;
                border-radius: 16px;
                padding: 24px 28px;
                max-width: 384px;
                width: 100%;
              "
              :style="isMobile ? 'min-height:auto' : 'min-height:276px'"
              class="d-flex flex-column justify-space-between"
              v-for="(item, i) in list"
              :key="i"
              data-aos="fade-up"
              :data-aos-duration="(i + 1) * 500"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                :class="isMobileSmall ? 'mb-15' : 'mb-30'"
              >
                <path
                  d="M35 37.9167H5C4.31667 37.9167 3.75 37.3501 3.75 36.6667C3.75 35.9834 4.31667 35.4167 5 35.4167H35C35.6833 35.4167 36.25 35.9834 36.25 36.6667C36.25 37.3501 35.6833 37.9167 35 37.9167Z"
                  fill="#F4BE9A"
                />
                <path
                  d="M9.33329 13.9666H6.66667C5.75 13.9666 5 14.7166 5 15.6332V29.9999C5 30.9165 5.75 31.6665 6.66667 31.6665H9.33329C10.25 31.6665 11 30.9165 11 29.9999V15.6332C11 14.6999 10.25 13.9666 9.33329 13.9666Z"
                  fill="#F37221"
                />
                <path
                  d="M21.3333 8.6499H18.6667C17.75 8.6499 17 9.3999 17 10.3166V29.9999C17 30.9166 17.75 31.6666 18.6667 31.6666H21.3333C22.25 31.6666 23 30.9166 23 29.9999V10.3166C23 9.3999 22.25 8.6499 21.3333 8.6499Z"
                  fill="#F37221"
                />
                <path
                  d="M33.3333 3.33325H30.6667C29.75 3.33325 29 4.08325 29 4.99992V29.9999C29 30.9166 29.75 31.6666 30.6667 31.6666H33.3333C34.25 31.6666 35 30.9166 35 29.9999V4.99992C35 4.08325 34.25 3.33325 33.3333 3.33325Z"
                  fill="#F37221"
                />
              </svg>
              <div>
                <app-text
                  :size="isMobile ? 18 : 24"
                  :line-height="isMobile ? 24 : 32"
                  weight="500"
                  class="mb-10"
                >
                  {{ item.title }}
                </app-text>
                <app-text
                  :size="isMobile ? 16 : 20"
                  :line-height="isMobile ? 22 : 28"
                  weight="400"
                >
                  {{ item.text }}
                </app-text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="py-60"
      style="background-color: #130024; border-radius: 0 0 16px 16px"
    >
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
              class="mb-20 color-violet"
              data-aos="fade-right"
            >
              Birinchi sinf o'quvchilari faqatgina suhbat asosida qabul
              qilinadi.
            </app-text>
            <app-text
              :size="isMobile ? 16 : 22"
              :line-height="isMobile ? 22 : 28"
              weight="400"
              class="mb-30 color-violet"
              data-aos="fade-right"
            >
              Biz bolalarni dunyo qarashi o'qishga bolgan ishtiyoqi va
              tarbiyasiga qarab birinchi sinfga qabul qilamiz.
            </app-text>
            <app-text
              :size="16"
              :line-height="20"
              weight="400"
              class="mb-5 color-violet"
              data-aos="fade-right"
            >
              1.Kamonbozlik
            </app-text>
            <app-text
              :size="16"
              :line-height="20"
              weight="400"
              class="mb-5 color-violet"
              data-aos="fade-right"
            >
              2. Gimnastika
            </app-text>
            <app-text
              :size="16"
              :line-height="20"
              weight="400"
              class="mb-5 color-violet"
              data-aos="fade-right"
            >
              3.Shahmat
            </app-text>
            <app-text
              :size="16"
              :line-height="20"
              weight="400"
              class="mb-5 color-violet"
              data-aos="fade-right"
            >
              4. Pazandachilik
            </app-text>
            <app-text
              :size="16"
              :line-height="20"
              weight="400"
              class="mb-5 color-violet"
              data-aos="fade-right"
            >
              5. Mohir qo'llar
            </app-text>
          </div>
          <div
            style="position: relative; max-width: 680px; width: 100%"
            class="pb-60"
          >
            <swiper class="swiper" :options="swiperOptions">
              <swiper-slide
                v-for="(item, i) in images"
                :key="i"
                data-aos="fade-up"
                :data-aos-duration="(i + 1) * 500"
              >
                <div
                  style="max-width: 350px; width: 100%"
                  :style="isMobileSmall ? 'height:auto' : 'height: 550px;'"
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
                    d="M12.7603 7.90674L4.66699 16.0001L12.7603 24.0934M27.3337 16.0001H4.89366"
                    stroke="#130024"
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
                    d="M19.2397 7.90674L27.333 16.0001L19.2397 24.0934"
                    stroke="#130024"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.66644 16H27.1064"
                    stroke="#130024"
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
        <div
          style="
            width: 100%;
            height: 1px;
            opacity: 0.2;
            background-color: #e2c9fc;
            margin-top: 60px;
            margin-bottom: 30px;
          "
        ></div>
        <div
          class="d-flex align-center justify-space-between"
          data-aos="fade-up"
        >
          <svg
            width="59"
            height="39"
            viewBox="0 0 59 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="mr-20"
          >
            <mask
              id="mask0_411_549"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="59"
              height="39"
            >
              <rect width="59" height="38.4186" fill="url(#pattern0)" />
            </mask>
            <g mask="url(#mask0_411_549)">
              <rect width="59" height="38.4186" fill="#E2C9FC" />
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_411_549"
                  transform="matrix(0.00135042 0 0 0.00205778 -0.6875 -0.329904)"
                />
              </pattern>
              <image
                id="image0_411_549"
                width="1805"
                height="1200"
                xlink:href="data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6MOyLP8PmpLcrILmpJsAAAAASUVORK5CYII="
              />
            </defs>
          </svg>
          <app-text
            :size="isMobile ? 16 : 20"
            :line-height="isMobile ? 22 : 28"
            weight="400"
            class="color-violet"
            max-width="430"
          >
            Qabulga yilning istagan vaqtida yozilishingiz va suxbatga
            kelishingiz mumkin
          </app-text>
        </div>
      </div>
    </div>
    <div class="py-60" style="background-color: #f4f2f7">
      <div class="container">
        <div class="section__top" :class="isMobile ? 'mb-30' : 'mb-60'">
          <app-text
            :size="isMobile ? 24 : 32"
            :line-height="isMobile ? 28 : 44"
            weight="500"
            max-width="243"
            data-aos="fade-up"
          >
            Maktakgacha tayyorlov kursi
          </app-text>
        </div>
        <div class="d-flex flex-wrap justify-content-center" style="gap: 12px">
          <div
            v-for="item in items"
            :key="item.id"
            :class="isMobile ? 'pa-20' : 'pa-30'"
            class="student"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <img src="/images/girls.png" alt="" />
            <!-- <div
              style="
                background: #fff;
                padding: 12px;
                border-radius: 32px;
                width: fit-content;
              "
              :class="isMobile ? 'mb-20' : 'mb-40'"
            >
              <img :src="'/icons/' + item.svg" alt="" />
            </div> -->
            <app-text
              :size="isMobile ? 16 : 22"
              :line-height="isMobile ? 24 : 30"
              weight="500"
              class="color-white"
              :class="isMobile ? 'mb-15' : 'mb-20'"
            >
              {{ item.title }}
            </app-text>
            <app-text
              :size="isMobile ? 14 : 16"
              :line-height="isMobile ? 20 : 24"
              weight="500"
              class="d-flex align-center color-white"
            >
              <img src="/svg/okey.svg" alt="" class="mr-5" />
              Maktabgacha tayyorlov
            </app-text>
          </div>
        </div>
      </div>
    </div>
    <div class="py-60" style="background-color: #fff">
      <div class="container">
        <app-text
          :size="isMobile ? 22 : 32"
          :line-height="isMobile ? 28 : 44"
          weight="500"
          class="mb-20"
          data-aos="fade-right"
          max-width="474"
        >
          Maktab va o'qitish tizimi haqida ota - onalarning fikrlari
        </app-text>

        <swiper class="swiper" :options="swiperOptions2">
          <swiper-slide
            v-for="(item, i) in reviews"
            :key="i"
            data-aos="fade-up"
            :data-aos-duration="(i + 1) * 500"
          >
            <div
              style="background-color: #ececec; border-radius: 16px"
              :class="isMobile ? 'pa-20' : 'pa-30'"
            >
              <app-text
                :size="isMobile ? 16 : 20"
                :line-height="isMobile ? 22 : 28"
                weight="500"
                :class="isMobile ? 'mb-10' : 'mb-20'"
                max-width="420"
              >
                {{ item[$localeKey("title")] }}
              </app-text>
              <div class="d-flex align-center">
                <img
                  src="/images/girls.png"
                  style="
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    object-fit: cover;
                  "
                  class="mr-10"
                />
                <div>
                  <app-text size="16" line-height="22">
                    {{ item[$localeKey("name")] }}
                  </app-text>
                  <app-text size="14" line-height="18">
                    {{ item[$localeKey("info")] }}
                  </app-text>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <app-modal v-if="onlineReception" @close="closeModal" />
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import AppModal from "@/components/shared-components/AppModal.vue";
export default {
  name: "AppAcceptance",
  components: { AppButton, Swiper, SwiperSlide, AppModal },
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
        grabCursor: true,
        breakpoints: {
          400: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2.4,
          },
        },
        spaceBetween: 24,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      onlineReception: false,
      list: [
        {
          id: 0,
          title: "Matematika",
          text: "Bolalarga o'z yoshiga mos bo'lgan matematikadan bilimni sinash uchun 10 ta test beriladi.",
        },
        {
          id: 1,
          title: "Ingliz tili",
          text: "Bolalar ingliz tili darajasini sinfga qarab tuzilgan 10ta test orqali sinab olinadi.",
        },
        {
          id: 2,
          title: "IQ",
          text: "Bolalarni keng fikrlashini sinash uchun biz har biriga o'ziga mos 10 ta IQ testlarni beramiz.",
        },
        {
          id: 3,
          title: "Psixolog suhbati",
          text: "Oʻquvchilarning ruhiy-emotsional holatlarini barqaror holatda saqlanishini taʼminlash maqsadida oʻquvchilar hamda ota-onalar bilan hamkorlikda psixologik ish olib borish",
        },
      ],
      items: [
        {
          id: 0,
          title: "Alifbodagi barcha harflarni o'rgatish",
          svg: "abc.svg",
          background: "f3ca3d",
        },
        {
          id: 1,
          title: "Hisob - kitobda boshlang'ich ko'nikmalarga ega bo'lish",
          svg: "calculator.svg",
          background: "130024",
        },
        {
          id: 2,
          title: "Umumiy ahloq qoidalar bo'yicha tarbiya berish",
          svg: "smile.svg",
          background: "f09ddc",
        },
        {
          id: 3,
          title: "Tabiiy fanlardan boshlang'ich ko'nikmalar",
          svg: "calculator.svg",
          background: "f09ddc",
        },
        {
          id: 4,
          title: "Rasm artdan boshlang'ich ko'nikmalar",
          svg: "smile.svg",
          background: "f2741e",
        },
        {
          id: 5,
          title: "Arab tilidan boshlang'ich ko'nikmalar",
          svg: "abc.svg",
          background: "f3ca3d",
        },
        {
          id: 5,
          title: "Ingliz tilidan boshlang'ich ko'nikmalar",
          svg: "abc.svg",
          background: "f09ddc",
        },
      ],
      reviews: [],
      images: [],
    };
  },
  methods: {
    closeModal() {
      this.onlineReception = false;
    },
    modalTrue() {
      this.onlineReception = true;
    },
    getReviews() {
      this.$api
        .get(`reviews/`)
        .then((data) => {
          if (!data.error) {
            this.reviews = data;
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
    getPazandaImages() {
      this.$api
        .get(`gallery/?typ=9`)
        .then((data) => {
          if (!data.error) {
            this.images = data;
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
    this.getReviews();
    this.getPazandaImages();
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  position: absolute;
  bottom: -0px;
  width: 100%;
  z-index: 2;
  .slider-button {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    border: 1px solid #e2c9fc;
    background: #e2c9fc;
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
      left: 70px !important;
    }
  }
}
.student {
  max-width: 390px;
  width: 100%;
  min-height: 260px;
  height: 100%;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: 0.7;
  }
}
</style>
