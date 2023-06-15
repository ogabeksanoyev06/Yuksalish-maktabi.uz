<template>
  <div class="py-60" :class="bgGreen ? 'bgGreen' : ''">
    <div class="container">
      <div class="section__top mb-30" v-if="topLink">
        <app-text
          :size="isMobile ? 24 : 30"
          :line-height="isMobile ? 28 : 36"
          class="color-green"
          weight="400"
        >
          Qoshimcha kurs va <br />
          to‘garaklarimiz
        </app-text>
        <div class="section__top-details">
          <app-text
            :size="isMobile ? 16 : 18"
            :line-height="isMobile ? 24 : 26"
            class="mb-20 color-green"
            weight="400"
            max-width="500"
          >
            Maktabimizlarimiz bino, xona, bolalar o‘quv jarayonidan, turli xil
            sport musobaqalardan olingan rasimlar.
          </app-text>
          <router-link class="section__top-link" to="/">
            <app-button
              theme="main"
              :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
              sides="20"
              class="mb-10"
              :height="isMobileSmall ? '40' : '50'"
            >
              <span class="mr-10">MAKTAB HAQIDA BATAFSIL</span>
            </app-button>
          </router-link>
        </div>
      </div>
      <div class="excursion">
        <img
          src="/images/girls.png"
          style="
            width: auto;
            max-width: 100%;
            height: auto;
            border-radius: 24px;
          "
        />
        <div class="icon">
          <svg
            width="38"
            height="40"
            viewBox="0 0 38 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.333313 19.9999V11.6932C0.333313 1.37992 7.63665 -2.84341 16.5733 2.31325L23.7833 6.46658L30.9933 10.6199C39.93 15.7766 39.93 24.2233 30.9933 29.3799L23.7833 33.5332L16.5733 37.6866C7.63665 42.8433 0.333313 38.6199 0.333313 28.3066V19.9999Z"
              fill="#F47820"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppButton from "../shared-components/AppButton.vue";
export default {
  name: "YoutubeLinkBanner",
  components: { AppButton },
  props: {
    topLink: Boolean,
    bgGreen: Boolean,
    content: String,
    photo: String,
    link: String,
    buttonText: String,
  },
};
</script>
<style lang="scss" scoped>
.bgGreen {
  background-color: #091f00;
}
.excursion {
  position: relative;
  .icon {
    position: absolute;
    top: 50%;
    right: 50%;
    width: 90px;
    height: 90px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transform: translate(50%, -50%);
  }
}
@media (max-width: 500px) {
  .excursion {
    position: relative;
    .icon {
      width: 50px;
      height: 50px;
      svg {
        width: 18px;
      }
    }
  }
}
</style>
