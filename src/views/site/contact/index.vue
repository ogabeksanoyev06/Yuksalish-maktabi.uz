<template>
  <section class="section" style="padding-top: 60px">
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
        Aloqa bo‘limi
      </app-text>
      <app-text
        :size="isMobile ? 16 : 20"
        :line-height="isMobile ? 22 : 32"
        weight="200"
        class="mb-30 mx-auto text-center color-trans-04"
        maxWidth="540"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        Bizga aloqaga chiqing va ozingiz qiziqtiradigan savollarga javob oling;
      </app-text>
      <div data-aos="fade-up" data-aos-duration="900">
        <app-button
          theme="main"
          :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
          :sides="isMobileSmall ? '15' : '20'"
          class="mb-30 mx-auto d-flex align-center"
          :height="isMobileSmall ? '40' : '50'"
          @click="modalTrue"
        >
          <span :class="isMobileSmall ? '' : 'mr-10'"> QABULGA YOZILISH </span>
          <img src="/icons/angle-right.svg" alt="" />
        </app-button>
      </div>
    </div>
    <div style="background: #130024" :class="isMobile ? 'py-30' : 'py-60'">
      <div class="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.5236520612602!2d69.2180579399769!3d41.30783452689444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b1f8365179b%3A0xa2d2db9aa56870c0!2sYuksalish%20maktabi!5e0!3m2!1suz!2s!4v1687601929534!5m2!1suz!2s"
          height="550"
          style="border-radius: 20px; width: 100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="mb-30"
        >
        </iframe>
        <div class="location">
          <div
            style="background-color: #ececec; border-radius: 16px"
            class="pa-20"
            v-for="(item, i) in maps"
            :key="i"
          >
            <app-text
              :size="isMobile ? 16 : 24"
              :line-height="isMobile ? 22 : 32"
              weight="600"
              class="mb-20"
            >
              {{ item[$localeKey("name")] }}
            </app-text>
            <app-text
              :size="16"
              :line-height="16"
              weight="400"
              class="mb-15 d-flex align-center"
            >
              <img src="/icons/day.svg" alt="" class="mr-10" width="24px" />
              {{ item[$localeKey("title")] }}
            </app-text>
            <app-text
              :size="16"
              :line-height="16"
              weight="400"
              class="mb-15 d-flex align-center"
            >
              <img src="/icons/tel.svg" alt="" class="mr-10" width="24px" />
              {{ item.tel }}
            </app-text>
            <app-text
              :size="16"
              :line-height="16"
              weight="400"
              class="mb-15 d-flex align-center"
            >
              <img src="/icons/email.svg" alt="" class="mr-10" width="24" />
              {{ item.email }}
            </app-text>
            <app-text
              :size="16"
              :line-height="16"
              weight="400"
              class="d-flex align-center"
            >
              <img src="/icons/addres.svg" alt="" class="mr-10" width="24" />
              {{ item[$localeKey("address")] }}
            </app-text>
          </div>
        </div>
      </div>
    </div>

    <div class="py-60">
      <div class="container">
        <app-text
          :size="isMobile ? 22 : 32"
          :line-height="isMobile ? 28 : 44"
          weight="500"
          :class="isMobile ? 'mb-20' : 'mb-40'"
          data-aos="fade-right"
        >
          Kop beriladigan savollar
        </app-text>
        <accordion>
          <accordion-item
            class="m-20"
            v-for="(sectionContent, sectionContentIndex) in faq"
            :key="sectionContentIndex"
          >
            <template slot="accordion-trigger">
              <div
                class="question__accordion-header"
                @click="listItem(sectionContent.id)"
              >
                <app-text
                  :size="isMobile ? 20 : 24"
                  :line-height="isMobile ? 24 : 32"
                  weight="500"
                >
                  {{ sectionContent[$localeKey("name")] }}
                </app-text>
              </div>
              <img src="/icons/plus.svg" alt="" />
            </template>
            <template slot="accordion-content">
              <div style="padding: 15px 0">
                <div class="question__accordion-item">
                  <app-text
                    :size="isMobile ? 16 : 18"
                    :line-height="isMobile ? 22 : 26"
                    weight="400"
                    max-width="760"
                    class="color-trans-04"
                  >
                    {{ sectionContent[$localeKey("title")] }}
                  </app-text>
                </div>
              </div>
            </template>
          </accordion-item>
        </accordion>
      </div>
    </div>
    <app-modal v-if="onlineReception" @close="closeModal" />
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import Accordion from "@/components/shared-components/Accordion.vue";
import AccordionItem from "@/components/shared-components/AccordionItem.vue";
import AppModal from "@/components/shared-components/AppModal.vue";
export default {
  name: "AppContact",
  components: { AppButton, Accordion, AccordionItem, AppModal },
  data() {
    return {
      list: [
        {
          id: 0,
          name: "Qoshimcha kurslar bormi?",
          contentList: [
            {
              name: "Darslarimiz haftada 5 kun yani Dushambadan Jumagacha bolib otadi. Darslarimiz ertalab soat 9:00 dan 17:30 gacha bolgan vaqt oraligida bolib otadi",
            },
          ],
        },
        {
          id: 1,
          name: "Qoshimcha kurslar bormi?",
          contentList: [
            {
              name: "Darslarimiz haftada 5 kun yani Dushambadan Jumagacha bolib otadi. Darslarimiz ertalab soat 9:00 dan 17:30 gacha bolgan vaqt oraligida bolib otadi",
            },
          ],
        },
        {
          id: 2,
          name: "Qoshimcha kurslar bormi?",
          contentList: [
            {
              name: "Darslarimiz haftada 5 kun yani Dushambadan Jumagacha bolib otadi. Darslarimiz ertalab soat 9:00 dan 17:30 gacha bolgan vaqt oraligida bolib otadi",
            },
          ],
        },
      ],
      maps: [],
      faq: [],
      activeListItem: null,
      onlineReception: false,
    };
  },
  methods: {
    listItem(id) {
      this.activeListItem == id;
    },
    closeModal() {
      this.onlineReception = false;
    },
    modalTrue() {
      this.onlineReception = true;
    },
    getMaps() {
      this.loading = true;
      this.$api
        .get("map/")
        .then((data) => {
          if (!data.error) {
            this.maps = data;
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
    getFaq() {
      this.loading = true;
      this.$api
        .get("faq/")
        .then((data) => {
          if (!data.error) {
            this.faq = data;
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
    this.getMaps();
    this.getFaq();
  },
};
</script>
<style lang="scss" scoped>
.location {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

@media (max-width: 991px) {
  .location {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 576px) {
  .location {
    grid-template-columns: 1fr;
  }
}
</style>
