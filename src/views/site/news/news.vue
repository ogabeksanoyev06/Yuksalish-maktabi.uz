<template>
  <div class="section">
    <div class="news py-30">
      <div class="container">
        <app-text
          :size="isMobile ? 32 : 48"
          :line-height="isMobile ? 40 : 64"
          weight="700"
          class="mb-20 color-orange-gradient"
          data-aos="fade-right"
        >
          Yangiliklar
        </app-text>
        <loader v-if="loading" />
        <div class="news__wrapper" v-if="!loading">
          <div
            class="news__wrapper-item"
            v-for="(item, index) in news"
            :key="index"
            :data-aos-delay="index * 50"
            data-aos="fade-up"
            @click="goToLink(item.id)"
          >
            <div class="news__wrapper-photo">
              <img :src="'http://api.yuksalishmaktabi.uz' + item.img" />
            </div>
            <div class="news__wrapper-content">
              <div class="news__wrapper-title">
                {{ item[$localeKey("name")] }}
              </div>
              <div class="d-flex flex-wrap justify-space-between">
                <span class="name">
                  <span style="color: #f2741e">#</span>Yuksalish maktabi
                </span>
                <span class="date" style="text-align: right">
                  21 Iyun 2023
                </span>
              </div>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loader from "@/components/shared-components/Loader.vue";
export default {
  name: "AppNews",
  components: { Loader },
  data() {
    return {
      news: [],
      loading: true,
    };
  },
  methods: {
    getNews() {
      this.loading = true;
      this.$api
        .get("news/")
        .then((data) => {
          if (!data.error) {
            this.news = data;
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
    goToLink(newsId) {
      this.$router.push({
        name: "detailed-news",
        params: { newsId: newsId },
      });
    },
  },
  mounted() {
    this.getNews();
  },
};
</script>
<style lang="scss" scoped>
.news__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  &-item {
    $self: &;
    $trans: 0.2s;
    position: relative;
    width: 100%;
    background: #fff;
    border: 1px solid rgba(159, 171, 185, 0.2);
    border-radius: 4px;
    transition: all 0.3s !important;
    cursor: pointer;
    &:hover {
      transform: translateY(-5px);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      .line {
        width: 80%;
      }
    }
  }
  &-photo {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      max-height: 204px;
      object-fit: cover;
      border-radius: 4px 4px 0 0;
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 20px 14px;
    text-align: left;
  }
  &-title {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 21px;
    color: #060032;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 16px;
  }
  .line {
    width: 10%;
    height: 2px;
    background: #f2741e;
    transition: all 0.5s;
    position: absolute;
    bottom: 0;
  }
  .name,
  .date {
    color: #9fabb9;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 20px;
  }
}
@media (max-width: 768px) {
  .news__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
@media (max-width: 500px) {
  .news__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
