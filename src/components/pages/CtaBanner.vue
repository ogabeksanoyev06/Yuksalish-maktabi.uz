<template>
  <div class="container">
    <div class="cta__banner" :class="isDesktopSmall ? 'pa-10' : 'pa-30'">
      <div class="cta__banner-content">
        <app-text
          :size="isMobile ? 22 : 28"
          :line-height="isMobile ? 28 : 34"
          weight="700"
          class="mb-30 color-white"
          max-width="460"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          YUZ YILDA BIR KELADIGAN ENG BUYUK INSON - SIZSIZ
        </app-text>
        <app-text
          :size="isMobile ? 16 : 18"
          :line-height="isMobile ? 20 : 24"
          weight="400"
          class="color-white"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <span v-html="content" />
        </app-text>
      </div>
      <div class="cta__banner-photo" data-aos="fade-up" data-aos-duration="500">
        <img src="/images/muhammadalieshonqulov1.png" alt="" />
      </div>
      <div class="cta__banner-logo" data-aos="fade-up" data-aos-duration="700">
        <img src="/icons/logoBg.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CtaBanner",
  components: {},
  props: {
    title: String,
    content: String,
    photo: String,
    link: String,
    buttonText: String,
  },
};
</script>

<style lang="scss" scoped>
.cta__banner {
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #ff6801 34.18%, #ff9e44 85.48%);
  border-radius: 16px;
  position: relative;
  margin-top: 170px;
  &-logo {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &-photo {
    max-width: 450px;
    width: 100%;
    position: relative;
    margin-top: -150px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
  }

  &-content {
    width: calc(100% - 450px);
  }
}

@media (max-width: 991px) {
  .cta__banner {
    margin-top: 200px;
  }
  .cta__banner-photo {
    max-width: 40%;
  }

  .cta__banner-content {
    width: calc(100% - 40%);
  }
}

@media (max-width: 650px) {
  .cta__banner {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;

    &-photo {
      max-width: 80%;
      margin-top: 0;
    }
    &-logo {
      top: -70px;
      left: -16px;
    }
    &-content {
      width: 100%;
      padding: 20px;
    }
  }
}
</style>
