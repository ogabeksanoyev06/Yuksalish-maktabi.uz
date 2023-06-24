<template>
  <div class="section">
    <div class="teacher py-30">
      <div class="container">
        <app-text
          :size="isMobile ? 32 : 48"
          :line-height="isMobile ? 40 : 64"
          weight="700"
          class="mb-20 color-orange-gradient"
          data-aos="fade-right"
        >
          O'qituvchilar
        </app-text>
        <div class="mb-30">
          <cta-banner />
        </div>
        <app-text
          :size="isMobile ? 32 : 48"
          :line-height="isMobile ? 40 : 64"
          weight="700"
          class="mb-30 color-orange-gradient"
          data-aos="fade-right"
        >
          Malakali ustozlar
        </app-text>
        <div class="wrapper">
          <div
            class="wrapper__item"
            v-for="(item, i) in 10"
            :key="i"
            data-aos="fade-up"
            :data-aos-duration="(i + 1) * 100"
          >
            <img
              src="/images/muhammadalieshonqulov1.png"
              class="mb-20"
              style="max-width: 100%; height: auto"
            />
            <app-text
              :size="isMobile ? 24 : 32"
              :line-height="isMobile ? 32 : 40"
              weight="600"
              class="mb-10"
            >
              Muhammadali Eshonqulov
            </app-text>
            <app-text
              :size="isMobile ? 18 : 20"
              :line-height="isMobile ? 24 : 26"
              weight="500"
            >
              O'qituvchilar
            </app-text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CtaBanner from "@/components/pages/CtaBanner.vue";
export default {
  name: "AppTeachers",
  components: { CtaBanner },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
@media (max-width: 991px) {
  .wrapper {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 576px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
