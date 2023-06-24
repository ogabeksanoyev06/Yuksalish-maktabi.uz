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
          class="mb-20 color-orange-gradient"
          data-aos="fade-right"
        >
          Malakali ustozlar
        </app-text>
        <div class="wrapper">
          <div class="wrapper__item">
            <img src="" alt="" />
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
