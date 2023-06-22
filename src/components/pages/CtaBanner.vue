<template>
  <div class="container">
    <div class="cta__banner my-60" :class="isDesktopSmall ? 'pa-30' : 'pa-60'">
      <div class="cta__banner-content">
        <app-text
          :size="isMobile ? 22 : 28"
          :line-height="isMobile ? 28 : 34"
          weight="700"
          class="mb-30"
          max-width="460"
        >
          YUZ YILDA BIR KELADIGAN ENG BUYUK INSON - SIZSIZ
        </app-text>
        <app-text
          :size="isMobile ? 16 : 18"
          :line-height="isMobile ? 20 : 24"
          weight="400"
          class=""
        >
          Ustoz Muhammadali Eshonqulov<br />
          Yuksalish maktabi asoschsi
        </app-text>
      </div>
      <div class="cta__banner-photo">
        <img src="/images/muhammadalieshonqulov.png" alt="" />
        <div v-if="!isDesktopSmall"></div>
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
  overflow: hidden;
  background: #ececec;
  border-radius: 16px;

  &-photo {
    max-width: 450px;
    width: 100%;
    position: relative;
    z-index: 1;
    div {
      position: absolute;
      bottom: -30px;
      right: -30px;
      width: 200px;
      height: 200px;
      background-color: #f2741e;
      z-index: -1;
      border-radius: 16px;
    }

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

    &-photo {
      max-width: 100%;
    }

    &-content {
      width: 100%;
      padding: 20px;
    }
  }
}
</style>
