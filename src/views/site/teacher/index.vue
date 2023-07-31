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
          Maktab asoschisi
        </app-text>
        <div class="mb-30">
          <cta-banner
            content="Muhammad Ali Eshonqulov Jizzax viloyati, Baxmal tumanida tavallud
          topgan. 5 yoshida Baxmal tumanidagi 1 - maktabda o'qishni boshlagan va
          keyinchalik, 4 - iqtidorli bolalar maktabida tahsil olgan. 15 yoshida
          Jahon iqtisidiyoti va diplomatiya universitetiga o'qishga kirgan.
          Hozir xalqaro toifadagi iqtisodchi, tadbirkor biznes -murabbiy,
          yuksalish ledrilar akdemiyasi, yuksalish makatbi, yuksalish choylari
          asoschisi.Muhamadali Eshonqulov shu vaqatgacha 10 000 dan ziyot
          shogirt chiqargan."
          />
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
            v-for="(item, i) in list"
            :key="i"
            data-aos="fade-up"
            :data-aos-duration="(i + 1) * 100"
          >
            <img
              :src="'http://api.yuksalishmaktabi.uz' + item.img"
              class="mb-20"
              style="max-width: 100%; height: auto"
            />
            <app-text
              :size="isMobile ? 24 : 32"
              :line-height="isMobile ? 32 : 40"
              weight="600"
              class="mb-10"
            >
              {{ item[$localeKey("name")] }}
            </app-text>
            <app-text
              :size="isMobile ? 18 : 20"
              :line-height="isMobile ? 24 : 26"
              weight="500"
            >
              {{ item[$localeKey("title")] }}
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
    return {
      list: [],
    };
  },
  methods: {
    getTeacherList() {
      this.$api
        .get(`person/`)
        .then((data) => {
          if (!data.error) {
            this.list = data;
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
    this.getTeacherList();
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
