<template>
  <div class="section">
    <div class="media py-30">
      <div class="container">
        <app-text
          :size="isMobile ? 32 : 48"
          :line-height="isMobile ? 40 : 64"
          weight="700"
          class="mb-20 color-orange-gradient"
          data-aos="fade-right"
        >
          Media
        </app-text>
        <loader v-if="loading" />
        <div v-if="!loading">
          <CoolLightBox :items="items" :index="index" @close="index = null">
          </CoolLightBox>
          <div class="images-wrapper">
            <div
              v-for="(item, imageIndex) in media"
              @click="index = imageIndex"
              :key="imageIndex"
              class="images"
              data-aos="fade-up"
              :data-aos-duration="(imageIndex + 1) * 100"
            >
              <img :src="item.img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import Loader from "@/components/shared-components/Loader.vue";
export default {
  name: "AppMedia",
  components: { CoolLightBox, Loader },
  data() {
    return {
      items: [],
      index: null,
      media: [],
      loading: true,
    };
  },
  methods: {
    getMedia() {
      this.$api
        .get(`gallery/?typ=6`)
        .then((data) => {
          if (!data.error) {
            this.media = data;
            this.media.forEach((el) => {
              this.items.push({
                src: el.img,
              });
            });
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
    this.getMedia();
  },
};
</script>
<style lang="scss" scoped>
.images-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
.images {
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    transition: 0.3s ease !important;
    &:hover {
      margin-top: -5px;
    }
  }
}
@media (max-width: 991px) {
  .images-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 576px) {
  .images-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
